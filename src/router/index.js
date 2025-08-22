import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/main.vue'
import IconsFonts from '../pages/IconsFonts.vue'
import Button from '../pages/button.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/icons-fonts',
    name: 'IconsFonts',
    component: IconsFonts
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
