<template>
  <div class="traveller-page">
    <h1>What type of traveller are you?</h1>
    <p class="subtitle">Choose the one that best describes you</p>

    <div class="card-grid">
      <div
        v-for="type in travellerTypes"
        :key="type.value"
        class="traveller-card"
        :class="{
          'traveller-card--active': !type.disabled,
          'traveller-card--disabled': type.disabled,
          'traveller-card--selected': selected === type.value
        }"
        @click="!type.disabled && select(type.value)"
      >
        <img :src="type.image" :alt="type.label" class="bird-img" />
        <h3 class="card-title">{{ type.label }}</h3>
        <p class="card-desc">{{ type.desc }}</p>
        <span v-if="type.disabled" class="coming-soon">Coming Soon</span>
      </div>
    </div>

    <div class="footer">
      <button
        class="btn-finish"
        :disabled="!selected"
        @click="finish"
      >
        Complete Registration
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/dataStorage.js'

import leisureBird from '@/assets/leisure-bird.png'
import businessBird from '@/assets/business-bird.png'
import nomadBird from '@/assets/nomad-bird.png'

const router = useRouter()
const userStore = useUserStore()

// Redirect back if no pending registration
if (!userStore.pendingReg) {
  router.replace('/register')
}

const selected = ref('')

const travellerTypes = [
  {
    value: 'Leisure Traveller',
    label: 'Leisure Traveller',
    desc: 'Exploring new places for fun and adventure.',
    image: leisureBird,
    disabled: false,
  },
  {
    value: 'Business Traveller',
    label: 'Business Traveller',
    desc: 'Navigating the world for work and meetings.',
    image: businessBird,
    disabled: true,
  },
  {
    value: 'Digital Nomad',
    label: 'Digital Nomad',
    desc: 'Living and working remotely across borders.',
    image: nomadBird,
    disabled: true,
  },
]

function select(value) {
  selected.value = value
}

function finish() {
  if (!selected.value || !userStore.pendingReg) return
  const language = userStore.pendingReg.language
  const result = userStore.completeRegistration(language, selected.value)
  if (result.success) {
    router.push('/UserDashboard')
  }
}
</script>

<style scoped>
.traveller-page {
  min-height: 100vh;
  padding: 48px 24px;
  text-align: center;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #0b0b62;
}

.subtitle {
  opacity: 0.6;
  margin-bottom: 40px;
  font-size: 1rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  max-width: 900px;
  margin: 0 auto 48px;
}

.traveller-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 24px;
  border-radius: 16px;
  border: 2px solid #e0e0e0;
  width: 240px;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s;
  position: relative;
}

.traveller-card--active {
  cursor: pointer;
}

.traveller-card--active:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(11, 11, 98, 0.15);
  border-color: #0b0b62;
}

.traveller-card--disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.traveller-card--selected {
  border-color: #0b0b62;
  background-color: #f0f4ff;
  box-shadow: 0 6px 20px rgba(11, 11, 98, 0.2);
}

.bird-img {
  width: 130px;
  height: auto;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0b0b62;
  margin: 0;
}

.card-desc {
  font-size: 0.85rem;
  opacity: 0.65;
  margin: 0;
}

.coming-soon {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999;
  background-color: #f0f0f0;
  padding: 3px 10px;
  border-radius: 20px;
}

.footer {
  margin-top: 16px;
}

.btn-finish {
  padding: 14px 48px;
  background-color: #0b0b62;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;
}

.btn-finish:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.btn-finish:not(:disabled):hover {
  background-color: #1a1a8c;
}
</style>
