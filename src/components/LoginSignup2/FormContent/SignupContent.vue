<template>
    <div class="w-full h-full lg:px-10 justify-center items-center flex flex-col ">

        <!-- bethel logo div -->
    <div class="flex md:items-center lg:justify-start md:justify-center w-full gap-1">
        <img class="w-[30px]" src="../../../img/logos/bethellogo.png" alt="">
        <h3 class="text-sidebarBG font-medium ">BETHEL</h3>
    </div>

        

        <!-- form section -->
        <div class="w-full mt-4">
            <form action="">
                <!---------------------- router view goes here------------------- -->
                <!-- <router-view></router-view> -->
                <SignupThird v-if="modalStore.toggleSignLog"/>
                <SignupSecond v-else/>

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
