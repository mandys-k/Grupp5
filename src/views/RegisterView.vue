<template>
  <div class="register-container">
    <h1>Create an Account</h1>
    <p class="subtitle">Join TripLingo and start your language journey</p>

    
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

      <!-- Password — min 6 characters, function for checking handleRegister() - SAK -->
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

      <!-- Confirm Password — must match password field, checked in handleRegister() - SAK -->
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

      <!-- Choice of language to learn — dropdown with flags, options disabled except Italian as agreed- SAK -->
      <div class="form-group">
        <label>Language to Learn</label>
        <div
          class="lang-dropdown"
          tabindex="0"
          @click="showLangDropdown = !showLangDropdown"
          @blur="showLangDropdown = false"
        >
          <div class="lang-selected">
            <span v-if="selectedLang">
              <span :class="`fi fi-${selectedLang.flag} me-2`"></span>{{ selectedLang.value }}
            </span>
            <span v-else class="lang-placeholder">Select a language</span>
            <span class="lang-arrow">&#9660;</span>
          </div>
          <ul v-show="showLangDropdown" class="lang-options">
            <li
              v-for="lang in languages"
              :key="lang.value"
              :class="{ 'lang-option-disabled': lang.disabled }"
              @mousedown.prevent="!lang.disabled && selectLang(lang)"
            >
              <span :class="`fi fi-${lang.flag} me-2`"></span>
              {{ lang.value }}
              <span v-if="lang.disabled" class="ms-auto lang-soon">Coming Soon</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Traveller Type — only Leisure Traveller is available - SAK -->
      <div class="form-group">
        <label for="travellerType">Traveller Type</label>
        <select id="travellerType" v-model="travellerType" required>
          <option value="" disabled>Select a traveller type</option>
          <option value="Leisure Traveller">Leisure Traveller</option>
          <option value="Work Traveller" disabled>Work Traveller (Coming Soon)</option>
          <option value="Nomad Traveller" disabled>Nomad Traveller (Coming Soon)</option>
        </select>
      </div>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <button type="submit" class="btn-register">Register</button>
    </form>

    <p class="login-link">
      Already have an account? <RouterLink to="/login">Log in here</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/dataStorage.js'
import { useRouter } from 'vue-router'

// Variables for registration form - SAK
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const language = ref('')
const travellerType = ref('')
const errorMessage = ref('') 

// Language dropdown variables and functions - SAK
const showLangDropdown = ref(false)
const languages = [
  { value: 'Spanish',          flag: 'es', disabled: true },
  { value: 'French',           flag: 'fr', disabled: true },
  { value: 'German',           flag: 'de', disabled: true },
  { value: 'Italian',          flag: 'it', disabled: false },
  { value: 'Portuguese',       flag: 'pt', disabled: true },
  { value: 'Japanese',         flag: 'jp', disabled: true },
  { value: 'Mandarin Chinese', flag: 'cn', disabled: true },
  { value: 'Korean',           flag: 'kr', disabled: true },
  { value: 'Arabic',           flag: 'sa', disabled: true },
  { value: 'Russian',          flag: 'ru', disabled: true },
]
const selectedLang = computed(() => languages.find(l => l.value === language.value) || null)
function selectLang(lang) {
  language.value = lang.value
  showLangDropdown.value = false
}

const userStore = useUserStore()
const router = useRouter()

//The handleRegister function - SAK
function handleRegister() {
  
  errorMessage.value = ''

  // If clause checks for password confirmation, minimum length and language 
  // selection before calling the store to register the user - SAK
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return  // Stop here
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Password must be at least 6 characters.'
    return
  }

  if (!language.value) {
    errorMessage.value = 'Please select a language to learn.'
    return
  }

  const result = userStore.registerUser(name.value, email.value, password.value, language.value, travellerType.value)

  if (result.success) {
    router.push('/UserDashboard')
  } else {
    errorMessage.value = result.message
  }
}
</script>

<style scoped>
/* Extra CSS for the registration page - SAK */

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

.form-group input,
.form-group select {
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background: transparent;
  color: inherit;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #0b0b62;
}

.lang-dropdown {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  user-select: none;
  font-size: 1rem;
}

.lang-dropdown:focus {
  outline: none;
  border-color: #0b0b62;
}

.lang-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.lang-placeholder {
  opacity: 0.5;
}

.lang-arrow {
  font-size: 0.75rem;
  opacity: 0.5;
}

.lang-options {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: var(--bs-body-bg, #fff);
  list-style: none;
  padding: 4px 0;
  margin: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.lang-options li {
  padding: 8px 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.lang-options li:hover:not(.lang-option-disabled) {
  background: rgba(11, 11, 98, 0.07);
}

.lang-option-disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.lang-soon {
  font-size: 0.7rem;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.error-message {
  color: #d32f2f;
  font-size: 0.875rem;
  margin-bottom: 12px;
  padding: 8px 12px;
  background-color: #fdecea;
  border-radius: 6px;
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
