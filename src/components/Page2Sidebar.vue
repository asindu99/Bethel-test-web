<template>
    <div class="flex">
        <!-- main side bar  -->
        <div class=" bg-white md:fixed bottom-0 md:flex z-[10]
        lg:w-[220px] md:w-[150px] sm:hidden
        min-[320px]:hidden lg:fixed md:top-0 
         flex-col shadow-md pt-20">

            <!-- top menu section -->
            <div class="flex py-2 flex-col px-[10px] bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]"> 
                <!-- menu text -->
                <div class="">
                    <div class="relative lg:flex md:flex min-[320px]:flex sm:flex placeholder:">
                        <div class="absolute h-[15px] w-[3px] bg-[#293793] top-1"></div>
                        <h3 class="text-[#293793] ml-2">Menu</h3>
                    </div>
                </div>
                <!-- end of menu text -->
            </div>
            
            <!-- middle section  -->
            <div class="flex flex-col">
                <!-- menu item -->
                <RouterLink to="/" class="">
                    <div class="lg:flex md:flex sm:flex min-[320px]:flex
                     w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            grid_view
                        </span>  
                        <h3>Dashboard</h3>
                    
                    </div>

                </RouterLink>
                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/storage">
                    <div class="lg:flex md:flex sm:flex min-[320px]:flex
                    w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            hard_drive
                        </span>  
                        <h3>Storage </h3>
                    
                    </div>
                </router-link>

                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/wallet">
                    <div class="lg:flex md:flex sm:flex min-[320px]:flex
                     w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            wallet
                        </span>  
                        <h3>Wallet </h3>
                    
                    </div>

                    <!-- samll size -->
                    
                </router-link>
                <!-- end of the menu item -->

                <!-- menu item -->
                <RouterLink to="/accesskey" class="flex justify-center items-center">
                    <div class="min-[320px]:flex lg:flex sm:flex md:flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            key
                        </span>  
                        <h3>Access Keys </h3>
                    
                    </div>

                    <!-- small size -->
                    
                </RouterLink >
                <!-- end of the menu item -->
            </div>
            <!-- end of the middle section -->


            <!-- account section -->
            <div class="flex flex-col mt-3">
                <!-- menu text -->
                <div class="lg:flex md:flex px-[10px] py-2 bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]">
                    <div class="relative">
                        <div class="absolute h-[15px] w-[3px] bg-[#293793] top-1"></div>
                        <h3 class="text-[#293793] ml-2">Account</h3>
                    </div>
                </div>

                <!-- end of menu text -->

                <!-- menu item -->
                <a href="#" class="active mt-3">
                    <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            person_pin
                        </span>  
                        <h3>Profile </h3>
                    
                    </div>

                    <!-- small size -->
                    
                </a>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="#" class="active">
                    <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            attach_money
                        </span>  
                        <h3>Billing </h3>
                    
                    </div>

                    
                </a>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="https://docs.bethel.network/" class="active" target="_blank">
                    <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            support
                        </span>  
                        <h3>Support </h3>
                    
                    </div>

                    

                    
                </a>
                <!-- end of the menu item -->
                <!-- menu item -->
                <a href="#" class=" w-full">
                    <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            logout
                        </span>  
                        <h3>Log Out </h3>
                    
                    </div>

                    
                </a>
                <!-- end of the menu item -->
            </div>
            <!-- end of the account section -->

            
        </div>
        <!-- end of the main side bar -->

        <div class=" flex justify-center bg-[#f7f1f1c2] z-0 lg:w-[100%] lg:mx-[0px] mt-[80px] h-full 
        md:px-[5px] sm:w-full min-[320px]:w-full min-[320px]:ml-0">
            <!-- router view must be here -->
            <div class="w-full h-full mx-2 lg:pl-[240px] md:pl-[150px]" :class="modalStore.onBlur"> 
                <router-view></router-view> 
            </div>
        </div>
    </div>
</template>

<script>
// import components 
import Page3Dashboard from '@/components/Page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';
import Storage from '@/components/Storage.vue';
import Page5AccessKey from '@/components/Page5AccessKey.vue';

// import stores
import {mapStores} from "pinia";
import useModalStore from "@/stores/modal";

export default{
    name : 'Page2Sidebar',
    components : {
        Page3Dashboard,
        Page4Wallet,
        Storage,
        Page5AccessKey,
    },
    computed :{
        ...mapStores(useModalStore)
    },

    data(){
        return{
            
        }
    }
}
</script>
