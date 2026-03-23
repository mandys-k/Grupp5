<script>
    import CountdownTimer from "../components/CountdownTimer.vue"
    import wordsAndPhrases from "../components/wordsAndPhrases.vue"

    export default {
        components: {
            CountdownTimer,
            wordsAndPhrases
        }
    }
</script>

<template>
    <CountdownTimer />
    <wordsAndPhrases />
    <div id="levels-container">
        <router-link to="/levels" class="back-link"
            >← Back to levels</router-link
        >
    </div>
</template>

<style scoped>
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