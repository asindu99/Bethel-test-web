<template>

    <div>
    
        <!-- form - 2  -->
        <div class="w-full bg-white rounded-lg p-8">
    
                        <div class="lg:mt-[-15px]">
    
                            <div class="flex flex-row ml-4">
                                <div>
                                    <img src="../../img/images/password-change.png" alt="" class="w-[50px] h-[50px]">
                                </div>
                                <div>
                                    <h1 class="font-['Montserrat'] text-[#293793] pl-8 text-2xl font-bold ml-[-20px]">Change Password</h1>
                                </div>
                            </div>
    
    
                            <form action="" class="min-[320px]:ml-[-60px]">
    
                                <div class="flex lg:flex-row min-[320px]:flex-col">
                                    <!-- Old password -->
                                    <div class="lg:m-10 lg:pl-10 min-[320px]:m-10 min-[320px]:pl-10">
                                        <label for="" class="font-['Montserrat'] text-[13px]">Old Password</label><br>
                                        <div class="flex flex-row">
                                            <input type="password" placeholder="  Old password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                        </div>
                                    </div>
    
                                    <!-- confirm password  -->
                                    <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                                        <label for="" class="font-['Montserrat'] text-[13px]">Confirm Password</label><br>
                                        <div class="flex flex-row">
                                            <input type="text" placeholder="  COnfirm password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                        </div>
                                    </div>
                                </div>
    
                                <div class="flex lg:flex-row min-[320px]:flex-col">
                                   
                                    <!-- new password  -->
                                    <div class="lg:mx-20 lg:mt-20 lg:mb-8 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10 lg:mt-[-20px]">
                                        <label for="" class="font-['Montserrat'] text-[13px]">New Password</label><br>
                                        <div class="flex flex-row">
                                            <input type="text" placeholder="  New password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                        </div>
                                    </div>
                                </div>
    
    
                                <!-- button  -->
                                <router-link to="/Mobile-Verification">
                                    <button class="font-['Montserrat' bg-[#293793] w-[250px] h-[40px] rounded-lg shadow-lg text-white opacity-85 lg:ml-20 min-[320px]:ml-20 transition duration-300 ease-in-out 
                                        hover:bg-[#293793] mt-[-200px] hover:text-[#293793] hover:bg-[white] hover:border-[#293793] border-[2px]">Change Password</button>
                                </router-link>
                            </form>
    
                        </div>
                                
        </div>
    
    </div>
    
    </template>
    
    <script>
        export default {
            
        }
    </script>
    