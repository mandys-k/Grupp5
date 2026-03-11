<template>
 <div class="study-category">
  
    <h1><b>Level 1</b></h1>
    <h2>Study categories</h2>

    <div class="study-card">
      <router-link to="/wordsAndPhrases">
        <b-card>
        <b-card-text>Words and Phrases</b-card-text>
        </b-card>
      </router-link>

      <b-card>
        <b-card-text>Reading comprehension</b-card-text>
      </b-card>

      <b-card>
        <b-card-text>Listening comprehension</b-card-text>
      </b-card>

      <b-card>
        <b-card-text>Vocabulary quiz</b-card-text>
      </b-card>

      <b-card>
        <b-card-text>Pronunciation guide</b-card-text>
      </b-card>

      <b-card>
        <b-card-text>Level up quiz</b-card-text>
      </b-card>
    </div>
 </div>
</template>

<script>
import wordsAndPhrases from "../components/wordsAndPhrases.vue";

export default {
    components: {
      wordsAndPhrases,
    }
  }

</script>

<style scoped>

h2 {
    margin-bottom: 20px;
}
.study-category{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
}

.study-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px; 
  width: 100%;
  max-width: 500px;
}

.study-card .card{
  width: 420px;    
  height: 70px; 
  text-align: center;
  font-size: 1.6rem;   
  transition: all 0.25s ease;
  background-color: rgb(32, 103, 208); 
  color: white;
}

.study-card .card:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.study-card a {
  text-decoration: none;
  color: inherit;
}


</style>
