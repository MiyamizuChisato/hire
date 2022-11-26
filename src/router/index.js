import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Index from '../view/Index.vue'

const routes = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index
            }
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, next) {
        return {
            top: 0,
            left: 0
        }
    }
})
export default router