<script setup>
    import { useQuizStore } from "../stores/quizStore"

    const store = useQuizStore()
</script>

<template>
    <button id="start-button" @click="store.startQuiz()">Start quiz</button>
    <div v-if="store.showAnswers">
        <div class="quiz-wrapper">
            <h2 v-if="store.currentQuestion && store.questionNumber > 0">
                The question {{ store.questionNumber }}.
                {{ store.currentQuestion.question }}
            </h2>
            <div
                v-for="answer in store.currentQuestion.answers"
                :key="answer.text"
                class="answer-container"
            >
                <button
                    @click="store.selectAnswer(answer)"
                    :class="{ selected: store.selectedAnswer === answer }"
                    :style="{
                        cursor:
                            store.selectedAnswer &&
                            store.selectedAnswer !== answer
                                ? 'no-drop'
                                : 'pointer'
                    }"
                >
                    {{ answer.text }}
                </button>
            </div>
        </div>

        <button
            @click="store.previousQuestion()"
            v-if="store.currentQuestionIndex > 0"
        >
            Previous
        </button>

        <button
            @click="store.nextQuestion()"
            v-if="store.currentQuestionIndex < store.questions.length - 1"
            :disabled="!store.selectedAnswer"
            class="next-button"
        >
            Next
        </button>

        <button
            @click="store.showScore()"
            v-if="store.currentQuestionIndex === store.questions.length - 1"
            :disabled="!store.selectedAnswer"
        >
            Check result
        </button>

        <p v-if="store.finished">
            You scored {{ store.score }} out of {{ store.questions.length }} !
        </p>
        <img
            v-if="store.finished && store.score >= 2"
            src="../assets/well-done-bird.png"
            alt="our mascot doing a thumbs up"
        />
        <img
            v-else-if="store.finished"
            src="../assets/try-again-bird.png"
            alt="out mascot telling the user to redo the test"
        />

        <button @click="store.startQuiz()" v-if="store.finished && store.score < 2" class="replay">
            Redo test
        </button>
    </div>
</template>

<style scoped>
    #start-button {
        margin-top: 5em;
    }

    img {
        width: 200px;
        height: auto;
    }

    .selected {
        background-color: rgb(119, 119, 119);
    }

    /*  .chosen {
        cursor: no-drop;
    } */
</style>
