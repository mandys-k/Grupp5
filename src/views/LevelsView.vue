<template>
  <div class="levels-page">
    <h1 class="page-title">Quiz Levels</h1>
    <LevelCard />
    <RouterLink to="/UserDashboard" class="back-link">← Back to Dashboard</RouterLink>
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

.back-link {
  display: inline-block;
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
