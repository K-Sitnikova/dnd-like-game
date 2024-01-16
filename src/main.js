import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import '/src/assets/styles/main.pcss'

createApp(App)
    .use(router)
    .mount('#app')