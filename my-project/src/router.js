import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import QuizView from "./views/QuizView.vue";
import loginView from "./views/loginView.vue";
import levelsView from "./views/levelsView.vue";


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
            component: levelsView,
            path: "./views/levelsView.vue",
        },
        {
            component: loginView,
            path: ".views/loginView.vue",
        },
    ],
});
