<script>
    import { mapStores } from "pinia"
    import { useThemeStore } from "../stores/themeStore.js"

    export default {
        computed: {
            ...mapStores(useThemeStore)
        },
        created() {
            this.themeStore.saveTheme()
        }
    }
</script>

<template>
    <button
        class="darkmode-button"
        :class="{
            darkmodeButtonOn: themeStore.darkModeOn,
            darkmodeButtonOff: !themeStore.darkModeOn
        }"
        @click="themeStore.onDarkMode"
        type="button"
    >
        <span
            class="material-symbols-outlined circle"
            :class="{ circleRight: themeStore.darkModeOn }"
        >
            circle
        </span>
        <span class="darkmode-text">Dark mode</span>
    </button>
</template>

<style>
    .darkmode-button {
        display: flex;
        border-radius: 2em;
        padding: 0.2em 0;
        width: 9.4em;
        gap: 0.5em;
        background-color: white;
        position: relative;
        align-items: center;
        transition:
            background-color 0.2s,
            color 0.2s;
        font-family: "Varela Round", sans-serif;
    }

    .darkmodeButtonOn {
        background-color: black;
        color: white;
        border: 2px solid white;
    }

    .darkmodeButtonOn:hover {
        background-color: rgb(35, 35, 35);
    }

    .darkmodeButtonOff:hover {
        background-color: rgb(212, 212, 212);
    }

    .circle {
        font-size: 1.8em;
        position: absolute;
        transition: transform 0.4s;
    }

    .circleRight {
        transform: translateX(4em);
    }

    .darkmode-text {
        margin-left: 2em;
    }
</style>
