<template>
    <div class="study-category">
        <h1>
            <b>Level {{ level }}</b>
        </h1>
        <img
            src="../assets/leisure-bird.png"
            alt="TripLingo image"
            class="small-img"
        />

        <div class="study-card">
            <router-link :to="`/wordsandphrases?level=${level}`">
                <b-card>
                    <b-card-text>Words and Phrases 🔠</b-card-text>
                </b-card>
            </router-link>

            <router-link :to="`/readingComprehension?level=${level}`">
                <b-card>
                    <b-card-text>Reading comprehension 📖</b-card-text>
                </b-card>
            </router-link>

            <router-link :to="`/listningComprehension?level=${level}`">
                <b-card>
                    <b-card-text>Listening comprehension👂</b-card-text>
                </b-card>
            </router-link>
            
            <RouterLink to="/memory">
                <b-card>
                    <b-card-text>Memory game 🧩</b-card-text>
                </b-card>
            </RouterLink>

            <RouterLink to="/quiz">
                <b-card>
                    <b-card-text>Vocabulary quiz 🗝️</b-card-text>
                </b-card>
            </RouterLink>
        </div>

        <router-link to="/levels" class="back-link"
            >← Back to levels</router-link
        >
    </div>
</template>

<script setup>
    import { RouterLink, useRoute } from "vue-router"

    const route = useRoute()
    const level = route.params.level
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
    }
    .small-img {
        width: 200px;
        height: auto;
    }
    .study-category {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    h2 {
        margin-bottom: 20px;
    }
    .small-img {
        width: 250px;
        height: auto;
    }
    .study-category {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .study-card .card {
        width: 420px;
        height: 70px;
        text-align: center;
        font-size: 1.6rem;
        transition: all 0.25s ease;
        border-color: #0b0b62;
        background-color: #f0f4ff;
        border: 2px solid;
        color: #0b0b62;
    }

    .study-card .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .study-card a {
        text-decoration: none;
        color: inherit;
    }

    .study-card .card {
        width: 420px;
        height: 70px;
        text-align: center;
        font-size: 1.6rem;
        transition: all 0.25s ease;
        border-color: #2f80ed;
        background-color: #eaf4ff;
        border: 2px solid;
        color: #0b0b62;
    }

    .study-card .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    .study-card a {
        text-decoration: none;
        color: inherit;
    }

    .back-link {
        margin-top: 24px;
        color: #0b0b62;
        font-weight: 600;
        text-decoration: none;
        font-size: 0.95rem;
    }

    .back-link:hover {
        text-decoration: underline;
    }

    .back-link:hover {
        text-decoration: underline;
    }
</style>
