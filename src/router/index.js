import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }, {
    path: '/regional',
    name: 'regional',
    component: () => import('../views/RegionalView.vue')
  }, {
    path: '/national',
    name: 'national',
    component: () => import('../views/NationalView.vue')
  }, {
    path: '/:pathMatch(.*)*',
    redirect: '/home'
  }]
});

export default router;
