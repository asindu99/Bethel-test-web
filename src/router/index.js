// import router
import { createRouter, createWebHistory } from 'vue-router';

// import all the components
import MainContent from "@/components/MainContent.vue";
import Page3Dashboard from '@/components/Page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';
import Storage from '@/components/Storage.vue'
import Page5AccessKey from '@/components/Page5AccessKey.vue';
import Billing from '@/components/Billing.vue';
import LoginComp2 from '@/components/LoginSignup2/LoginComp2.vue';
import StorageFolder from '@/components/StorageFolder.vue';
import MobileVerify from "@/components/LoginSignup2/Mobile-verify/MobileVerify.vue"
import SignupSecond from '@/components/LoginSignup2/FormContent/Signup-second.vue';
import SignupThird from '@/components/LoginSignup2/FormContent/Signup-third.vue';





const routes = [
    // main section routings
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
        },
        {
          path:'/bucketFolder',
          component:StorageFolder,
        }

      ]
    },

    // log in section routings
    {
      path : '/login',
      component : LoginComp2,
      children : [
        {
          path : '',
          component : SignupThird,
        },
        {
          path : '/login2/personal',
          component : SignupSecond,
        }
      ]
    },
    // mobile verify routings
    {
      path : '/mobile-verify',
      component : MobileVerify,
    }
    
  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : ' text-white'
})

export default router
