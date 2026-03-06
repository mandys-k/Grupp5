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
    <button @click="themeStore.onDarkMode" type="button">
        <span class="material-symbols-outlined"> circle </span>
        Dark mode
    </button>
</template>
