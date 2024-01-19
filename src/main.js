import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import '/src/assets/styles/main.pcss'

const player = document.getElementById('player');
const button = document.getElementById('sound')
const music = new Audio('/music/dark_ambient.mp3')
button.addEventListener('click', async () => {
    if(player.muted) {
        player.muted = false
        await music.play()
        button.innerText = 'ambient off'
    } else {
        player.muted = true
        button.innerText = 'ambient on'
        await music.pause()
    }
})

createApp(App)
    .use(router)
    .mount('#app')