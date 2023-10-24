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
import LoginComp from '@/components/LoginSignup/LoginComp.vue';
import Signup from '@/components/LoginSignup/Signup.vue';
import SignupAccount from '@/components/LoginSignup/SignupAccount.vue';
import SignupPersonal from '@/components/LoginSignup/SignupPersonal.vue';
import LoginComp2 from '@/components/LoginSignup2/LoginComp2.vue'






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
      component : Signup,
      children : [
        {
          path : '',
          component : SignupAccount,
        },
        {
          path: '/signup/signup-personal',
          component: SignupPersonal,
        }
      ]
    },
    {
      path : '/login2',
      component : LoginComp2,
    }
    
  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : ' text-white'
})

export default router
