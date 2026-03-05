<template>
  <div class="notes-container">
    <h1>TripLingo – Mina reseanteckningar</h1>

    <div class="input-section">
      <textarea
        v-model="newNote"
        placeholder="Skriv ord eller meningar du vill komma ihåg..."
      ></textarea>
