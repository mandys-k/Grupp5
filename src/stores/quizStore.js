import { defineStore } from "pinia"

export const useQuizStore = defineStore('quiz', {
    actions: {
        startQuiz() {
            this.currentQuestionIndex = 0
            this.score = 0
            this.showQuestion()
        },
        showQuestion() {
            /* this.resetState() */
            this.currentQuestion = this.questions[this.currentQuestionIndex]
            this.questionNumber = this.currentQuestionIndex + 1

            this.showAnswers = true
        },
        /* resetState() {

        }, */
        selectAnswer() {
            if(this.currentQuestion.answers.correct) {
                this.chosenAnswer = true
            }

            if(this.chosenAnswer) {
                this.score++
            }
        },
        nextQuestion() {
            this.showQuestion()
        }
    },
    state: () => ({ currentQuestionIndex: 0, score: 0, currentQuestion: null, questionNumber: 0, showAnswers: false, chosenAnswer: null, questions: [
        {
            question: "How do you say 'Hello, I would like to order' in Italian?",
            answers: [
                { text: "A. Ciao, vorrei ordinare", correct: true},
                { text: "B. Ciao, devo partire", correct: false},
                { text: "C. Ciao, sto dormendo", correct: false},
                { text: "D. Ciao, sto lavorando", correct: false}
            ]
        },
        {
            question: "What does 'Scusi, dov'è il bagno?' mean?",
            answers: [
                { text: "A. Excuse me, how much is this?", correct: false},
                { text: "B. Excuse me, where is the hotel?", correct: false},
                { text: "C. Excuse me, where is the bathroom?", correct: true},
                { text: "D. Excuse me, what time is it?", correct: false}
            ]
        },
        {
            question: "How do you say 'I would like a coffee', please in Italian?",
            answers: [
                { text: "A. Vorrei un caffè, per favore", correct: true},
                { text: "B. Voglio mangiare adesso", correct: false},
                { text: "C. Devo andare via", correct: false},
                { text: "D. Ho bisogno di dormire", correct: false}
            ]
        },
        {
            question: "What does 'Il conto, per favore' mean?",
            answers: [
                { text: "A. The menu, please", correct: false},
                { text: "B. The table, please", correct: false},
                { text: "C. The coffee, please", correct: false},
                { text: "D. The bill, please", correct: true}
            ]
        },
        {
            question: "How do you say 'Where is the hotel?' in Italian?",
            answers: [
                { text: "A. Dov'è il ristorante?", correct: false},
                { text: "B. Dov'è la stazione?", correct: false},
                { text: "C. Dov'è il bagno?", correct: false},
                { text: "D. Dov'è l'hotel?", correct: true}
            ]
        },
        {
            question: "What does 'Quanto costa?' mean?",
            answers: [
                { text: "A. Where are you going?", correct: false},
                { text: "B. How much does it cost?", correct: true},
                { text: "C. What time is it?", correct: false},
                { text: "D. Where do you live?", correct: false}
            ]
        },
        {
            question: "How do you say 'A table for two, please' in Italian?",
            answers: [
                { text: "A. Un tavolo per due, per favore", correct: true},
                { text: "B. Due tavoli per favore", correct: false},
                { text: "C. Una sedia per due", correct: false},
                { text: "D. Due caffè per favore", correct: false}
            ]
        },
        {
            question: "What does 'Dov'è la stazione?' mean?",
            answers: [
                { text: "A. Where is the station?", correct: true},
                { text: "B. Where is the restaurant?", correct: false},
                { text: "C. Where is the hotel?", correct: false},
                { text: "D. Where is the supermarket?", correct: false}
            ]
        },
        {
            question: "How do you say 'Do you speak English?' in Italian?",
            answers: [
                { text: "A. Studio inglese", correct: false},
                { text: "B. Parlo inglese", correct: false},
                { text: "C. Parli inglese?", correct: true},
                { text: "D. Amo l'inglese", correct: false}
            ]
        },
        {
            question: "What does 'Vorrei comprare questo' mean?",
            answers: [
                { text: "A. I would like to eat this", correct: false},
                { text: "B. I would like to buy this", correct: true},
                { text: "C. I would like to see this", correct: false},
                { text: "D. I would like to sell this", correct: false}
            ]
        },
        {
            question: "How do you say 'Where is the supermarket?' in Italian?",
            answers: [
                { text: "A. Dov'è il museo?", correct: false},
                { text: "B. Dov'è il mercato?", correct: false},
                { text: "C. Dov'è il bar?", correct: false},
                { text: "D. Dov'è il supermercato?", correct: true}
            ]
        },
        {
            question: "What does 'Un'acqua, per favore' mean?",
            answers: [
                { text: "A. A menu, please", correct: false},
                { text: "B. A water, please", correct: true},
                { text: "C. A table, please", correct: false},
                { text: "D. A coffee, please", correct: false}
            ]
        },
        {
            question: "How do you say 'I have a reservation' in Italian?",
            answers: [
                { text: "A. Ho un problema", correct: false},
                { text: "B. Ho una domanda", correct: false},
                { text: "C. Ho una valigia", correct: false},
                { text: "D. Ho una prenotazione", correct: true}
            ]
        },
        {
            question: "What does 'Posso pagare con carta?' mean?",
            answers: [
                { text: "A. Can I pay with cash?", correct: false},
                { text: "D. Can I leave now?", correct: false},
                { text: "C. Can I eat here?", correct: false},
                { text: "B. Can I pay with card?", correct: true}
            ]
        },
        {
            question: "How do you say 'Where can I find a taxi?' in Italian?",
            answers: [
                { text: "A. Dove posso trovare un taxi?", correct: true},
                { text: "B. Dove posso mangiare?", correct: false},
                { text: "C. Dove posso dormire?", correct: false},
                { text: "D. Dove posso studiare?", correct: false}
            ]
        },
        {
            question: "How do you say 'Hello, do you have gluten-free and vegan options?' in Italian?",
            answers: [
                { text: "A. 'Ciao, avete opzioni senza glutine e vegane?'", correct: true},
                { text: "B. 'Ciao, dove è il bagno?'", correct: false},
                { text: "C. 'Ciao, vorrei un caffè'", correct: false},
                { text: "D. 'Ciao, quanto costa?'", correct: false}
            ]
        },
        {
            question: "What does 'Vorrei un tavolo vicino alla finestra' mean?",
            answers: [
                { text: "B. I would like a table outside", correct: false},
                { text: "A. I would like a table near the window", correct: true},
                { text: "C. I would like a window seat", correct: false},
                { text: "D. I would like the menu", correct: false}
            ]
        },
        {
            question: "How do you say 'Can you recommend a local dish?' in Italian?",
            answers: [
                { text: "A. 'Può mostrarmi il bagno?'", correct: false},
                { text: "B. 'Può portarmi l'acqua?'", correct: false},
                { text: "C. 'Può chiamare un taxi?'", correct: false},
                { text: "D. 'Può consigliarmi un piatto locale?'", correct: true}
            ]
        },
        {
            question: "What does 'Vorrei pagare in contanti, per favore' mean?",
            answers: [
                { text: "A. I would like to pay in cash, please", correct: true},
                { text: "B. I would like to pay by card", correct: false},
                { text: "C. I would like the menu, please", correct: false},
                { text: "D. I would like a coffee, please", correct: false}
            ]
        },
        {
            question: "How do you say 'What is the WiFi password?' in Italian?",
            answers: [
                { text: "A. 'Dove posso comprare una SIM?'", correct: false},
                { text: "B. 'Dove posso dormire?'", correct: false},
                { text: "C. 'Qual è la password del WiFi?'", correct: true},
                { text: "D. 'Può consigliarmi un piatto locale?'", correct: false}
            ]
        },
    ]
})
})
