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
      component: () => import('../components/Home')
    },
    {
      path: '/temphome',
      name: 'tempHome',
      component: () => import('../components/temphome')
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
    next('/login') 
  } else {
    next() 
  }
})

export default router