import Index from "../pages/index.vue";
import Start from "../pages/start.vue";
import IdPage from "../pages/[id].vue";
import {createRouter, createWebHistory} from "vue-router";



const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/start',
        component: Start
    },
    {
        path: '/start/:id',
        component: IdPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
