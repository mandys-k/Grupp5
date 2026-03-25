<script>
    import CountdownTimer from "../components/CountdownTimer.vue"
    import VocabularyQuiz from "../components/VocabularyQuiz.vue"

    export default {
        components: {
            CountdownTimer,
            VocabularyQuiz
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

    <h1>Quiz</h1>
    <VocabularyQuiz />
    <div id="levels-container">
        <span class="material-symbols-outlined"> arrow_back </span>
        <RouterLink id="levels-link" to="/learning/1">
            Back to all categories
        </RouterLink>
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        font-family: "PT serif", serif;
        margin-top: 1em;
    }

    #levels-link {
        color: black;
        font-size: 1.1em;
    }

    #levels-link:hover {
        color: rgb(83, 83, 83);
    }

    #levels-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        margin: 5em;
    }

    .timer-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
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
