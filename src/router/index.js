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
import BucketFolder from '@/components/BucketFolder.vue';
import MobileVerify from "@/components/LoginSignup2/Mobile-verify/MobileVerify.vue"
import SignupSecond from '@/components/LoginSignup2/FormContent/Signup-second.vue';
import SignupThird from '@/components/LoginSignup2/FormContent/Signup-third.vue';
import LoginContent from '@/components/LoginSignup2/FormContent/LoginContent.vue'
// import Profile1 from '@/components/Profile/Profile1.vue';
// import ProfileEdit from '@/components/Profile/ProfileEdit.vue';
// import ChangePassword from '@/components/Profile/ChangePassword.vue';
import Profile from '@/components/Profile.vue';
import NewFolder from '@/components/NewFolder.vue';
import FogotPasswordContent from '@/components/LoginSignup2/FormContent/FogotPasswordContent.vue'
import ChangePasswordComponent from '@/components/LoginSignup2/FormContent/ChangePasswordComponent.vue'


const routes = [
    // main section routings
    { 
      path : '/home',
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
          component:BucketFolder,
        },
        {
          path:'/newFolder',
          component:NewFolder,

        },
        {
          path:'/profile',
          component:Profile,
        },
        
        // {
        //   path : '/profile',
        //   component : Profile1,
        //   children : [
        //     {
        //       path : '',
        //       component:ProfileEdit,
        //     },
        //     {
        //       path : '/profile/profileEdit',
        //       component : ProfileEdit,
        //     },
        //     {
        //       path: '/profile/changePassword',
        //       component: ChangePassword,
        //     }
        //   ]
        // }
        

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
        },
        
      ]
    },
    // mobile verfication routings
    {
      path : '/mobile-verify',
      component : MobileVerify,
    },
    // sign in section routins
    {
      path : '/',
      component : LoginContent,
    },
    {
      path:'/forgot',
      component:FogotPasswordContent,
    },
    {
      path:'/changePassword',
      component:ChangePasswordComponent,
    }

  ]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass : 'text-[#5669cc] bg-white lg:mx-3 md:mx-[5px] sm:mx-2 h-[40px] rounded-xl justify-center items-center flex ',
})

export default router
