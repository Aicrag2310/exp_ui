import Vue from 'vue'
import VueRouter from 'vue-router'
import { TokenUtils } from '@/utils/TokenUtils';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => {
      if (!TokenUtils.hasToken()) {
        return import('../views/Login.vue');
      }
      return null;
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
