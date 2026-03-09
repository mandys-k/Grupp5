<template>
  <div class="notes-container">
    <h1>TripLingo – Mina reseanteckningar</h1>

    <div class="input-section">
      <textarea
        v-model="newNote"
        placeholder="Skriv ord eller meningar du vill komma ihåg..."
      ></textarea>

         <button @click="addNote">Spara anteckning</button>
    </div>

    <div class="notes-list" v-if="notes.length > 0">
      <h2>Mina sparade anteckningar</h2>

      <div v-for="(note, index) in notes" :key="index" class="note-card">
        <p>{{ note }}</p>
        <button class="delete-btn" @click="deleteNote(index)">
          Ta bort
        </button>
      </div>
    </div>

<p v-else>Inga anteckningar sparade ännu ✈️</p>
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
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

/* Rubriker */

h1 {
  text-align: center;
  color: #257FC9;
  margin-bottom: 2rem;
}

h2 {
  color: #257FC9;
}

/* Textarea */

textarea {
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #07D5F1;
  margin-bottom: 1rem;
  resize: none;
}

textarea:focus {
  outline: none;
  border-color: #257FC9;
}

/* Buttons */

button {
  padding: 10px 18px;
  background-color: #257FC9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

button:hover {
  background-color: #07D5F1;
}

/* Anteckningar */

.notes-list {
  margin-top: 2rem;
}

.note-card {
  background: #B6ECFB;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 6px solid #FE9F00;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note-card p {
  margin: 0;
}


.delete-btn {
  background-color: #FE9F00;
}

.delete-btn:hover {
  background-color: #FFEF46;
  color: black;
}

/* tom text */

.empty {
  text-align: center;
  margin-top: 2rem;
  color: #555;
}
</style>

