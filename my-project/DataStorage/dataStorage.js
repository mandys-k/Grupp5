  // Logic for handling localStorage.
  // default level is 1. If there is data in localStorage, 
  // it will be used instead - SAK

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    // Load existing data from localStorage or set default values - SAK
    username: localStorage.getItem('tripLingo_user') || '',
    currentLevel: parseInt(localStorage.getItem('tripLingo_level')) || 1,
    isLoggedIn: !!localStorage.getItem('tripLingo_user')
  }),
  actions: {
    registerUser(name) {
      this.username = name;
      this.isLoggedIn = true;
      localStorage.setItem('tripLingo_user', name);
      localStorage.setItem('tripLingo_level', this.currentLevel);
    },
    completeLevel(levelId) {
      // Only unlock next level if the user just finished their highest reached level-SAK
      if (levelId === this.currentLevel) {
        this.currentLevel++;
        localStorage.setItem('tripLingo_level', this.currentLevel);
      }
    },
    logout() {
      this.username = '';
      this.isLoggedIn = false;
      localStorage.clear();
    }
  }
})