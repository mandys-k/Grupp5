<template>
 <div class="study-category">

    <h1><b>Level {{ level }}</b></h1>
    <h2>Study categories</h2>

    <div class="study-card">
      <router-link :to="`/wordsandphrases?level=${level}`">
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

      <router-link :to="`/quiz?level=${level}`">
        <b-card>
          <b-card-text>Vocabulary quiz</b-card-text>
        </b-card>
      </router-link>

      <b-card>
        <b-card-text>Pronunciation guide</b-card-text>
      </b-card>

      <b-card>
        <b-card-text>Level up quiz</b-card-text>
      </b-card>
    </div>

    <router-link to="/levels" class="back-link">← Back to levels</router-link>
 </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const level = route.params.level
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

.back-link {
  margin-top: 24px;
  color: #0b0b62;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
}

.back-link:hover {
  text-decoration: underline;
}

</style>
