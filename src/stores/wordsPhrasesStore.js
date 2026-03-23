import { defineStore } from "pinia"
import wordsData from "../data/wordsAndPhrases.json"

export const useWordsStore = defineStore("words", {
    state: () => ({
        selectedCategory: null,
        saved: JSON.parse(localStorage.getItem("saved") || "[]"),
        wordsData
    }),

    actions: {
        //Category, greeting/restaurang/hotel/airport/travel-trable
        selectCategory(category) {
            this.selectedCategory = category
        },

        //Bookmarked words and phrases
        toggleSaved(wordItem) {
            const index = this.saved.findIndex(
                (sav) =>
                    sav.word === wordItem.word &&
                    sav.phrase === wordItem.phrase &&
                    sav.sentence === wordItem.sentence
            )
            if (index >= 0) {
                this.saved.splice(index, 1)
            } else {
                this.saved.push(wordItem)
            }
            localStorage.setItem("saved", JSON.stringify(this.saved))
        },
        isSaved(wordItem) {
            return this.saved.some(
                (sav) =>
                    sav.word === wordItem.word &&
                    sav.phrase === wordItem.phrase &&
                    sav.sentence === wordItem.sentence
            )
        }
    }
})
