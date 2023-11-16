<template>
    <div class="flex flex-col items-center justify-center w-full h-full lg:px-10 ">

        <!-- bethel logo div -->
    <div class="flex w-full gap-1 md:items-center lg:justify-start md:justify-center">
        <img class="w-[30px]" src="../../../img/logos/bethellogo.png" alt="">
        <h3 class="font-medium text-sidebarBG ">BETHEL</h3>
    </div>

        
    
        <!-- form section -->
        <div class="w-full mt-4 lg:mr-20">
            <form action="">
                <!---------------------- router view goes here------------------- -->
                <!-- <router-view></router-view> -->
                <SignupThird></SignupThird>
                

            </form>
        </div>

        

    </div>
</template>

<script>
import SignupSecond from '@/components/LoginSignup2/FormContent/Signup-second.vue';
import SignupThird from '@/components/LoginSignup2/FormContent/Signup-third.vue';

import {mapStores} from 'pinia'
import useModalStore from '@/stores/modal'


export default{
    name : 'SignupContent',
    components : {
        SignupSecond,
        SignupThird
    },
    data(){
        return{
            password : 'password'
        }
    },
    computed : {
        ...mapStores(useModalStore)
    }
}
</script>
