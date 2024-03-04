import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

console.log(`import.meta.env.BASE_URL: ${import.meta.env.BASE_URL}`)
console.log(`import.meta.env.S_BASE_URL: ${import.meta.env.S_BASE_URL}`)
console.log(`import.meta.env.E_BASE_URL: ${import.meta.env.E_BASE_URL}`)
console.log(`import.meta.env.L_BASE_URL: ${import.meta.env.L_BASE_URL}`)
console.log(`import.meta.env.VITE_BASE_URL: ${import.meta.env.VITE_BASE_URL}`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
