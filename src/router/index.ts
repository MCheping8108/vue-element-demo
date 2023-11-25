import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: () => import('../views/HomeView.vue')},
        {path: '/about', name: 'about', component: () => import('../views/about.vue')},
        {path: '/userforms', name: 'userforms', component: () => import('../views/userforms.vue')},
        {path: '/tresjs-3d', name: 'tresjs-3d', component: () => import('../views/tresjs-3d.vue')},
    ]
})

export default router