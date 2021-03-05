import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"

Vue.use(Router)

let router = new Router({
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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../components/Registration')
    },
    {
      path: '/guard', //Защищенные страницы пример
      name: 'guard',
      component:  () => import('../components/secure'),
      meta: { 
        requiresAuth: true
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next(from) //если неавторизован - назад
  } else {
    next() 
  }
})

export default router