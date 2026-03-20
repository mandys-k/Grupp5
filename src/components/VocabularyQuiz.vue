<script setup>
    import { useQuizStore } from "../stores/quizStore"

    const store = useQuizStore()
</script>

<template>
    <div v-if="!store.showAnswers" class="start-container">
        <button id="start-button" @click="store.startQuiz()">Start quiz</button>
    </div>
    <div class="quiz-container" v-if="store.showAnswers">
        <div class="quiz-wrapper">
            <h2 v-if="store.currentQuestion && store.questionNumber > 0">
                {{ store.questionNumber }}.
                {{ store.currentQuestion.question }}
            </h2>
            <div class="answer-wrapper">
                <div
                    v-for="answer in store.currentQuestion.answers"
                    :key="answer.text"
                    class="answer-container"
                >
                    <button
                        @click="store.selectAnswer(answer)"
                        :class="{
                            selected: store.selectedAnswer === answer,
                            chosen:
                                store.selectedAnswer &&
                                store.selectedAnswer !== answer
                        }"
                    >
                        <span class="option">{{ answer.option }}</span>
                        <span class="text">{{ answer.text }}</span>
                    </button>
                </div>
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

        <button
            @click="store.startQuiz()"
            v-if="store.finished && store.score < 2"
            class="replay"
        >
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
        background-color: rgb(128, 128, 128);
    }

    .chosen {
        cursor: no-drop;
    }

    .option {
        font-weight: bolder;
        font-size: 1.5em;
        margin-right: 0.2em;
    }

    .answer-container button {
        font-family: "Varela Round", sans-serif;
        margin: 2em;
        padding: 2.5em;
        border-radius: 1.5em;
        box-shadow: 0 0 1.5em 0.5em;
        transition: transform 0.3s;
    }

    .answer-container button:hover {
        transform: scale(1.1);
        background-color: #a7a7a7;
    }

    .answer-container {
        margin: 1em;
        background-color: #b6ecfb;
        text-align: center;
    }

    .answer-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 15em;
        padding: 4em;
    }

    h2 {
        text-align: center;
        margin: 2em 0;
    }

    #start-button {
        background-image: linear-gradient(90deg, #b6ecfb, #fff, #b6ecfb);
        background-position: right;
        transition: background-position 1s;
        background-size: 200% 100%;
        padding: 1.5em 2em;
        font-family: "Varela Round", sans-serif;
    }

    #start-button:hover {
        background-position: left;
    }

    .start-container {
        text-align: center;
    }
</style>
