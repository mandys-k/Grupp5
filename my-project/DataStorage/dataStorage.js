import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // Logic for handling localStorage. First set to null, default level is 1. If there is data in localStorage, it will be used instead - SAK
    user: JSON.parse(localStorage.getItem('tripLingoUser')) || null,
    currentLevel: parseInt(localStorage.getItem('tripLingoLevel')) || 1,
  }),
  actions: {
    login(name) {
      this.user = { name };
      localStorage.setItem('tripLingUser', JSON.stringify(this.user));
    },
    updateProgress(newLevel) {
      if (newLevel > this.currentLevel) {
        this.currentLevel = newLevel;
        localStorage.setItem('tripLingLevel', this.currentLevel);
      }
    }
  }
})