import { createRouter,createWebHistory } from "vue-router";

import Register from '../views/Register'


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
        component:  Register
    },    {
        name: 'DashBoard',
        path : '/dashboard',
        component: () => import("@/views/DashBoard")
    },    {
        name: 'Tracking',
        path : '/tracking',
        component: () => import("@/views/Tracking")
    },    {
        name: 'Commande',
        path : '/commande',
        component: () => import("../views/Commande")
    },   
]
const router = createRouter({ history: createWebHistory(), routes })
export default router