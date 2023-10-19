// impor
import { createRouter, createWebHistory } from 'vue-router';
import MainContent from "@/components/MainContent.vue";
import Page3Dashboard from '@/components/Page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';
import Storage from '@/components/Storage.vue'
import Page5AccessKey from '@/components/Page5AccessKey.vue';
import MobileVerifyComp from '@/components/MobileVerifyComp.vue'





const routes = [
    { 
      path : '/',
      component :MainContent,
      children :[
        {
          path : '',
          component : Page3Dashboard
        },
        {
          path : '/wallet',
          component : Page4Wallet,
        },
        {
          path:'/storage',
          component:Storage,
        },
        {
          path :'/accesskey',
          component : Page5AccessKey,
        }

      ]
    },
    {
      path : '/Mobile-Verfication',
      component : MobileVerifyComp,
    }
    
  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : 'bg-[#293793] text-[#E9983C]'
})

export default router
