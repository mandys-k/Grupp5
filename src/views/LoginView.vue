<template>
  <div class="login-page">
    <RouterLink to="/" class="logo-link">
      <img src="@/assets/Logotext.png" alt="TripLingo" class="logo-img" />
      <span class="logo-back-text">Back to Home</span>
    </RouterLink>
    <LoginComponent />
  </div>
</template>

<script setup>
import LoginComponent from '../components/LoginComponent.vue'
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  margin-top: 40px;
  margin-bottom: 8px;
}

.logo-img {
  height: 60px;
  display: block;
  transition: opacity 0.2s;
}

.logo-back-text {
  display: block;
  text-align: center;
  margin-top: 6px;
  font-size: 0.85rem;
  color: #555;
}

.logo-link:hover .logo-img {
  opacity: 0.75;
}
</style>
