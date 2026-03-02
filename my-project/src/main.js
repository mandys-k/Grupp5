import { createApp } from "vue";

import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files - SAK
import { createBootstrap } from 'bootstrap-vue-next' 

import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

createApp(App).mount("#app");
