<template>
  <div class="login-container">
    <h1>Welcome to TripLingo!</h1>
    <p class="subtitle">Log in to track your progress</p>

    <!-- @submit.prevent I've read stops browser's default form submission and instead
      ive set it to call the handleLogin function - SAK -->
    <form @submit.prevent="handleLogin">

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password" 
          placeholder="Enter your password"
          required
        />
      </div>

    
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <button type="submit" class="btn-login">Log In</button>
    </form>

    <p class="register-link">
      Don't have an account? <RouterLink to="/register">Register here</RouterLink>
    </p>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useUserStore } from '../stores/dataStorage.js'
import { useRouter } from 'vue-router'

// Variables and functions for login page - SAK
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const userStore = useUserStore()
const router = useRouter()


function handleLogin() {

const result = userStore.loginUser(email.value, password.value)

  errorMessage.value = ''

  if (result.success) {
    
    router.push('/UserDashboard')
  } else {
    errorMessage.value = result.message
  }
}

</script>

<style scoped>

.login-container {
  max-width: 400px;
  margin: 60px auto; 
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.subtitle {
  margin-bottom: 24px;
  opacity: 0.65;
  font-size: 0.95rem;
}


.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.form-group label {
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-group input {
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: transparent;
  color: inherit;
}

.form-group input:focus {
  outline: none;
  border-color: #0b0b62;
}

.error-message {
  color: #d32f2f;
  font-size: 0.875rem;
  margin-bottom: 12px;
  padding: 8px 12px;
  background-color: #fdecea;
  border-radius: 6px;
}

.btn-login {
  width: 100%;
  padding: 12px;
  background-color: #0b0b62;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-login:hover {
  background-color: #1a1a8c;
}

.register-link {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
}

.register-link a {
  color: #0b0b62;
  font-weight: 600;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
