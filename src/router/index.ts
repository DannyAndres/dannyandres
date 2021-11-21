import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// history mode that request server -> createWebHistory
import Welcome from '../views/Welcome.vue';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: { both: true },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { both: true },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/Login.vue'),
    meta: { auth: false },
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/dashboard/Home.vue'),
    meta: { auth: true },
  },
  // =========================================
  // ERRORS
  // =========================================
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: { both: true },
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch('loading/change', true);
  if (to.matched.some((record) => record.meta.both)) {
    store.dispatch('loading/change', false);
    next();
  } else {
    if (to.matched.some((record) => record.meta.auth)) {
      // View require authentication -> | (auth user) => next | (not auth user) => redirect to login |
      const token: string = store.getters['authentication/token'];
      store
        .dispatch('authentication/validate', token)
        .then(() => {
          store.dispatch('loading/change', false);
          next();
        })
        .catch(() => {
          store.dispatch('loading/change', false);
          next({ name: 'login' });
        });
    } else {
      // View does not require authentication -> | (auth user) => redirect to home | (not auth user) => next |
      const token: string = store.getters['authentication/token'];
      store
        .dispatch('authentication/validate', token)
        .then(() => {
          store.dispatch('loading/change', false);
          next({ name: 'home' });
        })
        .catch(() => {
          store.dispatch('loading/change', false);
          next();
        });
    }
  }
});

export default router;
