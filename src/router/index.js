import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/components/Login'
import Order from '@/views/Order/Order'

Vue.use(Router)

export const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'order',
                component: Order
            }
        ]
    },
    {
        path: '/login',
        component: Login
    }
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;

