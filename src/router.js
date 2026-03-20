import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/HomeView.vue"
import QuizView from "./views/QuizView.vue"
import LoginView from "./views/LoginView.vue"
import LevelsView from "./views/LevelsView.vue"
import NotepadView from "./views/NotepadView.vue"
import SavedView from "./views/SavedView.vue"
import RegisterView from "./views/RegisterView.vue"
import UserDashboard from "./components/UserDashboard.vue"
import wordsAndPhrases from "./components/wordsAndPhrases.vue"
import LearningCategoryView from "./views/LearningCategoryView.vue"
import readingComprehension from "./components/readingComprehension.vue"
import listningComprehension from "./components/listningComprehension.vue"
import LanguageSelectView from "./views/LanguageSelectView.vue"
import TravellerSelectView from "./views/TravellerSelectView.vue"
import MemoryView from "./views/MemoryView.vue"

const protectedRoutes = [
    "/UserDashboard",
    "/levels",
    "/quiz",
    "/notepad",
    "/saved"
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            component: HomeView,
            path: "/"
        },
        {
            component: readingComprehension,
            path: "/readingComprehension"
        },
        { component: UserDashboard, path: "/UserDashboard" },
        {
            component: QuizView,
            path: "/quiz"
        },
        {
            component: LevelsView,
            path: "/levels"
        },
        {
            component: RegisterView,
            path: "/register"
        },
        {
            component: LanguageSelectView,
            path: "/register/language"
        },
        {
            component: TravellerSelectView,
            path: "/register/traveller"
        },
        {
            component: LoginView,
            path: "/login"
        },
        {
            component: NotepadView,
            path: "/notepad"
        },
        {
            component: SavedView,
            path: "/saved"
        },
        {
            component: wordsAndPhrases,
            path: "/wordsandphrases"
        },
        {
            component: LearningCategoryView,
            path: "/learning/:level"
        },
        {
            component: listningComprehension,
            path: "/listningComprehension"
        },
        {
            component: MemoryView,
            path: "/memory"
        }
    ]
})

router.beforeEach((to) => {
    const isLoggedIn = !!localStorage.getItem("tripLingo_session")
    const isProtected =
        protectedRoutes.includes(to.path) || to.path.startsWith("/learning/")
    if (isProtected && !isLoggedIn) {
        return "/login"
    }
})

export default router
