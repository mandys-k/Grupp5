// Imports — pulls in Pinia's defineStore to create the shared user store - SAK
import { defineStore } from 'pinia'

// Help functions — read and write user data to localStorage - SAK
function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem('tripLingo_users')) || []
  } catch {
    return []
  }
}

function saveUsers(users) {
  localStorage.setItem('tripLingo_users', JSON.stringify(users))
}

export const useUserStore = defineStore('user', {

  state: () => {
    const users = loadUsers()
    const currentEmail = localStorage.getItem('tripLingo_session') || null
    const currentUser = users.find(u => u.email === currentEmail) || null

    return {
      users,
      currentEmail,
      currentName: currentUser ? currentUser.name : '',
      currentLevel: currentUser ? currentUser.level : 1,
      currentTravellerType: currentUser ? currentUser.travellerType : '',
      currentLanguage: currentUser ? currentUser.language : '',
      isLoggedIn: !!currentEmail && !!currentUser,
    }
  },

  
  getters: {
    travellerType: (state) => state.currentTravellerType,
  },

  // Actions — functions that update state and sync changes to localStorage - SAK
  actions: {
    registerUser(name, email, password, language, travellerType) {
      if (this.users.find(u => u.name.toLowerCase() === name.toLowerCase())) {
        return { success: false, message: 'That username is already taken. Please choose another.' }
      }

      if (this.users.find(u => u.email === email)) {
        return { success: false, message: 'An account with this email already exists.' }
      }

      const newUser = { name, email, password, level: 1, language, travellerType }
      this.users.push(newUser)
      saveUsers(this.users)

      this.currentEmail = email
      this.currentName = name
      this.currentLevel = 1
      this.currentTravellerType = travellerType
      this.currentLanguage = language
      this.isLoggedIn = true
      localStorage.setItem('tripLingo_session', email)

      return { success: true }
    },

    loginUser(email, password) {
      const user = this.users.find(u => u.email === email && u.password === password)

      if (!user) {
        return {
          success: false,
          message: 'Incorrect email or password. Please check your credentials or register an account.',
        }
      }

      this.currentEmail = email
      this.currentName = user.name
      this.currentLevel = user.level
      this.currentTravellerType = user.travellerType || ''
      this.currentLanguage = user.language || ''
      this.isLoggedIn = true
      localStorage.setItem('tripLingo_session', email)

      return { success: true }
    },

    completeLevel(levelId) {
      if (levelId === this.currentLevel) {
        this.currentLevel++

        const user = this.users.find(u => u.email === this.currentEmail)
        if (user) {
          user.level = this.currentLevel
          saveUsers(this.users)
        }
      }
    },

    logout() {
      this.currentEmail = null
      this.currentName = ''
      this.isLoggedIn = false
      this.currentLevel = 1
      localStorage.removeItem('tripLingo_session')
    },
  },
})
