<script>
    import CountdownTimer from '../components/CountdownTimer.vue';
    import VocabularyQuiz from '../components/VocabularyQuiz.vue';

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
</template>

<style scoped>
    h1 {
        text-align: center;
        font-family: "PT serif", serif;
    }
</style>
