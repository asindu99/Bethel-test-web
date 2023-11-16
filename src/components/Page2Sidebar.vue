<template>
    <div @click="modalStore.dropMenuOC = false" class="flex">
        <!-- main side bar  -->
        <div class=" bg-sidebarBG text-sidebarText md:fixed bottom-0 md:flex z-[100] relative
        lg:w-[250px] md:w-[190px] sm:hidden gap-2
        min-[320px]:hidden lg:fixed md:top-0 
         flex-col" :class="sidebarWidth">

         <!-- left side -->
        <div class="flex items-center justify-center w-full py-6">
                <h1 class="font-bold ml-1 lg:text-[18px] md:text-[14px]
                 md:mt-3 lg:mt-1
                  text-white" :class="sidebarHideShow">BETHEL ENGINE V4</h1>
        </div>


        <!-- sidebar content -->
        <div class="flex flex-col justify-evenly h-full ">
            <!-- top of sidebar content -->
            <div class="">
                    <!-- middle section  -->
                <div class="flex flex-col gap-2">
                    <!-- menu item -->
                    <RouterLink to="/home" class="">
                        <div class="lg:ml-7 md:ml-6 lg:flex md:flex sm:flex min-[320px]:flex
                        w-full lg:px-3  my-2 py-2  transition-all ease-linear">
                            <span class=" material-symbols-outlined
                            ">
                                grid_view
                            </span>  
                            <h3 :class="sidebarHideShow">Dashboard</h3>
                        
                        </div>

                    </RouterLink>
                    <!-- end of the menu item -->

                    <!-- menu item -->
                    <router-link to="/storage">
                        <div class="lg:ml-7 md:ml-6 lg:flex md:flex sm:flex min-[320px]:flex
                        w-full lg:px-3   my-2 py-2  transition-all ease-linear">
                            <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                            ">
                                hard_drive
                            </span>  
                            <h3 :class="sidebarHideShow">Storage </h3>
                        
                        </div>
                    </router-link>

                    <!-- end of the menu item -->

                    <!-- menu item -->
                    <router-link to="/wallet">
                        <div class="lg:ml-7 md:ml-6 lg:flex md:flex sm:flex min-[320px]:flex
                        w-full lg:px-3   my-2 py-2  transition-all ease-linear">
                            <span class=" material-symbols-outlined top-2 right-[20px]  mr-2
                            ">
                                wallet
                            </span>  
                            <h3 :class="sidebarHideShow">Wallet </h3>
                        
                        </div>

                        <!-- samll size -->
                        
                    </router-link>
                    <!-- end of the menu item -->

                    <!-- menu item -->
                    <RouterLink to="/accesskey" class="flex justify-center items-center">
                        <div class="lg:ml-7  md:ml-4 min-[320px]:flex lg:flex sm:flex md:flex w-full px-3 my-2 py-2  transition-all ease-linear hidden">
                            <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                            ">
                                key
                            </span>  
                            <h3 :class="sidebarHideShow">Access Keys </h3>
                        
                        </div>

                        <!-- small size -->
                        
                    </RouterLink >
                    <!-- end of the menu item -->
                </div>
                <!-- end of the middle section -->
            </div>

            <!-- bottom section -->
            <div class="flex flex-col gap-2">
                <!-- menu text -->
                <div class="flex py-2 flex-col px-[10px] bg-bethelBlue hidden"> 
                    <!-- menu text -->
                    <div class="">
                        <div class="relative lg:flex md:flex min-[320px]:flex sm:flex placeholder:">
                            <div class="absolute h-[15px] w-[3px] bg-bethelOrange  top-1"></div>
                            <h3 class="text-[#c4c9ea] ml-2">Account</h3>
                        </div>
                    </div>
                <!-- end of menu text -->
                </div>

                <!-- end of menu text -->

                <!-- menu item -->
                <router-link to="/profile">
                    <div class="lg:ml-7 md:ml-6 min-[320px]:flex sm:flex lg:flex md:flex w-full lg:px-3 md:px-0  my-2 py-2 ">
                        <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                        ">
                            person_pin
                        </span>  
                        <h3 :class="sidebarHideShow">Profile </h3>
                    
                    </div>

                    <!-- small size -->
                    
                </router-link>
                <!-- end of the menu item -->

                <!-- menu item -->
                <router-link to="/billing">
                    <div class="lg:ml-7 md:ml-6  min-[320px]:flex sm:flex lg:flex md:flex w-full lg:px-3 md:px-0  my-2 py-2 ">
                        <span class=" material-symbols-outlined top-2 right-[20px]
                        ">
                            attach_money
                        </span>  
                        <h3 :class="sidebarHideShow">Billing </h3>
                    
                    </div>

                    
                </router-link>
                <!-- end of the menu item -->

                <a href="https://docs.bethel.network/" class="active" target="_blank">
                            <div class="lg:ml-7 md:ml-6 min-[320px]:flex sm:flex lg:flex md:flex w-full lg:px-3 md:px-0  hover:bg-[] my-2 py-2">
                                <span class=" material-symbols-outlined top-2 right-[20px] mr-2
                            
                            ">
                            support
                            </span>  
                            <h3 :class="sidebarHideShow">Help </h3>
                                     
                            </div>
                </a>
                    <!-- end of the menu item -->
            </div>
            <!-- end of the account section -->

            <!-- logout -->
            <!-- menu item -->
            
                <!-- menu item -->
                <router-link to="/">
                        <button @click="logout">
                        <div class="lg:ml-7 md:ml-6 min-[320px]:flex sm:flex lg:flex md:flex w-full lg:px-3 md:px-0  my-2 py-2
                        absolute bottom-2">
                        <span class=" material-symbols-outlined top-2 right-[20px]  mr-2
                                ">
                                    logout
                                </span>  
                                <h3 :class="sidebarHideShow">Log Out </h3>  
                        
                        </div>
                    </button>      
                    </router-link>

            <!-- end of the menu item -->
        </div>
        <!-- end of the sidebar content -->

        <!-- sidebar hide show button -->
        <div :class="buttonHide" class="absolute top-1 right-2 lg:hidden flex">
            <button @click="fnSidebarHide">
                <span class="material-symbols-outlined">
                sync_alt
                </span>
            </button>
            
        </div>
        <!-- end of side bar hide show button -->

        <!-- sidebar hide show button -->
        <div :class="buttonHide2" class="absolute top-2 right-7">
            <button @click="fnSidebarShow">
                <span class="material-symbols-outlined">
                sync_alt
                </span>
            </button>
            
        </div>
        <!-- end of side bar hide show button -->
            

            
        </div>
        <!-- end of the main side bar -->

        <div class=" flex justify-center bg-[#ededed] lg:w-[100%] lg:mx-[0px] mt-[75px] h-full 
        md:px-[5px] sm:w-full min-[320px]:w-full min-[320px]:ml-0">


            <!-- router view must be here -->
            <div @click="asideHide"  class="w-full h-full mx-2 lg:pl-[240px] md:pl-[180px]" :class="modalStore.onBlur, paddingMD">
                <router-view class="scale-[1] z-[0]"></router-view> 
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
import { authUser } from "@/stores/AuthUser";
import axios from "axios";
import { useWalletData } from "@/stores/DataStore";
import router from '@/router/index'

export default{
    name : 'Page2Sidebar',
    components : {
        
    },

    computed :{
        ...mapStores(useModalStore ,authUser, useWalletData)
    },

    data(){
        return{
            // adding classes for the sidebar
            paddingMD : '',
            sidebarHideShow : '',
            sidebarWidth : '',

            //for the funtion 
            fnSidebar : false,

            // button hide
            buttonHide : '',
            buttonHide2 : 'hidden',
        }
    },
    async mounted(){

        try {
            const res = await axios.post('https://mw.bethel.network/auth/user',
            {
                withCredentials : true,
            });

            if(res.status === 200){
                console.log(res.status)
                this.authUserStore.userDetails.push(res.data);
                this.authUserStore.userID = this.authUserStore.userDetails[0]._id
       
            }
            else{
                router.push('/')
        }
        } catch (error) {
            router.push('/')
            
            
        }

        const res = await axios.get('https://mw.bethel.network/createwallet/' + this.authUserStore.userID ,
                {withCredentials :true})
                
        // save wallet details
        localStorage.setItem('walletDetails', JSON.stringify(res.data))

        const res2 = await axios.get('https://mw.bethel.network/storage/' + this.authUserStore.userID ,
                {withCredentials :true})
                
        // save wallet details
        localStorage.setItem('uploadDetails', JSON.stringify(res2.data))
    },
    methods : {
        asideHide(){
            this.modalStore.isOpen = false;
            this.modalStore.dropMenuOC = false;
            this.modalStore.onBlur = '';

        },
        fnSidebarHide(){
            this.sidebarHideShow = 'hidden';
            this.sidebarWidth = 'md:w-[80px]'
            this.paddingMD = 'md:pl-[80px]'
            this.buttonHide = 'hidden'
            this.buttonHide2 = ''
        },
        fnSidebarShow(){
            this.sidebarHideShow = '';
            this.sidebarWidth = 'md:w-[190px]';
            this.paddingMD = 'md:pl-[190px]';
            this.buttonHide2 = 'hidden';
            this.buttonHide = '';
        },
        async logout(){
            const res = await axios.post('https://mw.bethel.network/auth/logout',{withCredentials : true});
            if(res.error){
                console.log(res.error)
            }
            else{
                console.log("successfully logged out!")
                localStorage.removeItem('userDetails');
                localStorage.removeItem('userData');
                localStorage.removeItem('walletDetails');
                localStorage.removeItem('uploadDetails');
                localStorage.removeItem('storageDetails');

                setTimeout(()=> {
                window.location.reload();
                })
            }

        }
    }
}

 </script>
