import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [

  //forma #1 de rutas----------------------------------------------------------
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //forma #2 de rutas---------------------------------------------------------
  {
    path: '/Login',
    name: 'Ingresar',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/Register',
    name: 'Registrarse',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/Forgot',
    name: 'Olvidar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgetView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
