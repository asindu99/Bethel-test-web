<template>
    <div class="flex flex-col lg:pl-[5px]">
        <!-- header  -->
        <div>
            <div class="flex flex-row items-center justify-between h-full bg-white shadow-lg px-2 py-2 rounded-lg">
                <div class="lg:ml-[30px] my-2">
                    <!-- account setting with arrow -->
                    <div class="flex">
                        <div>
                            <h3>Account Settings</h3>
                        </div>

                        <!-- right arrow -->
                        <div class="ml-2">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        
                    </div>
                    <!-- end of the account setting with arrrow -->

                    <!-- Main -->
                    <div>
                        <h1 class="font-bold text-[30px]">Profile</h1>
                    </div>
                    <!-- end of the main -->
                </div>
            </div>
        </div>
        <!-- header-end  -->

        <!-- main-container  -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col py-8">
            <!-- left side -->
            <div class="lg:flex-col md:flex-row sm:flex-col min-[320px]:flex-col basis-1/4">
                <div class="flex  items-center justify-center">
                    <router-link to="/profile">
                        <button class="border-[2px] px-3 py-3 rounded-xl bg-[#293793] w-[200px] text-[white] text-[14px]
                                font-medium hover:text-[#293793] hover:bg-[white] transition-all ease-linear hover:border-[#293793]">Profile
                        </button>
                    </router-link>
                </div>

                <div class="flex items-center justify-center">
                    <router-link to="/profile/changePassword">
                        <button class="border-[2px] px-3 py-3 rounded-xl bg-[#293793] w-[200px] text-[white] text-[14px]
                                font-medium hover:text-[#293793] hover:bg-[white] transition-all ease-linear hover:border-[#293793] mt-2">Change Password
                        </button>
                    </router-link>
                </div>
            </div>
            <!-- end of left side  -->

            <!-- main wrap -->
            <div class="h-[100%]">
                <!-- form wrap -->
                <!-- <div class="bg-blue-100 pt-20 px-2 pb-2 rounded-lg shadow-lg min-[320px]:mt-10 lg:mt-0"> -->

                    <!-- right-side  -->
                    <div class="flex h-[100%] md:px-20">

                        <div class="flex items-center justify-center w-full bg-white rounded-lg shadow-lg lg:px-40 md:px-10 sm:px-10 min-[320px]:px-10
                        lg:py-14 md:py-10 sm:py-10 min-[320px]:py-10">
                        
                            <Router-view></Router-view>

                        </div>

                    </div>
                    <!-- end of right side  -->

                <!-- </div> -->
                <!-- form wrap end end  -->
            </div>
            <!-- main wrap end  -->

        </div>
        <!-- main-container end  -->

    </div>
</template>

<script>
    export default {
        
    }
</script>