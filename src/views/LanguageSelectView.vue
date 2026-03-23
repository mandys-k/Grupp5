<template>
    <div class="lang-page">
        <h1>Which language would you like to learn?</h1>
        <p class="subtitle">Select your language to get started</p>

        <div class="flag-grid">
            <div
                v-for="lang in languages"
                :key="lang.value"
                class="flag-card"
                :class="{
                    'flag-card--active': !lang.disabled,
                    'flag-card--disabled': lang.disabled,
                    'flag-card--selected': selected === lang.value
                }"
                @click="!lang.disabled && select(lang.value)"
            >
                <span :class="`fi fi-${lang.flag} flag-icon`"></span>
                <span class="lang-name">{{ lang.value }}</span>
                <span v-if="lang.disabled" class="coming-soon"
                    >Coming Soon</span
                >
            </div>
        </div>

        <div class="footer">
            <button class="btn-next" :disabled="!selected" @click="goNext">
                Next →
            </button>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue"
    import { useRouter } from "vue-router"
    import { useUserStore } from "../stores/dataStorage.js"

    const router = useRouter()
    const userStore = useUserStore()

    // Redirect back if no pending registration
    if (!userStore.pendingReg) {
        router.replace("/register")
    }

    const selected = ref("")

    const languages = [
        { value: "Spanish", flag: "es", disabled: true },
        { value: "French", flag: "fr", disabled: true },
        { value: "German", flag: "de", disabled: true },
        { value: "Italian", flag: "it", disabled: false },
        { value: "Portuguese", flag: "pt", disabled: true },
        { value: "Japanese", flag: "jp", disabled: true },
        { value: "Mandarin Chinese", flag: "cn", disabled: true },
        { value: "Korean", flag: "kr", disabled: true },
        { value: "Arabic", flag: "sa", disabled: true },
        { value: "Russian", flag: "ru", disabled: true }
    ]

    function select(value) {
        selected.value = value
    }

    function goNext() {
        if (!selected.value) return
        userStore.pendingReg.language = selected.value
        router.push("/register/traveller")
    }
</script>

<style scoped>
    .lang-page {
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

    .flag-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 20px;
        max-width: 800px;
        margin: 0 auto 48px;
    }

    .flag-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 24px 16px;
        border-radius: 12px;
        border: 2px solid #e0e0e0;
        transition:
            transform 0.15s,
            box-shadow 0.15s,
            border-color 0.15s;
    }

    .flag-card--active {
        cursor: pointer;
    }

    .flag-card--active:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 20px rgba(11, 11, 98, 0.15);
        border-color: #0b0b62;
    }

    .flag-card--disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    .flag-card--selected {
        border-color: #0b0b62;
        background-color: #f0f4ff;
        box-shadow: 0 4px 16px rgba(11, 11, 98, 0.2);
    }

    .flag-icon {
        width: 56px;
        height: 42px;
        border-radius: 6px;
        background-size: cover;
    }

    .lang-name {
        font-weight: 600;
        font-size: 0.9rem;
    }

    .coming-soon {
        font-size: 0.65rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #999;
    }

    .footer {
        margin-top: 16px;
    }

    .btn-next {
        padding: 14px 48px;
        background-color: #0b0b62;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition:
            background-color 0.2s,
            opacity 0.2s;
    }

    .btn-next:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    .btn-next:not(:disabled):hover {
        background-color: #1a1a8c;
    }
</style>
