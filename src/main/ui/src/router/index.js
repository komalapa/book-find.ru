import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/cabinet/Profile')
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import('../views/cabinet/Reviews')
    }
  ]
})
