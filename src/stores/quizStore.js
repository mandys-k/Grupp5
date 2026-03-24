import { defineStore } from "pinia"
import confetti from "canvas-confetti"
import questionsData from "@/data/quizQuestions.json"

export const useQuizStore = defineStore("quiz", {
    actions: {
        startQuiz() {
            this.currentQuestionIndex = 0
            this.score = 0
            this.finished = false
            this.answersGiven = []

            this.questions = questionsData

            this.showQuestion()
        },
        showQuestion() {
            this.currentQuestion = this.questions[this.currentQuestionIndex]
            this.questionNumber = this.currentQuestionIndex + 1

            this.showAnswers = true

            this.selectedAnswer =
                this.answersGiven[this.currentQuestionIndex] || null
        },
        selectAnswer(answer) {
            if (this.selectedAnswer === answer) {
                this.selectedAnswer = null
                return
            }

            this.selectedAnswer = answer
        },
        nextQuestion() {
            this.answersGiven[this.currentQuestionIndex] = this.selectedAnswer

            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.currentQuestionIndex++
                this.showQuestion()
            }
        },
        previousQuestion() {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex--
                this.showQuestion()
            }
        },
        showScore() {
            this.finished = true

            this.answersGiven[this.currentQuestionIndex] = this.selectedAnswer

            this.score = 0

            this.answersGiven.forEach((answer) => {
                if (answer.correct) {
                    this.score++
                }
            })

            if (this.score >= 16) {
                this.finishedQuiz()
            }

            this.showAnswers = false
        },
        finishedQuiz() {
            confetti({
                particleCount: 500,
                spread: 360,
                origin: { y: 0 },
                scalar: 1.5
            })
        }
    },
    state: () => ({
        currentQuestionIndex: 0,
        score: 0,
        currentQuestion: null,
        questionNumber: 0,
        showAnswers: false,
        finished: false,
        selectedAnswer: null,
        answersGiven: [],
        questions: []
    })
})
