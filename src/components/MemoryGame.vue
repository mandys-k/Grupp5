<script>
    import cardsData from "@/data/cards.json"

    export default {
        data() {
            return {
                cards: [],
                score: 0,
                firstCard: null,
                secondCard: null,
                lockBoard: false
            }
        },
        created() {
            this.initializeCards()
            this.shuffleCards()
        },
        methods: {
            initializeCards() {
                this.cards = cardsData.map((card) => ({
                    id: card.id,
                    pairId: card.pairId,
                    text: card.text,
                    flipped: false,
                    matched: false
                }))
            },
            shuffleCards() {
                let currentIndex = this.cards.length,
                    randomIndex,
                    temporaryValue
                while (currentIndex !== 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex)
                    currentIndex -= 1
                    temporaryValue = this.cards[currentIndex]
                    this.cards[currentIndex] = this.cards[randomIndex]
                    this.cards[randomIndex] = temporaryValue
                }
            },
            flipCard(card) {
                if (this.lockBoard) return
                if (card.flipped || card.matched) return

                card.flipped = true

                if (!this.firstCard) {
                    this.firstCard = card
                    return
                }

                this.secondCard = card
                this.lockBoard = true

                this.checkForMatch()
            },
            checkForMatch() {
                let isMatch = this.firstCard.pairId === this.secondCard.pairId

                if (isMatch) {
                    this.firstCard.matched = true
                    this.secondCard.matched = true
                    this.score++
                    this.resetBoard()
                } else {
                    setTimeout(() => {
                        this.firstCard.flipped = false
                        this.secondCard.flipped = false
                        this.resetBoard()
                    }, 1000)
                }
            },
            resetBoard() {
                this.firstCard = null
                this.secondCard = null
                this.lockBoard = false
            },
            restart() {
                this.score = 0
                this.resetBoard()
                this.initializeCards()
                this.shuffleCards()
            }
        }
    }
</script>

<template>
    <div v-if="cards" class="cards-container">
        <div
            @click="flipCard(card)"
            v-for="card in cards"
            :key="card.id"
            class="card"
            :class="{ flipped: card.flipped }"
        >
            <div class="front">
                <p>{{ card.text }}</p>
            </div>

            <div class="back"></div>
        </div>
    </div>
    <div class="score-container">
        <p class="score">Score:</p>
        <p>{{ score }}</p>
    </div>
    <div class="restart-container">
        <button class="restart-btn" @click="restart">Restart</button>
    </div>
</template>

<style scoped>
    .score {
        font-weight: 600;
    }

    .score-container {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        font-family: "Jost", sans-serif;
        font-size: 1.5rem;
    }

    .restart-btn {
        background-color: #fe9f00;
        background-image: linear-gradient(to left, #fff, #fe9f00);
        transition: background-image 0.3s;
        padding: 1rem 2rem;
        font-weight: bold;
        border: 2px solid #fe9f00;
        margin-bottom: 4rem;
    }

    .restart-btn:hover {
        background-image: linear-gradient(to right, #fff, #fe9f00);
    }

    .restart-container {
        text-align: center;
    }

    .card {
        background-color: seashell;
        height: 30vh;
        position: relative;
        transform-style: preserve-3d;
        transition: all 1s ease-out;
        font-size: 1.5rem;
    }

    .flipped {
        transform: rotateY(180deg);
    }

    .cards-container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1rem;
        margin: 5rem 6rem;
    }

    .front,
    .back {
        position: absolute;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .front {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "PT serif", serif;
        transform: rotateY(180deg);
    }

    .back {
        background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(240,6.7%,17.6%,1)'/><path d='M10 50H0m60-40H50m0 40v10M10 0v10m21 30v20m0-60v20m9 10h20M0 30h20m0 10h20V20H20v10zM10 10h40v40H10zM0 0h60v60H0z'  stroke-width='1' stroke='%23fe9f00ff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
        backface-visibility: hidden;
    }

    @media (max-width: 1000px) {
        .cards-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            margin: 5rem 2rem;
        }
    }

    @media (max-width: 480px) {
        .cards-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
