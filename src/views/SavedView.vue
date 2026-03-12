<template>
  <h1>Saved</h1>
   
    <b-row class="g-3">
      <b-col 
        v-for="word in wordsByCategory" 
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
              <span
                class="material-symbols-outlined bookmark-icon"
                @click.stop="store.toggleSaved(word)"
              >
                {{ store.isSaved(word) ? 'bookmark_added' : 'bookmark_add' }}
              </span> 
            </div>

          </div>
        </b-card>
      </b-col>
    </b-row>


</template>

<script setup>
import { computed } from 'vue';
import { useWordsStore } from '../stores/wordsPhrasesStore';


const store = useWordsStore();


const toggleSaved = computed(() => store.toggleSaved);
const wordsByCategory = computed(() => {
  return toggleSaved.value ? store.wordsData[toggleSaved.value] : [];
});
</script>

