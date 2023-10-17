import { createRouter, createWebHistory } from 'vue-router';
import MainContent from "@/components/MainContent.vue";
import page3Dashboard from '@/components/page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path : '/',
      component :MainContent,
    },
    { 
      name : 'dash',
      path : '/wallet',
      component : Page4Wallet,
    }
  ]
})

export default router
