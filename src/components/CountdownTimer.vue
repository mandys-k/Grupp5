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
                if (this.timer) return

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
    <div class="timer-container">
        <p>Pick how long you want to study</p>
        <div v-if="timer">
            <span>{{ minutes }}</span>
            <span>:</span>
            <span>{{ seconds }}</span>
        </div>

        <button
            v-if="!timer"
            @click="onShortTimer"
            type="button"
            class="timer-button"
        >
            Five minutes
            <span class="material-symbols-outlined"> play_arrow </span>
        </button>

        <button
            v-if="!timer"
            @click="onStartTimer"
            type="button"
            class="timer-button"
        >
            Ten minutes
            <span class="material-symbols-outlined"> play_arrow </span>
        </button>

        <button
            v-if="!timer"
            @click="onLongTimer"
            type="button"
            class="timer-button"
        >
            <!-- :disabled="timer" -->
            Fifteen minutes
            <span class="material-symbols-outlined"> play_arrow </span>
        </button>

        <button v-if="timer" type="button" class="play-button">
            <span class="material-symbols-outlined"> timer_play </span>
        </button>

        <p v-if="replay">Time's up!</p>

        <span
            v-if="replay"
            @click="restartTimer"
            class="material-symbols-outlined"
        >
            replay
        </span>
    </div>

    <h2>Testar fonts</h2>
    <h3>Testar fonts</h3>
</template>

<style scoped>
    button {
        font-family: "Varela Round", sans-serif;
    }

    h2 {
        font-family: "PT serif", serif;
    }

    h3 {
        font-family: "Jost", sans-serif;
    }
</style>
