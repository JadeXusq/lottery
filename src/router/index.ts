import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'lottery',
      component: () => import('../views/lottery/index.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () => import('../views/simple/index.vue')
    }
  ]
})

export default router
