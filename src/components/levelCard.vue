<template>
  <div class="levels-wrapper">

    <div v-if="!userStore.isLoggedIn" class="guest-notice">
      <p>
        <RouterLink to="/login">Log in</RouterLink> or
        <RouterLink to="/register">register</RouterLink> to track your progress and unlock levels.
      </p>
    </div>

    <!-- v-for loop for level cards - SAK-->
    <div class="levels-grid">
      <div
        v-for="level in levels"
        :key="level.id"
        class="level-card"
        :class="levelClass(level.id)"
      >

        <!--Icons that are shown depending on status of levels 🔒 ✓ ▶ - SAK -->

        <div class="level-icon">
          <span v-if="!userStore.isLoggedIn">🔒</span>
          <span v-else-if="level.id < userStore.currentLevel">✓</span>
          <span v-else-if="level.id === userStore.currentLevel">▶</span>
          <span v-else>🔒</span>
        </div>

        <!-- Level number and status badge - SAK -->
        <div class="level-info">
          <h3>Level {{ level.id }}</h3>

          <!-- CSS is dynamic and classes used change depending on level status - SAK -->

          <span class="level-status" :class="levelClass(level.id)">
            <template v-if="!userStore.isLoggedIn">Login to unlock</template>
            <template v-else-if="level.id < userStore.currentLevel">Completed</template>
            <template v-else-if="level.id === userStore.currentLevel">Available</template>
            <template v-else>Locked</template>
          </span>
        </div>

        <RouterLink
          v-if="userStore.isLoggedIn && level.id <= userStore.currentLevel"
          :to="`/quiz?level=${level.id}`"
          class="btn-play"
        >
          {{ level.id < userStore.currentLevel ? 'Replay' : 'Start' }}
        </RouterLink>

      </div>
    </div>

  </div>
</template>

<script setup>
import { useUserStore } from '../stores/dataStorage.js'

// Variables and funcntions for levels page - SAK
const userStore = useUserStore()

const levels = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
]

function levelClass(id) {
  if (!userStore.isLoggedIn) return 'locked'
  if (id < userStore.currentLevel) return 'completed' 
  if (id === userStore.currentLevel) return 'current' 
  return 'locked'                                       
}
</script>

<style scoped>
/* Custom CSS classes for other elements of the levelcard page - SAK */
.levels-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
}

.guest-notice {
  text-align: center;
  padding: 14px;
  margin-bottom: 24px;
  background-color: #f0f4ff;
  border-radius: 8px;
  font-size: 0.95rem;
}

.guest-notice a {
  color: #0b0b62;
  font-weight: 600;
  text-decoration: none;
}

.guest-notice a:hover {
  text-decoration: underline;
}


.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.level-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  text-align: center;
  transition: transform 0.15s, box-shadow 0.15s;
}

/* Green border for completed levels - SAK */
.level-card.completed {
  border-color: #4caf50;
  background-color: #f1fff2;
}

/* Blue border and Glow CSS for active Level - SAK*/
.level-card.current {
  border-color: #0b0b62;
  background-color: #f0f4ff;
  box-shadow: 0 4px 16px rgba(11, 11, 98, 0.15);
}

/* Greyed out and no hover effect for locked levels - SAK */
.level-card.locked {
  border-color: #e0e0e0;
  opacity: 0.6;
}

.level-card.completed:hover,
.level-card.current:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.level-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.level-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.level-status {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Green badge for completed - SAK */
.level-status.completed {
  background-color: #e8f5e9;
  color: #2e7d32;
}

/* Blue badge for Active Level - SAK */
.level-status.current {
  background-color: #e8eaf6;
  color: #0b0b62;
}

.level-status.locked {
  background-color: #f5f5f5;
  color: #9e9e9e;
}

.btn-play {
  padding: 8px 24px;
  background-color: #0b0b62;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-play:hover {
  background-color: #1a1a8c;
}
</style>
