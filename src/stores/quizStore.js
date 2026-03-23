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
                    {
                        option: "A.",
                        text: "Ciao, vorrei ordinare",
                        correct: true
                    },
                    {
                        option: "B.",
                        text: "Ciao, devo partire",
                        correct: false
                    },
                    {
                        option: "C.",
                        text: "Ciao, sto dormendo",
                        correct: false
                    },
                    {
                        option: "D.",
                        text: "Ciao, sto lavorando",
                        correct: false
                    }
                ]
            },
            {
                question: "What does 'Scusi, dov'è il bagno?' mean?",
                answers: [
                    {
                        option: "A.",
                        text: "Excuse me, how much is this?",
                        correct: false
                    },
                    {
                        option: "B.",
                        text: "Excuse me, where is the hotel?",
                        correct: false
                    },
                    {
                        option: "C.",
                        text: "Excuse me, where is the bathroom?",
                        correct: true
                    },
                    {
                        option: "D.",
                        text: "Excuse me, what time is it?",
                        correct: false
                    }
                ]
            },
            {
                question:
                    "How do you say 'I would like a coffee', please in Italian?",
                answers: [
                    {
                        option: "A.",
                        text: "Vorrei un caffè, per favore",
                        correct: true
                    },
                    {
                        option: "B.",
                        text: "Voglio mangiare adesso",
                        correct: false
                    },
                    { option: "C", text: "Devo andare via", correct: false },
                    {
                        option: "D",
                        text: "Ho bisogno di dormire",
                        correct: false
                    }
                ]
            }
            /*    {
            question: "What does 'Il conto, per favore' mean?",
            answers: [
                { option: "A.", text: "The menu, please", correct: false},
                { option: "B.", text: "The table, please", correct: false},
                { option: "C.", text: "The coffee, please", correct: false},
                { option: "D.", text: "The bill, please", correct: true}
            ]
        },
        {
            question: "How do you say 'Where is the hotel?' in Italian?",
            answers: [
                { option: "A.", text: "Dov'è il ristorante?", correct: false},
                { option: "B.", text: "Dov'è la stazione?", correct: false},
                { option: "C.", text: "Dov'è il bagno?", correct: false},
                { option: "D.", text: "Dov'è l'hotel?", correct: true}
            ]
        },
        {
            question: "What does 'Quanto costa?' mean?",
            answers: [
                { option: "A.", text: "Where are you going?", correct: false},
                { option: "B.", text: "How much does it cost?", correct: true},
                { option: "C.", text: "What time is it?", correct: false},
                { option: "D.", text: "Where do you live?", correct: false}
            ]
        },
        {
            question: "How do you say 'A table for two, please' in Italian?",
            answers: [
                { option: "A.", text: "Un tavolo per due, per favore", correct: true},
                { option: "B.", text: "Due tavoli per favore", correct: false},
                { option: "C.", text: "Una sedia per due", correct: false},
                { option: "D.", text: "Due caffè per favore", correct: false}
            ]
        },
        {
            question: "What does 'Dov'è la stazione?' mean?",
            answers: [
                { option: "A.", text: "Where is the station?", correct: true},
                { option: "B.", text: "Where is the restaurant?", correct: false},
                { option: "C.", text: "Where is the hotel?", correct: false},
                { option: "D.", text: "Where is the supermarket?", correct: false}
            ]
        },
        {
            question: "How do you say 'Do you speak English?' in Italian?",
            answers: [
                { option: "A.", text: " Studio inglese", correct: false},
                { option: "B.", text: " Parlo inglese", correct: false},
                { option: "C.", text: " Parli inglese?", correct: true},
                { option: "D.", text: " Amo l'inglese", correct: false}
            ]
        },
        {
            question: "What does 'Vorrei comprare questo' mean?",
            answers: [
                { option: "A.", text: "I would like to eat this", correct: false},
                { option: "B.", text: "I would like to buy this", correct: true},
                { option: "C.", text: "I would like to see this", correct: false},
                { option: "D.", text: "I would like to sell this", correct: false}
            ]
        },
        {
            question: "How do you say 'Where is the supermarket?' in Italian?",
            answers: [
                { option: "A.", text: "Dov'è il museo?", correct: false},
                { option: "B.", text: "Dov'è il mercato?", correct: false},
                { option: "C.", text: "Dov'è il bar?", correct: false},
                { option: "D.", text: "Dov'è il supermercato?", correct: true}
            ]
        },
        {
            question: "What does 'Un'acqua, per favore' mean?",
            answers: [
                { option: "A.", text: "A menu, please", correct: false},
                { option: "B.", text: "A water, please", correct: true},
                { option: "C.", text: "A table, please", correct: false},
                { option: "D.", text: "A coffee, please", correct: false}
            ]
        },
        {
            question: "How do you say 'I have a reservation' in Italian?",
            answers: [
                { option: "A.", text: " Ho un problema", correct: false},
                { option: "B.", text: "Ho una domanda", correct: false},
                { option: "C.", text: "Ho una valigia", correct: false},
                { option: "D.", text: "Ho una prenotazione", correct: true}
            ]
        },
        {
            question: "What does 'Posso pagare con carta?' mean?",
            answers: [
                { option: "A.", text: "Can I pay with cash?", correct: false},
                { option: "B.", text: "Can I leave now?", correct: false},
                { option: "C.", text: "Can I eat here?", correct: false},
                { option: "D.", text: "Can I pay with card?", correct: true}
            ]
        },
        {
            question: "How do you say 'Where can I find a taxi?' in Italian?",
            answers: [
                { option: "A.", text: "Dove posso trovare un taxi?", correct: true},
                { option: "B.", text: "Dove posso mangiare?", correct: false},
                { option: "C.", text: "Dove posso dormire?", correct: false},
                { option: "D.", text: "Dove posso studiare?", correct: false}
            ]
        },
        {
            question: "How do you say 'Hello, do you have gluten-free and vegan options?' in Italian?",
            answers: [
                { option: "A.", text: "Ciao, avete opzioni senza glutine e vegane?", correct: true},
                { option: "B.", text: "Ciao, dove è il bagno?", correct: false},
                { option: "C.", text: "Ciao, vorrei un caffè", correct: false},
                { option: "D.", text: "Ciao, quanto costa?", correct: false}
            ]
        },
        {
            question: "What does 'Vorrei un tavolo vicino alla finestra' mean?",
            answers: [
                { option: "A.", text: " I would like a table outside", correct: false},
                { option: "B.", text: "I would like a table near the window", correct: true},
                { option: "C.", text: "I would like a window seat", correct: false},
                { option: "D.", text: "I would like the menu", correct: false}
            ]
        },
        {
            question: "How do you say 'Can you recommend a local dish?' in Italian?",
            answers: [
                { option: "A.", text: " 'Può mostrarmi il bagno?'", correct: false},
                { option: "B.", text: " 'Può portarmi l'acqua?'", correct: false},
                { option: "C.", text: " 'Può chiamare un taxi?'", correct: false},
                { option: "D.", text: " 'Può consigliarmi un piatto locale?'", correct: true}
            ]
        },
        {
            question: "What does 'Vorrei pagare in contanti, per favore' mean?",
            answers: [
                { option: "A.", text: "I would like to pay in cash, please", correct: true},
                { option: "B.", text: "I would like to pay by card", correct: false},
                { option: "C.", text: "I would like the menu, please", correct: false},
                { option: "D.", text: " I would like a coffee, please", correct: false}
            ]
        },
        {
            question: "How do you say 'What is the WiFi password?' in Italian?",
            answers: [
                { option: "A.",text: "Dove posso comprare una SIM?", correct: false},
                { option: "B.", text: "Dove posso dormire?", correct: false},
                { option: "C.", text: "Qual è la password del WiFi?", correct: true},
                { option: "D.", text: "Può consigliarmi un piatto locale?", correct: false}
            ]
        }, */
        ]
    })
})
