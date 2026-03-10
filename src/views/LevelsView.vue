<template>
  <div class="levels-page">
    <h1 class="page-title">Quiz Levels</h1>
    <LevelCard />
  </div>
</template>

<script setup>
import LevelCard from '../components/levelCard.vue'
</script>

<style scoped>
.levels-page {
  padding: 32px 16px;
}

.page-title {
  text-align: center;
  margin-bottom: 24px;
  font-size: 2rem;
}
</style>
