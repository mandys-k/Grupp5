<!-- Login container, style using CSS "login-container"-->

<template>
    <div class="login-container">
        <h1>Welcome to TripLingo!</h1>
        <p>Login to continue</p>
    </div>
</template>

<!--Script logic for the LoginView. 
If user is registered their values will be imported 
Added placeholder variables for use later in template - SAK -->

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../dataStorage/dataStorage'
import { useRouter } from 'vue-router'


const nameInput = ref('')
const userStore = useUserStore()
const router = useRouter()
</script>

