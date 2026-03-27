<script setup>
    import { ref } from "vue"
    import { useRoute } from "vue-router"
    import CountdownTimer from "../components/CountdownTimer.vue"
    import ListningComprehension from "../components/listningComprehension.vue"

    const showTimer = ref(false)
    const route = useRoute()
    const level = route.query.level || 1
</script>

<template>
    <div class="timer-btn-container">
        <button class="btn timer-btn" @click="showTimer = !showTimer">
            Timer⏰
        </button>
    </div>

    <div v-if="showTimer">
        <CountdownTimer />
    </div>

    <listningComprehension />
    <div class="back-link-container">
        <router-link :to="`/learning/${level}`" class="back-link"
            >← Back to learning</router-link
        >
    </div>
</template>

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
    .timer-btn p {
        margin: 0;
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
