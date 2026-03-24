<script setup>
    import { useQuizStore } from "../stores/quizStore"

    const store = useQuizStore()
</script>

<template>
    <div v-if="!store.showAnswers" class="start-container">
        <button class="start-button" @click="store.startQuiz()">
            Start quiz
        </button>
    </div>
    <div>
        <div class="quiz-container" v-if="store.showAnswers">
            <div class="quiz-wrapper">
                <h2 v-if="store.currentQuestion && store.questionNumber > 0">
                    {{ store.questionNumber }}.
                    {{ store.currentQuestion.question }}
                </h2>
                <div class="answers-wrapper" v-if="store.currentQuestion">
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
                            <span>{{ answer.text }}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="prev-next-container">
                <button
                    @click="store.previousQuestion()"
                    v-if="store.currentQuestionIndex > 0"
                    class="prev-next-btn"
                >
                    Previous
                </button>
                <button
                    @click="store.nextQuestion()"
                    v-if="
                        store.currentQuestionIndex < store.questions.length - 1
                    "
                    :disabled="!store.selectedAnswer"
                    class="prev-next-btn"
                >
                    Next
                </button>
                <button
                    @click="store.showScore()"
                    v-if="
                        store.currentQuestionIndex ===
                        store.questions.length - 1
                    "
                    :disabled="!store.selectedAnswer"
                    class="result-btn"
                >
                    Check result
                </button>
            </div>
        </div>

        <div class="result-container" v-if="store.finished">
            <p class="congratulations-paragraph" v-if="store.score >= 16">Congratulations,</p>
            <p>
                You scored {{ store.score }} out of
                {{ store.questions.length }} !
            </p>
            <img
                class="done-img"
                v-if="store.score >= 16"
                src="../assets/well-done-bird.png"
                alt="our mascot doing a thumbs up"
            />
            <img
                v-else
                src="../assets/try-again-bird.png"
                alt="out mascot telling the user to redo the test"
            />
            <p v-if="store.score >= 16"> You have now unlocked
                <RouterLink class="level-link" to="/levels">level 2</RouterLink>🗝️
            </p>
            <button
                @click="store.startQuiz()"
                v-if="store.score < 16"
                class="replay"
            >
                Redo test
            </button>
        </div>
    </div>
</template>

<style scoped>
    img {
        width: 250px;
        height: auto;
        margin: 2em 0;
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
        margin: 2em;
        padding: 3em 2.5em;
        border-radius: 1.5em;
        box-shadow: 0 0 1.5em 0.5em;
        transition: transform 0.3s ease-in-out;
        width: 80%;
    }

    .answer-container button:hover {
        transform: scale(1.1);
        background-color: #a7a7a7;
    }

    .answer-container {
        margin: 1em;
        background-color: #b6ecfb;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.5em;
    }

    .answers-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 4em;
    }

    h2 {
        text-align: center;
        margin-top: 2em;
    }

    .start-button {
        margin: 5em auto;
        background-image: linear-gradient(90deg, #b6ecfb, seashell, #b6ecfb);
        background-position: right;
        transition: background-position 1s;
        background-size: 200% 100%;
        padding: 1.5em 2em;
        border: none;
        box-shadow: 0 0.8em 0 rgb(153, 225, 245);
        border-radius: 2em;
        display: block;
    }

    .start-button:hover {
        background-position: left;
    }

    .start-button:active {
        transform: translateY(5px);
        box-shadow: 0 0.4em 0 rgb(153, 225, 245);
    }

    .quiz-container {
        border: 2px solid gray;
        margin: 5em 15em;
        font-family: "Varela Round", sans-serif;
    }

    .prev-next-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5em;
        gap: 1em;
    }

    .prev-next-btn {
        padding: 0.5em;
        background-image: linear-gradient(to right, #fff 20%, #fe9f00);
        transition: background-image;
    }

    .prev-next-btn:hover {
        background-image: linear-gradient(to left, #fff 20%, #fe9f00);
    }

    .result-btn {
        padding: 0.5em;
        background-image: linear-gradient(to right, #fe9f00 50%, #fff 50%);
        background-position: right;
        background-size: 200% 100%;
        transition: background-position 0.3s ease-in;
    }

    .result-btn:hover {
        background-position: left;
    }

    .result-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5em 30em;
        border: 10px outset #808080;
        font-family: "Varela Round", sans-serif;
        padding: 4em 0;
    }

    .result-container p {
        font-size: 1.4em;
    }

    .replay {
        padding: 1em 2em;
        background-image: linear-gradient(to right, #fff 20%, #fe9f00);
        transition: background-image;
        border: 2px solid #808080;
    }

    .replay:hover {
        background-image: linear-gradient(to left, #fff 20%, #fe9f00);
    }

    .start-container {
        text-align: center;
    }

    .level-link {
        color: #000;
    }

    .level-link:hover {
        color: #5d5d5d;
    }



</style>
