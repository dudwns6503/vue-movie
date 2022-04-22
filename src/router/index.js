import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'movieHome',
    component: () => import('@/views/MovieHome.vue'),
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: () => import('@/views/NotFoundPage.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/MovieSearch.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
