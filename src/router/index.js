import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'images',
        component: () => import('../views/dashboard/Images.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
