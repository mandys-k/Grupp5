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

