import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('./components/VueHome.vue'),
        meta: {
            public: true,
        },
    },
    {
        path: '/evento/:id?',
        name: 'Ver Evento',
        component: () => import('./components/VueEvent.vue'),
        meta: {
            public: true,
        },
    },
    {
        path: '/meuseventos',
        name: 'Ver Meus Eventos',
        component: () => import('./components/VueMyEvents.vue'),
        meta: {
            public: true,
        },
    },
    {
        path: '/meuseventos/novo',
        name: 'Adcionar Evento',
        component: () => import('./components/VueEventAdd.vue'),
        meta: {
            public: true,
        },
    },
    {
        path: '*',
        redirect: '/home',
    },
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

export default router;