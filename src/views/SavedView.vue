<template>

  <div class="saved-header">
    <h1>Saved words</h1>
    <img src="../assets/thumbs-up-bird.png" alt="TripLingo image" class="small-img"/>
  </div>
  <b-container class="mt-4 saved-container">
    <b-row class="g-3">
      <b-col 
        v-for="word in savedWord" 
        :key="word.word"
        cols="12"
        md="10"
        lg="8"
        class="mx-auto" >
        <b-card class="saved-card">
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
                  :src="store.isSaved(word) ? bookmarkFill : bookmark"
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
import bookmark from '@/assets/bookmark.svg'
import bookmarkFill from '@/assets/bookmark-fill.svg'

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
  width: 300px; 
  height: auto;
}
.saved-card{
  border-color: rgb(0,35,118);
  background-color: #f0f4ff;
  border:2px solid;
  color:#0b0b62;
}
.saved-container{
  margin-bottom: 80px;
}
.word-row{
  gap: 10px;
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