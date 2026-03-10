<script>
    import DarkMode from "./components/DarkMode.vue"
    import TheHeader from "./components/TheHeader.vue"
    import { mapStores } from "pinia"
    import { useThemeStore } from "./stores/themeStore.js"
    import { useUserStore } from "./stores/dataStorage.js"

    export default {
        components: {
            DarkMode,
            TheHeader
        },
        computed: {
            ...mapStores(useThemeStore, useUserStore),
            showHeader() {
                const hiddenRoutes = ['/', '/login', '/register']
                return this.userStore.isLoggedIn && !hiddenRoutes.includes(this.$route.path)
            }
        }
    }
</script>

<template>
    <div :class="themeStore.darkMode ? 'dark-mode' : 'light-mode'">
        <TheHeader v-if="showHeader" />
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
        color: #000;
        background-color: #fff;
    }

    .dark-mode {
        color: #fff;
        background-color: #000;
    }
</style>
