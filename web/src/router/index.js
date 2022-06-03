import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
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
    path: '/MainPage',
    name: 'MainPage',
    component: () => import('../pages/MainPage'),
    children:[
      {
        path:"",
        redirect:"chartPage"
      },
      // {
      //   path:"/",
      //   name:"chartPage",
      //   component: () => import('../pages/chartPage'),
      // },
      {
        path:"chartPage",
        name:"chartPage",
        component: () => import('../pages/chartPage'),
      },
      {
        path:"publicityPage",
        name:"publicityPage",
        component: () => import('../pages/publicityPage'),
      },
      
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router