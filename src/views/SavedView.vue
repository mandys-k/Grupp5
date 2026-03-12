<template>

  <div class="saved-header">
    <img src="/assets/thumbs-up-bird.png" alt="TripLingo image" class="small-img"/>
    <h1>Saved words</h1>
  </div>
  <b-container class="mt-4">
    <b-row class="g-3">
      <b-col 
        v-for="word in savedWord" 
        :key="word.word"
        cols="12"
        md="10"
        lg="9"
        class="mx-auto" >
        <b-card border-variant="primary">
          <div class="d-flex flex-column flex-md-row align-items-start word-row">

            <div class="word-col">
              <strong>{{ word.word }}</strong>
            </div>

            <div class="word-col">
              {{ word.Meaning }}
            </div>

            <div class="word-col sentence-col">
              <strong>{{ word.sentence }}</strong>
            </div>

              <div class="icon-col">
                <img
                  class="bookmark-icon"
                  :src="store.isSaved(word) ? '/assets/bookmark-fill.svg' : '/assets/bookmark.svg'"
                  @click.stop="store.toggleSaved(word)"
                />
              </div>


          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>

</template>

<script setup>
import { computed } from 'vue'
import { useWordsStore } from '../stores/wordsPhrasesStore'

const store = useWordsStore()

const savedWord = computed(() => store.saved)
</script>

<style scoped>
 .saved-header{
  display: flex;
  flex-direction: column;
  align-items: center;
 }
 .small-img {
  width: 200px; 
  height: auto;
}

.word-row{
  gap: 20px;
}

.word-col {
  width: 100%;
}

@media (min-width: 768px) {
  .word-col {
    flex: 1;
    width: auto;
  }
}

@media (max-width: 767px) {
  .icon-col {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .word-row {
    position: relative;
    gap: 10px; 
  }
}
</style>