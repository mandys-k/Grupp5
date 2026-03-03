import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import QuizView from "./views/QuizView.vue";
import LoginView from "./views/LoginView.vue";
import LevelsView from "./views/LevelsView.vue";


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
            path: "levels",
        },
        {
            component: LoginView,
            path: "/login",
        },
    ],
});
