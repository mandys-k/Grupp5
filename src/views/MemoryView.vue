<script>
    import CountdownTimer from "../components/CountdownTimer.vue"
    import MemoryGame from "../components/MemoryGame.vue"

    export default {
        components: {
            MemoryGame,
            CountdownTimer
        },
        data() {
            return { showTimer: false }
        }
    }
</script>

<template>
    <div class="timer-btn-container">
        <button class="timer-btn" @click="showTimer = !showTimer">
            Timer⏰
        </button>
    </div>

    <div v-if="showTimer">
        <CountdownTimer />
    </div>

    <h1>Memory game</h1>
    <MemoryGame />
</template>

<style scoped>
    h1 {
        text-align: center;
        font-family: "PT serif", serif;
        margin-top: 1em;
    }

    .timer-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .timer-btn {
        width: 100%;
        max-width: 200px;
        background-color: #0b0b62;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
