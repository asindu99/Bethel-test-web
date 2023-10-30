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

                <!-- left side -->
                <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col">
                <div class="flex items-center justify-center lg:pl-[-150px] lg:mr-2">
                    <router-link to="/profile/profileEdit">
                        <button class="border-[2px] px-1 py-2 rounded-xl hover:bg-[#293793] w-[160px] hover:text-[white] text-[14px]
                                font-medium text-[#293793] bg-[white] transition-all ease-linear border-[#293793]">Profile
                        </button>
                    </router-link>
                </div>

                <div class="flex items-center justify-center">
                    <router-link to="/profile/changePassword">
                        <button class="border-[2px] px-1 py-2 rounded-xl hover:bg-[#293793] w-[160px] hover:text-[white] text-[14px]
                                font-medium text-[#293793] bg-[white] transition-all ease-linear border-[#293793]">Change Password
                        </button>
                    </router-link>
                </div>
                </div>
                <!-- end of left side  -->
            </div>
        </div>
        <!-- header-end  -->

        <!-- main-container  -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col pt-8 lg:items-center lg:justify-center
        md:items-center md:justify-center sm:items-center sm:justify-center min-[320px]:items-center min-[320px]:justify-center">

            <!-- main wrap -->
            <div class="h-[100%] px-4 mt-4">

                    <!-- right-side  -->
                    <div class="flex h-[100%]">

                        <div class="bg-white rounded-2xl shadow-xl py-4 px-10">
                        
                            <Router-view></Router-view>

                        </div>

                    </div>
                    <!-- end of right side  -->
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