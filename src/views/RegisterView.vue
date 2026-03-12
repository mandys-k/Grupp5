<template>
  <div class="register-container">
    <h1>Create an Account</h1>
    <p class="subtitle">Join TripLingo and start your language journey</p>

    <div v-if="errorMessage" class="error-box">
      <img src="@/assets/thinking-bird.png" alt="Error" class="thinking-bird" />
      <p class="error-message">{{ errorMessage }}</p>
    </div>

    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="name">Username</label>
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="Choose a username"
          required
        />
      </div>

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
          placeholder="Create a password (min. 6 characters)"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button type="submit" class="btn-register">Next</button>
    </form>

    <p class="login-link">
      Already have an account? <RouterLink to="/login">Log in here</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/dataStorage.js'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

const userStore = useUserStore()
const router = useRouter()

function handleRegister() {
  errorMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Password must be at least 6 characters.'
    return
  }

  const result = userStore.validateNewUser(name.value, email.value, password.value)

  if (result.success) {
    router.push('/register/language')
  } else {
    errorMessage.value = result.message
  }
}
</script>

<style scoped>
.register-container {
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

.error-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.thinking-bird {
  width: 120px;
  height: auto;
  margin-bottom: 10px;
}

.error-message {
  color: #d32f2f;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  padding: 10px 14px;
  background-color: #fdecea;
  border-radius: 8px;
  border: 1px solid #f5c6c6;
  margin: 0;
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

.btn-register {
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

.btn-register:hover {
  background-color: #1a1a8c;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
}

.login-link a {
  color: #0b0b62;
  font-weight: 600;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
