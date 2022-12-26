import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/CityView.vue')
  },
  {
    path: '/users',
    name: 'autocomplete',
    component: () => import('@/views/UsersView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
