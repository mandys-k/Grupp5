<script>
    import { mapStores } from "pinia"
    import { useThemeStore } from "../stores/themeStore.js"
    import { useUserStore } from "../stores/dataStorage.js"

    export default {
        computed: {
            ...mapStores(useThemeStore),
            ...mapStores(useUserStore)
        },
        created() {
            this.themeStore.saveTheme()
        },
        data() {
            return {
                hamburgerClicked: false
            }
        },
        methods: {
            navbarmenu() {
                this.hamburgerClicked = !this.hamburgerClicked
            }
        }
    }
</script>

<template>
    <header class="header-navbar text-white">
        <b-container fluid class="px-4">
            <BRow>
                <BCol class="d-flex justify-content-end">
                    <button
                        class="darkmode-button"
                        :class="{
                            darkmodeButtonOn: themeStore.darkModeOn,
                            darkmodeButtonOff: !themeStore.darkModeOn
                        }"
                        @click="themeStore.onDarkMode"
                        type="button"
                    >
                        <span
                            class="material-symbols-outlined circle"
                            :class="{ circleRight: themeStore.darkModeOn }"
                        >
                            circle
                        </span>
                        <span class="darkmode-text">Dark mode</span>
                    </button>
                </BCol>
            </BRow>

            <b-row class="align-items-center">
                <b-col cols="6" md="4" class="triplingo">
                    <RouterLink :to="userStore.isLoggedIn ? '/UserDashboard' : '/'"
                        ><img
                            src="@/assets/Logotext.png"
                            alt="TripLingo"
                            class="logo-img"
                    /></RouterLink>
                </b-col>

                <b-col cols="6" class="d-md-none text-end">
                    <button class="hamburger" @click="navbarmenu">☰</button>
                </b-col>

                <b-col
                    md="8"
                    class="d-none d-md-flex justify-content-end nav-links"
                >
                    <RouterLink to="/UserDashboard">Dashboard</RouterLink>
                    <RouterLink to="/levels">Levels</RouterLink>
                    <RouterLink to="/notepad">Notepad</RouterLink>
                    <RouterLink to="/saved">Saved</RouterLink>
                </b-col>
            </b-row>
        </b-container>

        <div v-if="hamburgerClicked" class="mobile-menu d-md-none">
            <RouterLink to="/UserDashboard" @click="navbarmenu"
                >Dashboard</RouterLink
            >
            <RouterLink to="/levels" @click="navbarmenu">Levels</RouterLink>
            <RouterLink to="/notepad" @click="navbarmenu">Notepad</RouterLink>
            <RouterLink to="/saved" @click="navbarmenu">Saved</RouterLink>
        </div>
    </header>
</template>

<style>
    .header-navbar {
        background-color: rgba(11, 11, 98, 0.9);
    }

    .triplingo a {
        color: white;
        text-decoration: none;
    }
    .header-navbar {
        background-color: rgba(255, 255, 255, 0);
        padding: 10px;
    }

    .nav-links {
        display: flex;
        gap: 30px;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
    }

    .nav-links a:hover {
        text-decoration: underline;
    }
    .logo-img {
        height: 32px;
        width: auto;
    }

    @media (min-width: 768px) {
        .logo-img {
            height: 44px;
        }
    }

    .nav-links {
        display: flex;
        gap: 30px;
    }

    .nav-links a {
        color: rgba(11, 11, 98, 0.95);
        text-decoration: none;
    }

    .hamburger {
        background: none;
        border: none;
        color: white;
    }

    .mobile-menu {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
        background-color: rgba(11, 11, 98, 0.95);
    }

    .mobile-menu a {
        color: white;
        text-decoration: none;
    }

    .hamburger {
        background: none;
        border: none;
        color: rgba(11, 11, 98, 0.95);
    }

    .mobile-menu a:hover {
        text-decoration: underline;
    }

    .darkmode-button {
        display: flex;
        border-radius: 2em;
        padding: 0.2em 0;
        width: 9.4em;
        gap: 0.5em;
        background-color: white;
        position: relative;
        align-items: center;
        transition:
            background-color 0.2s,
            color 0.2s;
        font-family: "Varela Round", sans-serif;
        margin-top: 0.5em;
    }

    .darkmodeButtonOn {
        background-color: black;
        color: white;
        border: 2px solid white;
    }

    .darkmodeButtonOn:hover {
        background-color: rgb(35, 35, 35);
    }

    .darkmodeButtonOff:hover {
        background-color: rgb(212, 212, 212);
    }

    .circle {
        font-size: 1.8em;
        position: absolute;
        transition: transform 0.4s;
    }

    .circleRight {
        transform: translateX(4em);
    }

    .darkmode-text {
        margin-left: 2em;
    }
</style>
