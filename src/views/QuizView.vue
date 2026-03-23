<script>
    import CountdownTimer from "../components/CountdownTimer.vue"
    import VocabularyQuiz from "../components/VocabularyQuiz.vue"

    export default {
        components: {
            CountdownTimer,
            VocabularyQuiz
        }
    }
</script>

<template>
    <h1>Quiz</h1>
    <CountdownTimer />
    <VocabularyQuiz />
    <div id="levels-container">
        <span class="material-symbols-outlined"> arrow_back </span>
        <RouterLink id="levels-link" to="/learning/:level">
            Back to all categories
        </RouterLink>
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        font-family: "PT serif", serif;
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
</style>
