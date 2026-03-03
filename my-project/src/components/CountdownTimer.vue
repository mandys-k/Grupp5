<script>
    export default {
        data() {
            return { startingMinutes: 10, minutes: "10", seconds: "00", timer: null,  totalSeconds: 0}
        },
        methods: {
            onClick() {
                if(this.timer) return

                this.totalSeconds = this.startingMinutes * 60

                this.timer = setInterval(() => {
                    if(this.totalSeconds <= 0) {
                        clearInterval(this.timer)
                        this.timer = null
                        return
                    }

                    this.totalSeconds--

                    const mins = Math.floor(this.totalSeconds / 60)
                    const secs = this.totalSeconds % 60

                    this.minutes = mins < 10 ? '0' + mins : mins
                    this.seconds = secs < 10 ? '0' + secs : secs
                }, 1000)
            },
            onShortTimer() {
                this.startingMinutes = 5

                this.onClick()
            },
            onLongTimer() {
                this.startingMinutes = 15

                this.onClick()
            }
        }
    }
</script>

<template>
    <div class="timer-container">
        <span>{{ minutes }}</span>
        <span>:</span>
        <span>{{ seconds }}</span>
        
        <button @click="onShortTimer" type="button" class="timer-button" :disabled="timer">
            Five minutes
           <span class="material-symbols-outlined">
                play_arrow
            </span>
        </button>

        <button @click="onClick" type="button" class="timer-button" :disabled="timer">
            Ten minutes
           <span class="material-symbols-outlined">
                play_arrow
            </span>
        </button>


        <button @click="onLongTimer" type="button" class="timer-button" :disabled="timer">
            Fifteen minutes
           <span class="material-symbols-outlined">
                play_arrow
            </span>
        </button>
    </div>

    <button type="button" class="play-button">
        <span class="material-symbols-outlined">
            timer_play
        </span>
    </button>

    <!-- <span class="material-symbols-outlined">
        replay
    </span> -->
</template>
