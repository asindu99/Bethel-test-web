<template>
    <div class="fixed w-full">
        <!-- start of the nav bar -->
        <nav class="flex justify-between lg:py-2 lg:px-10 bg-white z-[100]
        md:py-2 md:px-10
        sm:py-2 sm:px-10
        min-[320px]:py-2 min-[320px]:px-4 gap-4 ">
            <!-- left side -->
            <div class="flex items-center w-[250px] basis-[20%] py-2">
                <img src="../img/logos/bethellogo.png" alt="" class="w-[30px]">
                <h1 class="font-medium ml-1 text-[18px] text-bethelBlue">BETHEL</h1>
            </div>

            <!-- middle side -->
            <div class="lg:flex md:hidden items-center justify-start basis-[50%]  sm:hidden min-[320px]:hidden">
                <h2 class="md:ml-10 lg:ml-0"></h2>
            </div>
            <!-- end of the middle -->



            <!-- right side -->
            <div class="md:flex lg:flex sm:flex  min-[320px]:flex items-center w-[300px] basis-[42%] gap-2 justify-end">

                <router-link to="/wallet"><button class="mr-2 text-[12px] border-[2px] rounded-full p-[7px] px-[18px]
                bg-bethelBlue text-white border-bethelBlue
                hover:bg-white hover:text-bethelBlue transition-all ease-linear sm:hidden min-[320px]:hidden lg:flex md:flex">Connect Wallet</button></router-link>

                <img src="../img/icons/icon-account.png" alt="" class="w-[30px] ">
                <h3 class="text-[14px] lg:flex md:flex sm:flex min-[320px]:hidden">User's name</h3>

                <!-- drop down -->
                <div class="relative">
                    <!-- drop down button -->
                    <button @click="DropMenu">
                        <span class="material-symbols-outlined mt-[10px]">
                        expand_more
                    </span>
                    </button>
                    <!-- end of drop down button  -->

                    <!-- drop down content -->
                    <div  v-if="modalStore.dropMenuOC" class="absolute w-[250px] bg-[#191f49] right-0 top-[55px] rounded-lg p-1 border-[2px] animate__animated animate__fadeInDown">

                        <!-- box 1 -->
                        <RouterLink to="/Mobile-Verification">
                            <div class="flex flex-col w-full hover:bg-blue-200 px-2 py-2 border-b-2  transition-all ease-in-out">
                                <h1 class="text-[14px] text-[#c4c9ea]">Bethel User Name</h1>
                                <h1 class="text-[11px] text-[white] cursor-pointer">behtelnetwork@bethel.mail.com</h1>
                            </div>
                        </RouterLink>
                        
                        <!-- end box1 -->

                        <!-- box 2 -->
                        <button @click="modalStore.dropMenuOC = false" class="w-full mt-2"><RouterLink to="/" class="active">
                            <div class="w-full text-sidebarText px-2 rounded-lg transition-all ease-linear">
                                <div class="lg:flex md:flex sm:flex min-[320px]:flex
                                    w-full px-3 my-2 py-2">
                                    <span class=" material-symbols-outlined top-2 right-[20px] mr-2 scale-[.9]
                                    ">
                                        grid_view
                                    </span>  
                                    <h3 class="text-[15px]">Dashboard</h3>
                            
                                </div>
                            </div>
                        </RouterLink>
                        </button>
                        <!-- end box 2 -->

                        <!-- box 3 -->
                        <router-link to="/profile" @click="modalStore.dropMenuOC = false"> <div class="w-full  px-2 rounded-lg transition-all ease-linear">
                            <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  py-2">
                                <span class=" material-symbols-outlined top-2 right-[20px] text-[#7882c3] mr-2 scale-[.9]
                                ">
                                    person_pin
                                </span>  
                                <h3 class="text-[15px] text-[#7882c3]">Profile </h3>
                            
                            </div>
                        </div></router-link> 
                        <!-- end box 3 -->

                        <!-- box 3 -->
                        <a href="#" @click="modalStore.dropMenuOC = false"> <div class="w-full  px-2 rounded-lg transition-all ease-linear">
                            <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  py-2">
                                <span class=" material-symbols-outlined top-2 right-[20px] text-[#7882c3] mr-2 scale-[.9]
                                ">
                                    switch_account
                                </span>  
                                <h3 class="text-[15px] text-[#7882c3]">Accounts </h3>
                            
                            </div>
                        </div></a> 
                        <!-- end box 3 -->

                        <!-- box 3 -->
                        <RouterLink to="/login">
                            <button @click="modalStore.dropMenuOC = false" class="w-full">
                                <div class="w-full hover:bg-[#181d42] px-2 rounded-lg transition-all ease-linear">
                                    <div class="min-[320px]:flex sm:flex lg:flex md:flex w-full px-3 my-2 py-2 hover:text-[white] transition-all ease-linear">
                                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2 scale-[.9]
                                        ">
                                            logout
                                        </span>  
                                        <h3 class="text-[15px] text-sidebarText">Log Out </h3>
                            
                                    </div>
                                </div>
                            </button>
                        </RouterLink>

                    </div>  
                    <!-- end of drop down content -->

                </div>
                <!-- end of drop down -->


                <div class="gap-3 sm:flex min-[320px]:flex lg:hidden md:hidden items-center ">
                <button @click="showSide">
                    <span class="material-symbols-outlined">
                    menu
                    </span>
                </button>
            </div>
            </div>
            <!-- end of the right side -->

        </nav>
        <!-- end of the nav bar -->

        
        <!-- side bar in mobile size window -->

        <!-- 1st color theme  -->
        <Transition
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutLeft"
        >
        <div v-if="modalStore.isOpen" class="
        relative bg-[#161937] lg:w-[220px] md:w-[150px] sm:w-[250px] sm:fixed z-[0]
        min-[320px]:fixed min-[320px]:top-0 min-[320px]:bottom-0 min-[320px]:z-[10] min-[320px]:w-[200px]
         lg:hidden md:hidden flex-col shadow-md pt-4">
            <!-- top menu section -->
            <div class="flex py-2 flex-col px-[10px] bg-sidebarBG hidden"> 
                <!-- menu text -->
                <div class="">
                    <div class="relative lg:flex md:flex min-[320px]:flex sm:flex placeholder:">
                        <div class="absolute h-[15px] w-[3px] bg-bethelOrange top-1"></div>
                        <h3 class="text-sidebarText ml-2">Menu</h3>
                    </div>

                </div>
                <!-- end of menu text -->
      
            </div>
                
            <!-- close button -->
            <button @click="closeSide">
                <div class="absolute top-2 right-2 text-white">
                    <span class="material-symbols-outlined">
                        close
                    </span> 
                </div>
            </button>
            <!-- end of the close button -->


            <!-- middle section  -->
            <div class="flex flex-col text-sidebarText">
                <!-- menu item -->
                
                    <RouterLink to="/" class=""><button @click="closeSide">
                    <div class="lg:flex md:flex sm:flex min-[320px]:flex
                     w-full px-3  my-2 py-2 transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            grid_view
                        </span>  
                        <h3>Dashboard</h3>
                    
                    </div>
                    </button>
                </RouterLink>
               
                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/storage" class="">
                <button @click="closeSide">
                    
                    <div class="lg:flex md:flex sm:flex min-[320px]:flex 
                    w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            hard_drive
                        </span>  
                        <h3>Storage </h3>
                    
                    </div>

                    </button>
                    </router-link>
                
                
                <!-- end of the menu item -->

                <!-- menu item -->
                
                    <router-link to="/wallet"><button @click="closeSide">
                    <div class="lg:flex md:flex sm:flex min-[320px]:flex
                     w-full px-3 my-2 py-2 transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            wallet
                        </span>  
                        <h3>Wallet </h3>
                    
                    </div>

                    <!-- samll size -->
                    </button>
                    </router-link>
                
                
                <!-- end of the menu item -->

                <!-- menu item -->
                
                    <router-link to="/accesskey"><button @click="closeSide">
                        <div class=" min-[320px]:flex lg:flex sm:flex md:flex w-full px-3 my-2 py-2 transition-all ease-linear">
                            <span class=" material-symbols-outlined top-2 right-[20px] mr-2 
                            ">
                                key
                            </span>  
                            <h3>Access Keys </h3>
                        
                        </div>

                        <!-- small size -->
                        </button>
                    </router-link>
                
                
                <!-- end of the menu item -->
            </div>
            <!-- end of the middle section -->


            <!-- account section -->
            <div class="flex flex-col text-sidebarText"> 
                <!-- menu text -->
                <div class=" lg:flex md:flex px-[10px] py-2 bg-bethelBlue hidden">
                    <div class=" relative lg:flex md:flex min-[320px]:flex sm:flex placeholder:">
                        <div class="absolute h-[15px] w-[3px] bg-[#E9983C] top-1"></div>
                        <h3 class="text-[#c4c9ea] ml-2">Account</h3>
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
                <router-link to="/profile" class=" mt-3" @click="closeSide">
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
                <button @click="closeSide">
                <router-link to="/billing" class="">
                    <div class=" min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            attach_money
                        </span>  
                        <h3>Billing </h3>
                    
                    </div>

                    
                </router-link>
                </button>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="https://docs.bethel.network/" class="active" target="_blank">
                    <div class=" min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            support
                        </span>  
                        <h3>Support </h3>
                    
                    </div>

                    

                    
                </a>
                <!-- end of the menu item -->
                <!-- menu item -->
                <router-link to="/login" class=" w-full">
                    <div class="absolute bottom-3 min-[320px]:flex sm:flex lg:flex md:flex w-full px-3  my-2 py-2  transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            logout
                        </span>  
                        <h3>Log Out </h3>
                    
                    </div>

                    
                </router-link>
                <!-- end of the menu item -->
            </div>
            <!-- end of the account section -->

            
        </div>
        <!-- end of the side bar in small windows -->

        </Transition>


        
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
            this.modalStore.isOpen = true;
            this.modalStore.onBlur = 'blur-md'
        },

        closeSide(){
            this.modalStore.isOpen = false;
            this.modalStore.onBlur = '';

        },
        DropMenu(){
            this.modalStore.dropMenuOC = !this.modalStore.dropMenuOC
        }
    }

}
</script>
