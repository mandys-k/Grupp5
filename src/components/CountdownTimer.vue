<script>
    import readingBird from '@/assets/reading-bird.png'

    export default {
        data() {
            return {
                startingMinutes: 10,
                minutes: "00",
                seconds: "00",
                timer: null,
                totalSeconds: 0,
                replay: false,
                replayTime: null,
                timeWarning: false,
                bird: readingBird
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

                    if(this.totalSeconds < 60) {
                    this.timeWarning = true
                }
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
    <div class="timer-wrapper">
        <div>
            <p  v-if="!timer">Pick how long you want to study</p>
            <div class="time-container">
                <button
                    v-if="!timer"
                    @click="onShortTimer"
                    type="button"
                    class="timer-button five-min-button"
                >
                    5 minutes
                    <span class="material-symbols-outlined"> play_arrow </span>
            </button>
                <button
                    v-if="!timer"
                    @click="onStartTimer"
                    type="button"
                    class="timer-button"
                >
                    10 minutes
                    <span class="material-symbols-outlined"> play_arrow </span>
                </button>
                <button
                    v-if="!timer"
                    @click="onLongTimer"
                    type="button"
                    class="timer-button"
                >
                    15 minutes
                    <span class="material-symbols-outlined"> play_arrow </span>
                </button>
            </div>
            <div class="timer-container">
                <div class="min-sec-container" :class="{ shortTime: timeWarning }" v-if="timer">
                    <span>{{ minutes }}</span>
                    <span>:</span>
                    <span>{{ seconds }}</span>
                </div>
                <span v-if="timer" class="material-symbols-outlined timer-icons"> timer_play </span>
            </div>
            <div class="times-up-container">
                <p class="times-up-paragraph" v-if="replay">TIME'S UP!</p>
                <span
                        v-if="replay"
                        @click="restartTimer"
                        class="material-symbols-outlined timer-icons replay-icon"
                    >
                        replay
                    </span>
            </div>
        </div>
        <img :src="bird" alt="">
    </div>
</template>

<style scoped>
    .timer-button {
        font-family: "Varela Round", sans-serif;
        display: flex;
        padding: 0.5em;
        background-image: linear-gradient(to right, #B6ECFB 10%, #257FC9);
        border-radius: .5em;
        border: 2px solid #257FC9;
    }

    .timer-button:hover {
        background-image: linear-gradient(to left, #B6ECFB 10%, #257FC9);
    }

    .timer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .2em;
        margin-right: 4.5em;
    }

    .time-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    p {
        text-align: center;
        font-family: "PT serif", serif;
        font-size: 1.1em;
    }

    .min-sec-container span {
        font-size: 2em;
    }

    .timer-icons {
       font-size: 2em;
    }

    .times-up-paragraph {
        color: red;
        font-size: 1.2em;
        margin: 1em 0 .5em;
    }

    .times-up-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .shortTime {
        color: red;
    }

    .replay-icon:hover {
        cursor: pointer;
        color: rgb(131, 131, 131);
    }

    img {
        width: 200px;
        height: auto;
        margin-right: 10em;
    }

    .timer-wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 17em;
    }

    /*
        font-family: "Jost", sans-serif;
    */
</style>
