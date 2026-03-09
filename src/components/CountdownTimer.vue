<script>
    export default {
        data() {
            return {
                startingMinutes: 10,
                minutes: "00",
                seconds: "00",
                timer: null,
                totalSeconds: 0,
                replay: false,
                replayTime: null
            }
        },
        methods: {
            onStartTimer() {
                this.totalSeconds = this.startingMinutes * 60

                this.timer = setInterval(() => {
                    if (this.totalSeconds === 0) {
                        clearInterval(this.timer)
                        this.timer = null
                        this.replay = true
                        return
                    }

                    this.totalSeconds--

                    const mins = Math.floor(this.totalSeconds / 60)
                    const secs = this.totalSeconds % 60

                    this.minutes = mins < 10 ? "0" + mins : mins
                    this.seconds = secs < 10 ? "0" + secs : secs

                    this.replay = false
                }, 1000)

                this.replayTime = this.startingMinutes
                //console.log(this.timer)
            },
            onShortTimer() {
                this.startingMinutes = 5

                this.onStartTimer()
            },
            onLongTimer() {
                this.startingMinutes = 15

                this.onStartTimer()
            },
            restartTimer() {
                this.startingMinutes = this.replayTime

                this.onStartTimer()
            }
        }
    }
</script>

<template>
    <p>Pick how long you want to study</p>

    <div class="time-container">
        <BButton
            v-if="!timer"
            @click="onShortTimer"
            type="button"
            class="timer-button five-min-button"
        >
            5 minutes
            <span class="material-symbols-outlined"> play_arrow </span>
        </BButton>
        <BButton
            v-if="!timer"
            @click="onStartTimer"
            type="button"
            class="timer-button"
        >
            10 minutes
            <span class="material-symbols-outlined"> play_arrow </span>
        </BButton>
        <BButton
            v-if="!timer"
            @click="onLongTimer"
            type="button"
            class="timer-button"
        >
            15 minutes
            <span class="material-symbols-outlined"> play_arrow </span>
        </BButton>
    </div>

    <div class="timer-container">
        <div class="min-sec-container" v-if="timer">
            <span>{{ minutes }}</span>
            <span>:</span>
            <span>{{ seconds }}</span>
        </div>

        <span v-if="timer" class="material-symbols-outlined"> timer_play </span>

        <span
            v-if="replay"
            @click="restartTimer"
            class="material-symbols-outlined"
        >
            replay
        </span>
    </div>

    <p v-if="replay">Time's up!</p>
</template>

<style scoped>
    .timer-button {
        font-family: "Varela Round", sans-serif;
        display: flex;
        padding: 0.5em;
    }

    .timer-container {
        display: flex;
        justify-content: center;
    }

    .time-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    p {
        text-align: center;
    }

    /*
        font-family: "PT serif", serif;
        font-family: "Jost", sans-serif;
    */
</style>
