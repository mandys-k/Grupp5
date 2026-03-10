<template>
  <div class="d-flex flex-wrap gap-3 mx-auto my-5 px-3" style="max-width: 860px;">

    <!-- LEFT CARD (Desktop) — Profile summary - SAK-->
    <div class="card p-4 d-flex flex-column align-items-center text-center flex-grow-1" style="min-width: 240px;">

      <img src="/assets/happy-bird.png" alt="TripLingo userimage" class="userimage mb-3" />

      <h1 class="fw-bold fs-4 mb-1">Welcome back, {{ userStore.currentName }}!</h1>

      <p class="text-muted small mb-2">{{ userStore.currentEmail }}</p>

      <p class="traveller-badge mb-4">{{ userStore.travellerType }}</p>

      <button class="btn btn-outline-danger" @click="handleLogout">Log Out</button>
    </div>

    <!-- RIGHT CARD (Desktop) — Progress summary - SAK -->
    <div class="card p-4 flex-grow-1" style="min-width: 260px;">
      <h2 class="fw-bold mb-4" style="font-size: 1.3rem;">Your Progress</h2>

      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
        <span class="text-muted small">Current Level</span>
        <span class="fw-bold">{{ userStore.currentLevel }}</span>
      </div>

      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
        <span class="text-muted small">Traveller Type</span>
        <span class="fw-bold traveller-type">{{ userStore.travellerType }}</span>
      </div>

      <div class="mt-4">
        <div class="d-flex justify-content-between small mb-2 opacity-75">
          <span>Overall Progress</span>
          <span>{{ progressPercent }}%</span>
        </div>

        <div class="progress-bar-track">
          <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>

        <p class="text-muted small mt-2">{{ levelsCompleted }} of {{ totalLevels }} levels completed</p>
      </div>

      <RouterLink to="/levels" class="btn btn-levels mt-4">Go to Levels</RouterLink>
    </div>

    <!-- Placeholder cards for progress, Languages, Friends, Quiz time. NPM-Install is needed for 
      installing flag-icons npm package. I've added it to list of dependencies in package.json  . SAK-->
    <div class="card p-4 coming-soon-card" style="min-width: 240px; flex: 1;">
      <div class="coming-soon-badge">Coming Soon</div>
      <div class="d-flex align-items-center gap-3 mb-3">
        <span :class="`fi fi-${languageFlag} flag-placeholder`"></span>
        <div>
          <h3 class="fw-bold mb-0" style="font-size: 1.1rem;">{{ userStore.currentLanguage || 'Not set' }}</h3>
          <p class="text-muted small mb-0">Language you're learning</p>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
        <span class="text-muted small">Spoken in</span>
        <span class="fw-bold small">20+ countries</span>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
        <span class="text-muted small">Native speakers</span>
        <span class="fw-bold small">~500 million</span>
      </div>
      <a href="#" class="btn btn-outline-secondary btn-sm mt-3 w-100 disabled" tabindex="-1">
        Explore Language &amp; Countries
      </a>
    </div>

   
    <div class="card p-4 coming-soon-card" style="min-width: 240px; flex: 1;">
      <div class="coming-soon-badge">Coming Soon</div>
      <h3 class="fw-bold mb-4" style="font-size: 1.1rem;">Quiz Time</h3>
      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
        <span class="text-muted small">Total time</span>
        <span class="fw-bold">— hrs — mins</span>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
        <span class="text-muted small">This week</span>
        <span class="fw-bold">— mins</span>
      </div>
      <div class="d-flex justify-content-between align-items-center py-2">
        <span class="text-muted small">Daily target</span>
        <span class="fw-bold">— / 15 mins</span>
      </div>
      <div class="daily-target-track mt-3">
        <div class="daily-target-fill" style="width: 0%;"></div>
      </div>
      <p class="text-muted small mt-2">Set a daily goal to build a streak</p>
    </div>

    
    <div class="card p-4 coming-soon-card" style="min-width: 260px; flex: 1.4;">
      <div class="coming-soon-badge">Coming Soon</div>
      <h3 class="fw-bold mb-4" style="font-size: 1.1rem;">Friends &amp; Leaderboard</h3>

      <div class="d-flex align-items-center gap-3 py-2 border-bottom">
        <img src="/assets/avatar-alex.png" alt="Alex" class="friend-avatar" />
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <span class="fw-bold small">Alex</span>
            <span class="text-muted small">Level 6</span>
          </div>
          <div class="daily-target-track mt-1">
            <div class="daily-target-fill" style="width: 60%;"></div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-3 py-2 border-bottom">
        <img src="/assets/avatar-jamie.png" alt="Jamie" class="friend-avatar" />
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <span class="fw-bold small">Jamie</span>
            <span class="text-muted small">Level 4</span>
          </div>
          <div class="daily-target-track mt-1">
            <div class="daily-target-fill" style="width: 40%;"></div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-3 py-2">
        <img src="/assets/avatar-sam.png" alt="Sam" class="friend-avatar" />
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between">
            <span class="fw-bold small">Sam</span>
            <span class="text-muted small">Level 2</span>
          </div>
          <div class="daily-target-track mt-1">
            <div class="daily-target-fill" style="width: 20%;"></div>
          </div>
        </div>
      </div>

      <button class="btn btn-outline-secondary btn-sm mt-3 w-100 disabled" tabindex="-1">
        Add Friends
      </button>

      <button class="btn btn-facebook-connect mt-2 w-100 disabled" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="me-2">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
        </svg>
        Connect with Facebook
      </button>
    </div>

  </div>
</template>

<script setup>

import { computed } from 'vue'
import { useUserStore } from '../stores/dataStorage.js'
import { useRouter } from 'vue-router'

// Variables for dahboard - SAK
const userStore = useUserStore()
const router = useRouter()
const totalLevels = 10

const levelsCompleted = computed(() => Math.max(0, userStore.currentLevel - 1))
const progressPercent = computed(() => Math.round((levelsCompleted.value / totalLevels) * 100))

const languageFlagMap = {
  'Spanish':          'es',
  'French':           'fr',
  'German':           'de',
  'Italian':          'it',
  'Portuguese':       'pt',
  'Japanese':         'jp',
  'Mandarin Chinese': 'cn',
  'Korean':           'kr',
  'Arabic':           'sa',
  'Russian':          'ru',
}

const languageFlag = computed(() => languageFlagMap[userStore.currentLanguage] || 'un')

// Function for logging out - SAK
function handleLogout() {
  userStore.logout()
  router.push('/')
}
</script>

<style scoped>
/* Custom CSS for some of the dashboard card elements - SAK */

.userimage {
  width: 120px;
  height: 120px;
  object-fit: contain;
}


.traveller-badge {
  display: inline-block;
  background-color: #e8eaf6;
  color: #0b0b62;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.traveller-type {
  color: #0b0b62;
}


.btn-levels {
  background-color: #0b0b62;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.btn-levels:hover {
  background-color: #1a1a8c;
  color: white;
}

.coming-soon-card {
  position: relative;
  opacity: 0.8;
}

.coming-soon-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #e8eaf6;
  color: #0b0b62;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.flag-placeholder {
  width: 48px;
  height: 36px;
  background-size: cover;
  border-radius: 4px;
  flex-shrink: 0;
}

.btn-facebook-connect {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9da8b5;
  color: #fff;
  border: none;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: not-allowed;
  opacity: 0.6;
}

.friend-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #e8eaf6;
  color: #0b0b62;
  filter: grayscale();
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.daily-target-track {
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 99px;
  overflow: hidden;
}

.daily-target-fill {
  height: 100%;
  background: linear-gradient(90deg, #0b0b62, #4a90d9);
  border-radius: 99px;
}


.progress-bar-track {
  width: 100%;
  height: 12px;
  background-color: #e0e0e0;
  border-radius: 99px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #0b0b62, #4a90d9);
  border-radius: 99px;
  transition: width 0.6s ease;
}

</style>
