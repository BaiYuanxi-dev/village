import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: () => import('../pages/Start')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/Home')
  },
  {
    path: '/mainPages',
    name: 'MainPages',
    component: () => import('../pages/MainPages')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
