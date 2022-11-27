import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Index from '../view/index/Index.vue'
import Position from '../view/position/Position.vue'

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
                component: () => import('../view/magazine/Magazine.vue')
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('../view/message/Message.vue')
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