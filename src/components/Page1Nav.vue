<template>
    <div class="fixed w-full">
        <!-- start of the nav bar -->
        <nav class="flex justify-between lg:py-2 lg:px-10 bg-gray-100 shadow-md z-[100]
        md:py-2 md:px-10
        sm:py-2 sm:px-10
        min-[320px]:py-2 min-[320px]:px-4 gap-4 ">
            <!-- left side -->
            <div class="flex items-center w-[250px] basis-[20%]">
                <img src="../img/logos/bethellogo.png" alt="" class="w-[30px]">
                <h1 class="font-medium ml-1 text-[18px] text-[#293793]">BETHEL</h1>
            </div>

            <!-- middle side -->
            <div class="lg:flex md:hidden items-center justify-start basis-[50%]  sm:hidden min-[320px]:hidden">
                <h2 class="md:ml-10 lg:ml-0">Dashboard</h2>
            </div>
            <!-- end of the middle -->



            <!-- right side -->
            <div class="md:flex lg:flex sm:flex  min-[320px]:flex items-center w-[300px] basis-[42%] gap-2 justify-end">

                <button class="mr-2 text-[12px] border-[2px] rounded-full p-[7px] px-[18px]
                bg-[#293793] text-white border-[#293793]
                hover:bg-white hover:text-[#293793] transition-all ease-linear sm:hidden min-[320px]:hidden lg:flex md:flex">Connect Wallet</button>

                <img src="../img/icons/icon-account.png" alt="" class="w-[30px] ">
                <h3 class="text-[14px] lg:flex md:flex sm:flex min-[320px]:hidden">User's name</h3>
                <div>
                    <span class="material-symbols-outlined mt-[10px]">
                        expand_more
                    </span>
                </div>

                <div class="gap-3 sm:flex min-[320px]:flex lg:hidden md:hidden items-center ">
                <button @click="showSide">
                    <span class="material-symbols-outlined">
                    menu
                    </span>
                </button>
            </div>
            </div>
            <!-- end of the right side -->




            <!-- mobile size nav -->
            
            <!-- end of the mobile size nav -->

        </nav>
        <!-- end of the nav bar -->

        <!-- side bar in mobile size window -->
        <div v-if="modalStore.isOpen" class=" bg-white lg:w-[220px] md:w-[150px] sm:w-[250px] sm:fixed z-[0]
        min-[320px]:fixed min-[320px]:top-0 min-[320px]:bottom-0 min-[320px]:z-[10] min-[320px]:w-[200px]
         lg:hidden md:hidden flex-col shadow-md pt-4">
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
                <RouterLink to="/" class="active">
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
                <router-link to="/storage" class="active">
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
                <a href="#" class="active flex justify-center items-center">
                    <div class="min-[320px]:flex lg:flex sm:flex md:flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            key
                        </span>  
                        <h3>Access Keys </h3>
                    
                    </div>

                    <!-- small size -->
                    
                </a>
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

                <!-- small size -->
                <!-- <div class="min-[320px]:hidden sm:hidden lg:hidden md:flex items-center justify-center px-[10px] py-2 bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]">
                    <div class="relative items-center justify-center">
                        <img src="../img/icons/icon-account.png" alt="" class="w-[30px]">
                    </div>
                </div> -->
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
                <a href="#" class="active">
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
        <!-- end of the side bar in small windows -->
    </div>
</template>

<script>
import {mapStores} from "pinia";
import useModalStore from "@/stores/modal";

export default{ 
    name : 'Page1Dashboard',

    computed:{
        ...mapStores(useModalStore),
    },

    data(){
        return{
        }
    }, 
    methods :{
        showSide(){
            this.modalStore.isOpen = !this.modalStore.isOpen;
        }
    }

}
</script>
