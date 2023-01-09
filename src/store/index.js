import Vue from 'vue'
import Vuex from 'vuex'
import cities from '@/store/cities'
import users from '@/store/users'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cities,
    users
  }
})
