import { defineStore } from "pinia"

export const useThemeStore = defineStore("theme", {
    actions: {
        onDarkMode() {
            this.darkMode = !this.darkMode

            localStorage.setItem("theme", JSON.stringify(this.darkMode))
        },
        saveTheme() {
            const savedMode = JSON.parse(localStorage.getItem("theme"))

            if (savedMode !== null) {
                this.darkMode = savedMode
            }
        }
    },
    state: () => ({ darkMode: false })
})
