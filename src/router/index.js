// import componets
import { createRouter, createWebHistory } from 'vue-router';
import MainContent from "@/components/MainContent.vue";
import Page3Dashboard from '@/components/Page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';
import Storage from '@/components/Storage.vue'
import Page5AccessKey from '@/components/Page5AccessKey.vue';
import Billing from '@/components/Billing.vue';
import MobileVerifyComp from '@/components/MobileVerify/MobileVerifyComp.vue'
import VerifyComp from '@/components/MobileVerify/VerifyComp.vue';
import NumberVerifyComp from '@/components/MobileVerify/NumberVerifyComp.vue';
import LoginComp from '@/components/LoginSignup/LoginComp.vue'
import SignupComp from '@/components/LoginSignup/SignupComp.vue'






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
      path : '/Mobile-Verification',
      component : MobileVerifyComp,
      children : [
        {
          path : '',
          component : VerifyComp,
        },
        {
          path : '/Mobile-Verification/Number-Verify',
          component : NumberVerifyComp,
        }
      ]
    },
    {
      path : '/login',
      component : LoginComp,
    },
    {
      path : '/signup',
      component : SignupComp
    }
    
  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : 'bg-[#f7f1f1c2] text-[#E9983C]'
})

export default router
