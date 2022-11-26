import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Index from '../view/Index.vue'
import Position from '../view/Position.vue'

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
            },
            {
                path: '/position',
                name: 'position',
                component: Position
            },
            {
                path: '/magazine',
                name: 'magazine',
                component: () => import('../view/Magazine.vue')
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('../view/Message.vue')
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