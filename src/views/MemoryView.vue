<script>
    import MemoryGame from "../components/MemoryGame.vue"

    export default {
        components: {
            MemoryGame
        }
    }
</script>

<template>
    <h1>Memory cards</h1>
    <MemoryGame />
</template>

<style scoped>
    h1 {
        text-align: center;
        font-family: "PT serif", serif;
    }
</style>
