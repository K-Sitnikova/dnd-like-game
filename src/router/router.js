import Index from "../pages/index.vue";
import Start from "../pages/start.vue";
import IdPage from "../pages/[id].vue";
import {createRouter, createWebHistory} from "vue-router";



const routes = [
    {
        path: '/horror_story/',
        component: Index
    },
    {
        path: '/horror_story/start',
        component: Start
    },
    {
        path: '/horror_story/:id',
        component: IdPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
