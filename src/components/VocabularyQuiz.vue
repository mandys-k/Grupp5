<script setup>
    import { useQuizStore } from "../stores/quizStore";

    const store = useQuizStore()
 </script>

<template>
    <button @click="store.startQuiz()">Start quiz</button>
    <div v-if="store.showAnswers">
        <div class="quiz-wrapper">
            <h2 v-if="store.currentQuestion && store.questionNumber > 0">The question {{ store.questionNumber }}. {{ store.currentQuestion.question }}</h2>
            <div v-for="answer in store.currentQuestion.answers" class="answer-container">
                <button @click="store.selectAnswer()" :disabled="store.chosenAnswer"> {{ answer.text }}</button>
            </div>
        </div>

        <button>Previous</button>
        <button @click="store.nextQuestion()" v-if="store.chosenAnswer" class="next-button">Next</button>
        <button class="replay">Redo test</button>
    </div>
</template>

<style scoped>

</style>
