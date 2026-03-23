import { defineStore } from "pinia"
import confetti from "canvas-confetti"

export const useQuizStore = defineStore("quiz", {
    actions: {
        startQuiz() {
            this.currentQuestionIndex = 0
            this.score = 0
            this.finished = false
            this.answersGiven = []

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
        showScore() {
            this.finished = true

            this.answersGiven[this.currentQuestionIndex] = this.selectedAnswer

            this.score = 0

            this.answersGiven.forEach((answer) => {
                if (answer.correct) {
                    this.score++
                }
            })

            if (this.score >= 2) {
                this.finishedQuiz()
            }

            this.showAnswers = false
        },
        previousQuestion() {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex--
                this.showQuestion()
            }
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

        questions: [
            {
                question:
                    "How do you say 'Hello, I would like to order' in Italian?",
                answers: [
                    { option: "A.", text: "Ciao, vorrei ordinare", correct: true },
                    { option: "B.", text: "Ciao, devo partire", correct: false },
                    { option: "C.", text: "Ciao, sto dormendo", correct: false },
                    { option: "D.", text: "Ciao, sto lavorando", correct: false }
                ]
            },
            {
                question: "What does 'Scusi, dov'è il bagno?' mean?",
                answers: [
                    { option: "A.", text: "Excuse me, how much is this?", correct: false },
                    { option: "B.", text: "Excuse me, where is the hotel?", correct: false },
                    { option: "C.", text: "Excuse me, where is the bathroom?", correct: true },
                    { option: "D.", text: "Excuse me, what time is it?", correct: false }
                ]
            },
            {
                question:
                    "How do you say 'I would like a coffee', please in Italian?",
                answers: [
                    { option: "A.", text: "Vorrei un caffè, per favore", correct: true },
                    { option: "B.", text: "Voglio mangiare adesso", correct: false },
                    { option: "C", text: "Devo andare via", correct: false },
                    { option: "D", text: "Ho bisogno di dormire", correct: false }
                ]
            }
        ]
    })
})
