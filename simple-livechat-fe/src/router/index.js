import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/chat'
    },
    {
      path: '/chat',
      name: 'chat-room',
      component: ChatRoom
    }
  ]
})

export default router
