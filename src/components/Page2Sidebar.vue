<template>
    <div class="">
        <!-- main side bar  -->
        <aside class="w-[280px] fixed flex-col bottom-0  left-0 top-0 shadow-md pt-20">
            <!-- top menu section -->
            <div class="flex py-2 flex-col px-[10px] bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]"> 
                <!-- menu text -->
                <div class="">
                    <div class="relative">
                        <div class="absolute h-[15px] w-[3px] bg-[#293793] top-1"></div>
                        <h3 class="text-[#293793] ml-2">Menu</h3>
                    </div>
                </div>
                <!-- end of menu text -->
            </div>
            
            <!-- middle section  -->
            <div class="flex flex-col">
                <!-- menu item -->
                <a href="#" class="active">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            grid_view
                        </span>  
                        <h3>Dashboard</h3>
                    
                    </div>
                </a>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="#" class="active">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            hard_drive
                        </span>  
                        <h3>Storage </h3>
                    
                    </div>
                </a>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="#" class="active">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            wallet
                        </span>  
                        <h3>Wallet </h3>
                    
                    </div>
                </a>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="#" class="active">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            key
                        </span>  
                        <h3>Access Keys </h3>
                    
                    </div>
                </a>
                <!-- end of the menu item -->
            </div>
            <!-- end of the middle section -->


            <!-- account section -->
            <div class="flex flex-col mt-3"> 
                <!-- menu text -->
                <div class="px-[10px] py-2 bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]">
                    <div class="relative">
                        <div class="absolute h-[15px] w-[3px] bg-[#293793] top-1"></div>
                        <h3 class="text-[#293793] ml-2">Account</h3>
                    </div>
                </div>
                <!-- end of menu text -->

                <!-- menu item -->
            <a href="#" class="active mt-3">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            person_pin
                        </span>  
                        <h3>Profile </h3>
                    
                    </div>
                </a>
                <!-- end of the menu item -->

                <!-- menu item -->
                <a href="#" class="active">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
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
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
                        <span class=" material-symbols-outlined top-2 right-[20px] text-[#E9983C] mr-2
                        ">
                            support
                        </span>  
                        <h3>Support </h3>
                    
                    </div>
                </a>
                <!-- end of the menu item -->
                <!-- menu item -->
                <a href="#" class="absolute bottom-2 w-full">
                    <div class="flex w-full px-3 hover:bg-[#293793] my-2 py-2 hover:text-[white] transition-all ease-linear">
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

            
        </aside>


        <!-- right side of the other  -->
        <div class="flex w-screen overflow-hidden">
            <page3Dashboard/>
            <RouterView name="mainView"></RouterView>
        </div>
    </div>
</template>

<script>
import page3Dashboard from '@/components/page3Dashboard.vue';

export default{
    name : 'Page2Sidebar',
    components : {
        page3Dashboard,
    }
}
</script>
