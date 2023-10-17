import { createRouter, createWebHistory } from 'vue-router';
import MainContent from "@/components/MainContent.vue";
import page3Dashboard from '@/components/page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';
import Storage from '@/components/Storage.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path : '/',
      component :MainContent,
      children :[
        {
          path : '',
          component : page3Dashboard
        },
        {
          path : '/wallet',
          component : Page4Wallet,
        },
        {
          path:'/storage',
          component:Storage,
        }

      ]
    }
    
  ]
})

export default router
