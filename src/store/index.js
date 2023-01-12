import Vue from 'vue'
import Vuex from 'vuex'
import cities from '@/store/cities'
import users from '@/store/users'
import form from '@/store/form'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cities: cities,
    user: users,
    form: form
  }
})
