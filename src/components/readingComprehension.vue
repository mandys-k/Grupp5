<template>
    <div>
        <div class="timer-btn-container">
            <button class="btn timer-btn" @click="showTimer = !showTimer">
                Timer⏰
            </button>
        </div>
        <div v-if="showTimer" class="card">
            <CountdownTimer />
        </div>
    <div class="reading-container">
        <h1>Reading Comprehension Italiano</h1>
        <div class="text-box">
            <h2>Testo</h2>
            <p>
                Maria viaggia spesso per lavoro. Questa settimana è a Roma per
                una conferenza internazionale. La mattina incontra i suoi
                colleghi in un bar vicino all'hotel e bevono un caffè insieme.
                Dopo la conferenza, Maria visita il Colosseo e mangia una pizza
                in un piccolo ristorante. La sera scrive alcune note per
                ricordare nuove parole italiane.
            </p>
        </div>

        <div class="question">
            <h2>Domande</h2>

            <div class="question">
                <p>1. Perché Maria è a Roma?</p>

                <label>
                    <input type="radio" value="vacanza" v-model="answers.q1" />
                    Per vacanza
                </label>

                <label>
                    <input type="radio" value="lavoro" v-model="answers.q1" />
                    Per lavoro
                </label>

                <label>
                    <input type="radio" value="studio" v-model="answers.q1" />
                    Per studiare
                </label>
            </div>

            <div class="question">
                <p>2. Dove incontra i suoi colleghi?</p>

                <label>
                    <input type="radio" value="bar" v-model="answers.q2" />
                    In un bar
                </label>

                <label>
                    <input type="radio" value="hotel" v-model="answers.q2" />
                    In hotel
                </label>

                <label>
                    <input
                        type="radio"
                        value="ristorante"
                        v-model="answers.q2"
                    />
                    In un ristorante
                </label>
            </div>

            <div class="question">
                <p>3. Cosa mangia Maria?</p>

                <label>
                    <input type="radio" value="pizza" v-model="answers.q3" />
                    Pizza
                </label>

                <label>
                    <input type="radio" value="pasta" v-model="answers.q3" />
                    Pasta
                </label>

                <label>
                    <input type="radio" value="insalata" v-model="answers.q3" />
                    Insalata
                </label>
            </div>

            <button @click="checkAnswers">Check answers</button>

            <p v-if="result !== null" class="result">
                You got {{ result }} / 3 correct
            </p>
        </div>
    </div>
    <div class="back-link-container">
        <router-link :to="`/learning/${level}`" class="back-link">← Back to learning</router-link>
    </div>
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import { useRoute } from "vue-router"
    import CountdownTimer from "./CountdownTimer.vue"

    const showTimer = ref(false)
    const route = useRoute()
    const level = route.query.level || 1

    const answers = ref({
        q1: null,
        q2: null,
        q3: null
    })

    const result = ref(null)

    const checkAnswers = () => {
        let score = 0

        if (answers.value.q1 === "lavoro") score++
        if (answers.value.q2 === "bar") score++
        if (answers.value.q3 === "pizza") score++

        result.value = score
    }
</script>

<style scoped>
    .timer-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .timer-btn {
        width: 100%;
        max-width: 200px;
        background-color: #0b0b62;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    .reading-container {
        max-width: 800px;
        margin: auto;
        padding: 2rem;
        background: white;
        border-radius: 12px;
    }

    h1 {
        text-align: center;
        color: #1565c0;
    }

    .text-box {
        background: #b6ecfb;
        padding: 1.5rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }

    .question {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin: 5px 0;
    }

    .reading-container button {
        padding: 10px 18px;
        background: #1565c0;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .reading-container button:hover {
        background: #07d5f1;
    }

    .result {
        margin-top: 1rem;
        font-weight: bold;
        color: #fe9f00;
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
