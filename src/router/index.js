import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainIndex.vue'

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'admittance',
        name: 'admittance',
        component: () => import('../views/admittance/index.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
