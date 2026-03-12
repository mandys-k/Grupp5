<template>
  <b-container class="mt-4">
    <h2>Level 1</h2>
    <!--Situation category for words and phrases-->
    <b-row class="category-card flex-nowrap overflow-auto g-3 justify-content-center">
      <b-col 
        v-for="cat in categories" 
        :key="cat"
        cols="auto"
      >
        <b-card 
          class="text-center"
          @click="store.selectCategory(cat)"
        >
          {{ cat }}
        </b-card>
      </b-col>
    </b-row>

    <hr>
    
    <!--30 Words and phrases of selected situation category-->
    <div v-if="selectedCategory" class="mt-4">
      <h2>{{ selectedCategory }}</h2>
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
    </div>
  </b-container>
</template>

<style scoped>
h2{
  text-align: center;
}

/* Situation category card*/
.category-card{
  display: flex;
  align-items: center;
  min-width: 180px;
}

.category-card .card{
  text-align: center;
  font-size: 1.6rem;   
  transition: all 0.25s ease;
  background-color: rgb(33, 144, 234); 
  color: white;
}

.category-card .card:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.category-card a {
  text-decoration: none;
  color: inherit;
}



/*card for words and phrases */
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

<script setup>
import { computed } from 'vue';
import { useWordsStore } from '../stores/wordsPhrasesStore';


const store = useWordsStore();
const categories = Object.keys(store.wordsData);

const selectedCategory = computed(() => store.selectedCategory);
const wordsByCategory = computed(() => {
  return selectedCategory.value ? store.wordsData[selectedCategory.value] : [];
});
</script>