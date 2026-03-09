import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import QuizView from "./views/QuizView.vue";
import LoginView from "./views/LoginView.vue";
import LevelsView from "./views/LevelsView.vue";
import NotepadView from "./views/NotepadView.vue";
import SavedView from "./views/SavedView.vue";
import RegisterView from "./views/RegisterView.vue";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            component: HomeView,
            path: "/",
        },
        {
            component: QuizView,
            path: "/quiz",
        },
         {
            component: LevelsView,
            path: "/levels",
        },
        {
            component: RegisterView,
            path: "/register",
        },
        {
            component: LoginView,
            path: "/login",
        },
                {
            component: NotepadView,
            path: "/notepad",
        },
                {
            component: SavedView,
            path: "/saved",
        },
    ],
});
