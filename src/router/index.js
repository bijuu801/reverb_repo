import { createWebHashHistory } from "vue-router";
const generateRoutes = (...routes) => routes.map(route => ({
    path: `/${route.toLowerCase()}`,
    name: route,
    component: () => import(`../views/${route}.vue`)
}));
const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('../views/index.vue')
        },
        ...generateRoutes('About', 'Contacts')
    ]
});

export default router;