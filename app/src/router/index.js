import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path : '/',
        component: () => import("@/pages/HomePage")
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes, 
})