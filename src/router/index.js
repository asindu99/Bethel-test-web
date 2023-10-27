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
import LoginContent from '@/components/LoginSignup2/FormContent/LoginContent.vue'
import Profile1 from '@/components/Profile/Profile1.vue';
import ProfileEdit from '@/components/Profile/ProfileEdit.vue';
import ChangePassword from '@/components/Profile/ChangePassword.vue';





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
        },
        {
          path : '/profile',
          component : Profile1,
          children : [
            {
              path : '',
              component : ProfileEdit,
            },
            {
              path: '/profile/changePassword',
              component: ChangePassword,
            }
          ]
        }
        

      ]
    },

    // Sign up section routings
    {
      path : '/signup',
      component : LoginComp2,
      children : [
        {
          path : '',
          component : SignupThird,
        },
        {
          path : '/signup/personal',
          component : SignupSecond,
        }
      ]
    },
    // mobile verfication routings
    {
      path : '/mobile-verify',
      component : MobileVerify,
    },
    // sign in section routins
    {
      path : '/login',
      component : LoginContent,
    }

  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : 'text-[#161937] border-[2px] mx-1 my-0 rounded-full items-center bg-white justify-center'
})

export default router
