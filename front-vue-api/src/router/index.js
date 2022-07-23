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
    name: 'Nombre cualquiera para esta ruta',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/Register',
    name: 'Nombre cualquiera para esta otra ruta',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
