import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import QuizView from "./views/QuizView.vue";

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
    ],
});
