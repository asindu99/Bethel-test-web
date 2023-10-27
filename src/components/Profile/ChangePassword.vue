<template>

    <div>
    
        <!-- form - 2  -->
    
            <div class="">
    
                <div class="flex flex-row items-start">
                                <div>
                                    <img src="../../img/images/password-change.png" alt="" class="w-[35px] h-[35px]">
                                </div>
                                <div class="px-2">
                                    <h1 class="font-['Montserrat'] text-[#293793] text-2xl font-bold">Change Password</h1>
                                </div>
                </div>
    
    
                <form action="" class="flex flex-col p-8">

                    <div class="flex lg:flex-row lg:justify-start min-[320px]:justify-start md:justify-start sm:justify-start">
                                   
                        <!-- new password  -->
                        <div class="">
                                       <label for="" class="font-['Montserrat'] text-[13px]">Old Password</label><br>
                                       <div class="flex flex-row">
                                           <input type="password" placeholder="     Old password" class="lg:w-[500px] border-2 border-[#4e78c0] text-[#293793] h-[30px] bg-light opacity-50 rounded-md">
                                       </div>
                        </div>
                    </div>
    
                    <div class="flex lg:flex-row min-[320px]:flex-col lg:items-center lg:justify-center min-[320px]:justify py-8">
                        <!-- Old password -->
                        <div class="pr-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">New Password</label><br>
                            <div class="flex flex-row">
                                <input type="password" placeholder="  New password" class="border-2 border-[#4e78c0] text-[#293793] h-[30px] bg-light opacity-50 rounded-md">
                            </div>
                        </div>
    
                        <!-- confirm password  -->
                        <div class="min-[320px]:pt-8 lg:pt-0">
                            <label for="" class="font-['Montserrat'] text-[13px]">Confirm Password</label><br>
                            <div class="flex flex-row">
                                <input type="password" placeholder="  COnfirm password" class="border-2 border-[#4e78c0] text-[#293793] h-[30px] bg-light opacity-50 rounded-md">
                            </div>
                        </div>
                    </div>
    
    
                    <!-- button  -->
                    <div class="flex items-center pt-4">
                        <router-link to="/Mobile-Verification">
                            <button class="font-['Montserrat'] w-[230px] h-[40px] bg-[#293793] rounded-lg shadow-lg text-white opacity-85 transition duration-300 ease-in-out 
                            hover:bg-[#293793] hover:text-[#293793] hover:bg-[white] hover:border-[#293793] border-[2px]">Change Password</button>
                        </router-link>
                    </div>
                </form>
    
            </div>

        <!-- form - 2  end  -->
                            
    
    </div>
    
    </template>
    
    <script>
        export default {
            
        }
    </script>
    