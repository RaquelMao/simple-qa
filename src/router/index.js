import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/page/home').default,
    },
    {
      path: '/ending',
      name: 'ending-page',
      component: require('@/page/ending').default,
    },
  ],
});
