<template>
    <div class="notes-container">
        <h1>TripLingo – My notes</h1>

        <div class="input-section">
            <textarea
                v-model="newNote"
                placeholder="Skriv ord eller meningar du vill komma ihåg..."
            ></textarea>

            <button @click="addNote">Saved notes</button>
        </div>

        <div class="notes-list" v-if="notes.length > 0">
            <h2>My saved notes</h2>

            <div v-for="(note, index) in notes" :key="index" class="note-card">
                <p>{{ note }}</p>
                <button class="delete-btn" @click="deleteNote(index)">
                    Ta bort
                </button>
            </div>
        </div>

        <p v-else>No notes saved yet ✈️</p>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue"

    const newNote = ref("")
    const notes = ref([])

    // Hämta från localStorage när sidan laddas
    onMounted(() => {
        const savedNotes = localStorage.getItem("triplingo-notes")
        if (savedNotes) {
            notes.value = JSON.parse(savedNotes)
        }
    })

    const addNote = () => {
        if (newNote.value.trim() === "") return

        notes.value.push(newNote.value)
        saveToLocalStorage()
        newNote.value = ""
    }

    const deleteNote = (index) => {
        notes.value.splice(index, 1)
        saveToLocalStorage()
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("triplingo-notes", JSON.stringify(notes.value))
    }
</script>

<style scoped>
    .notes-container {
        max-width: 700px;
        margin: auto;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    /* Rubriker */

    h1 {
        text-align: center;
        color: #257fc9;
        margin-bottom: 2rem;
    }

    h2 {
        color: #257fc9;
    }

    /* Textarea */

    textarea {
        width: 100%;
        min-height: 120px;
        padding: 1rem;
        font-size: 16px;
        border-radius: 8px;
        border: 2px solid #07d5f1;
        margin-bottom: 1rem;
        resize: none;
    }

    textarea:focus {
        outline: none;
        border-color: #257fc9;
    }

    /* Buttons */

    button {
        padding: 10px 18px;
        background-color: #257fc9;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: 0.2s;
    }

    button:hover {
        background-color: #07d5f1;
    }

    /* Anteckningar */

    .notes-list {
        margin-top: 2rem;
    }

    .note-card {
        background: #b6ecfb;
        padding: 1rem;
        margin-bottom: 1rem;
        border-left: 6px solid #fe9f00;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .note-card p {
        margin: 0;
    }

    .delete-btn {
        background-color: #fe9f00;
    }

    .delete-btn:hover {
        background-color: #ffef46;
        color: black;
    }

    /* tom text */

    .empty {
        text-align: center;
        margin-top: 2rem;
        color: #555;
    }
</style>
