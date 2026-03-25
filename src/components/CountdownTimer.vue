<script>
    import readingBird from "@/assets/reading-bird.png"

    export default {
        data() {
            return {
                startingMinutes: 10,
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
                    this.replay = false

                    if (this.totalSeconds < 60) {
                        this.timeWarning = true
                    }
                }, 1000)

                this.replayTime = this.startingMinutes
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
        },
        computed: {
            minutes() {
                const mins = Math.floor(this.totalSeconds / 60)
                return mins < 10 ? "0" + mins : mins
            },
            seconds() {
                const secs = this.totalSeconds % 60
                return secs < 10 ? "0" + secs : secs
            }
        }
    }
</script>

<template>
    <div class="timer-img-wrapper">
        <div class="timer-wrapper">
            <p v-if="!timer">Pick how long you want to study</p>
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
                <div
                    class="min-sec-container"
                    :class="{ shortTime: timeWarning }"
                    v-if="timer"
                >
                    <span>{{ minutes }}</span>
                    <span>:</span>
                    <span>{{ seconds }}</span>
                </div>
                <span
                    v-if="timer"
                    class="material-symbols-outlined timer-icons"
                >
                    timer_play
                </span>
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
        <img :src="bird" alt="our mascot reading a book" />
    </div>
</template>

<style scoped>
    .timer-button {
        font-family: "Varela Round", sans-serif;
        display: flex;
        padding: 0.5em;
        background-image: linear-gradient(to right, #b6ecfb 10%, #257fc9);
        border-radius: 0.5em;
        border: 2px solid #257fc9;
    }

    .timer-button:hover {
        background-image: linear-gradient(to left, #b6ecfb 10%, #257fc9);
    }

    .timer-wrapper {
        width: 270px;
        height: 210px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .timer-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2em;
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
        margin: 1em 0 0.5em;
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
    }

    .timer-img-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 4em;
    }
</style>
