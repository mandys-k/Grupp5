import { defineStore } from "pinia"

export const useThemeStore = defineStore("theme", {
    actions: {
        onDarkMode() {
            this.darkMode = !this.darkMode

            this.darkModeOn = !this.darkModeOn

            localStorage.setItem("theme", JSON.stringify(this.darkMode))
            localStorage.setItem("button", JSON.stringify(this.darkModeOn))
        },
        saveTheme() {
            const savedMode = JSON.parse(localStorage.getItem("theme"))
            const savedButton = JSON.parse(localStorage.getItem("button"))

            if (savedMode !== null && savedButton !== null) {
                this.darkMode = savedMode
                this.darkModeOn = savedButton
            }
        }
    },
    state: () => ({ darkMode: false, darkModeOn: false })
})
