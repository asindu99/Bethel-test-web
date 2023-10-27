<template>
    <div class="flex">
        <!-- main side bar  -->
        <div class=" bg-[#161937] text-[#7882c3] md:fixed bottom-0 md:flex z-[10]
        lg:w-[250px] md:w-[150px] sm:hidden gap-2
        min-[320px]:hidden lg:fixed md:top-0 
         flex-col">

         <!-- left side -->
        <div class="flex items-center w-[250px] py-4 pl-4">
                <img src="../img/logos/bethellogo.png" alt="" class="w-[30px]">
                <h1 class="font-medium ml-1 text-[18px] text-[#293793]">BETHEL</h1>
        </div>

            <!-- top menu section -->
            <div class="py-2 flex-col px-[10px] bg-[#1d2455] hidden"> 
                <!-- menu text -->
                <div class="">
                    <div class="relative lg:flex md:flex min-[320px]:flex sm:flex placeholder:">
                        <div class="absolute h-[15px] w-[3px] bg-[#E9983C]  top-1"></div>
                        <h3 class="text-[#c4c9ea] ml-2">Menu</h3>
                    </div>
                </div>
                <!-- end of menu text -->
            </div>
            
            <!-- middle section  -->
            <div class="flex flex-col gap-2">
                <!-- menu item -->
                <RouterLink to="/" class="">
                    <div class=" lg:flex md:flex sm:flex min-[320px]:flex
                     w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            grid_view
                        </span>  
                        <h3>Dashboard</h3>
                    
                    </div>

                </RouterLink>
                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/storage">
                    <div class=" lg:flex md:flex sm:flex min-[320px]:flex
                    w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            hard_drive
                        </span>  
                        <h3>Storage </h3>
                    
                    </div>
                </router-link>

                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/wallet">
                    <div class=" lg:flex md:flex sm:flex min-[320px]:flex
                     w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px]  mr-2
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
                    <div class=" min-[320px]:flex lg:flex sm:flex md:flex w-full px-3 my-2 py-2  transition-all ease-linear hidden">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
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
            <div class="flex flex-col gap-2">
                <!-- menu text -->
                <div class="flex py-2 flex-col px-[10px] bg-[#1d2455] hidden"> 
                <!-- menu text -->
                <div class="">
                    <div class="relative lg:flex md:flex min-[320px]:flex sm:flex placeholder:">
                        <div class="absolute h-[15px] w-[3px] bg-[#E9983C]  top-1"></div>
                        <h3 class="text-[#c4c9ea] ml-2">Account</h3>
                    </div>
                </div>
                <!-- end of menu text -->
            </div>

                <!-- end of menu text -->

                <!-- menu item -->
                <router-link to="/profile">
                    <div class=" min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            person_pin
                        </span>  
                        <h3>Profile </h3>
                    
                    </div>

                    <!-- small size -->
                    
                </router-link>
                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/billing">
                    <div class=" min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px]  mr-2
                        ">
                            attach_money
                        </span>  
                        <h3>Billing </h3>
                    
                    </div>

                    
                </router-link>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="https://docs.bethel.network/" class="active" target="_blank">
                    <div class="hover:bg-[#181d42] min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 hover:bg-[] my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px]  mr-2
                        ">
                            support
                        </span>  
                        <h3>Support </h3>
                    
                    </div>

                    

                    
                </a>
                <!-- end of the menu item -->
                <!-- menu item -->
                <RouterLink to="/login" class=" w-full">
                    <div class="hover:text-[#E9983C] min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 bg-[#120c2651] my-2 py-2  transition-all ease-linear
                    absolute bottom-4">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        
                        ">
                            logout
                        </span>  
                        <h3 c>Log Out </h3>
                    
                    </div>

                    
                </RouterLink>
                <!-- end of the menu item -->
            </div>
            <!-- end of the account section -->

            
        </div>
        <!-- end of the main side bar -->

        <div class=" flex justify-center bg-[#f7f1f1c2] z-0 lg:w-[100%] lg:mx-[0px] mt-[70px] h-full 
        md:px-[5px] sm:w-full min-[320px]:w-full min-[320px]:ml-0">


            <!-- router view must be here -->
            <div @click="asideHide"  class="w-full h-full mx-2 lg:pl-[240px] md:pl-[150px] " :class="modalStore.onBlur"> 
                <router-view class=""></router-view> 
            </div>
            <!-- end of the router view here -->

        </div>
    </div>
</template>

<script>
// import components 


// import stores
import {mapStores} from "pinia";
import useModalStore from "@/stores/modal";

export default{
    name : 'Page2Sidebar',
    components : {
        
    },
    computed :{
        ...mapStores(useModalStore)
    },

    data(){
        return{
            
        }
    },
    methods : {
        asideHide(){
            this.modalStore.isOpen = false;
            this.modalStore.dropMenuOC = false;
            this.modalStore.onBlur = '';

        }
    }
}
</script>
