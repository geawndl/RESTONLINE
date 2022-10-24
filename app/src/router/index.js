import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path : '/',
        component: () => import("@/views/Home")
    },    {
        name: 'Login',
        path : '/login',
        component: () => import("@/views/Login")
    },    {
        name: 'Register',
        path : '/register',
        component: () => import("@/views/Register")
    },    {
        name: 'DashBoard',
        path : '/dashboard',
        component: () => import("@/views/DashBoard")
    },    {
        name: 'Commande',
        path : '/commande',
        component: () => import("@/views/Commande")
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes, 
})