import Vue from 'vue';
import Router from 'vue-router';

/*中间层的view*/
import VueView from '@/components/index';

import homeRouter from '@/router/home';
import manageRouter from '@/router/manage';

/*login*/
import login from "@Common/router-login";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',      //home
    component: VueView,
    children: homeRouter
  }, {
    path: '/manage',      //manage
    component: VueView,
    children: manageRouter
  }]
});

router.beforeEach((to, from, next) => {
  // login.apply(this, [...arguments]);
  next();
});

export default router;
