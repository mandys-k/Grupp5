import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router.js"
import { createBootstrap } from "bootstrap-vue-next"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-next/dist/bootstrap-vue-next.css"
import "flag-icons/css/flag-icons.min.css"
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(createBootstrap)
app.mount("#app")
