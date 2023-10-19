// import componets
import { createRouter, createWebHistory } from 'vue-router';
import MainContent from "@/components/MainContent.vue";
import Page3Dashboard from '@/components/Page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';
import Storage from '@/components/Storage.vue'
import Page5AccessKey from '@/components/Page5AccessKey.vue';
<<<<<<< Updated upstream
import MobileVerifyComp from '@/components/MobileVerifyComp.vue'
import Billing from '@/components/Billing.vue';
=======
import MobileVerifyComp from '@/components/MobileVerify/MobileVerifyComp.vue'

import VerifyComp from '@/components/MobileVerify/VerifyComp.vue';
import NumberVerifyComp from '@/components/MobileVerify/NumberVerifyComp.vue';
>>>>>>> Stashed changes





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
        },
        {
          path:'/billing',
          component: Billing,
        }

      ]
    },
    {
      path : '/Mobile-Verfication',
      component : MobileVerifyComp,
      children : [
        {
          path : '',
          component : VerifyComp,
        },
        {
          path : '/Mobile-Verfication/Number-Verify',
          component : NumberVerifyComp,
        }
      ]
    }
    
  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : 'bg-[#293793] text-[#E9983C]'
})

export default router
