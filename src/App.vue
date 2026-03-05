<script>
    import DarkMode from "./components/DarkMode.vue"
    import TheHeader from "./components/TheHeader.vue"

    export default {
        components: {
            DarkMode,
            TheHeader
        }
    }
</script>

<template>
    <div :class= "darkMode ? 'dark-mode' : 'light-mode'">
        <TheHeader />
        <DarkMode />
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Varela+Round&display=swap");

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    .light-mode {
        color: black;
        background-color: white;
    }

    .dark-mode {
        color: white;
        background-color: black;
    }
</style>
