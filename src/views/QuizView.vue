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
    <div class="back-link-container">
        <RouterLink to="/learning/1" class="back-link">← Back to all categories</RouterLink>
    </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        font-family: "PT serif", serif;
    }

    .back-link-container {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        margin-bottom: 24px;
    }

    .back-link {
        color: #0b0b62;
        font-weight: 600;
        text-decoration: none;
        font-size: 0.95rem;
    }

    .back-link:hover {
        text-decoration: underline;
    }
</style>
