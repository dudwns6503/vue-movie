import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MovieHome',
    component: () => import('@/views/MovieHome.vue'),
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: () => import('@/views/NotFoundPage.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/MovieSearchPage.vue'),
  },
  {
    path: '/movieinfo/:id',
    name: 'MovieInfo',
    component: () => import('@/views/MovieInfo.vue'),
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: () => import('@/views/AboutMe.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
