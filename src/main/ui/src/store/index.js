import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import {authModule} from './modules/auth'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    authModule
  },
})
