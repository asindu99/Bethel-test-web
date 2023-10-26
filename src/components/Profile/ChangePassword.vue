<template>

    <div>
    
        <!-- form - 2  -->
    
            <div class="lg:mt-[-15px] pb-[50px]">
    
                            <div class="flex flex-row ml-4 pt-8">
                                <div>
                                    <img src="../../img/images/password-change.png" alt="" class="w-[35px] h-[35px]">
                                </div>
                                <div>
                                    <h1 class="font-['Montserrat'] text-[#293793] pl-8 text-2xl font-bold ml-[-20px]">Change Password</h1>
                                </div>
                            </div>
    
    
                            <form action="" class="min-[320px]:ml-[-60px]">

                                <div class="flex lg:flex-row min-[320px]:flex-col">
                                   
                                   <!-- new password  -->
                                   <div class="lg:mx-20 lg:mb-[-5px] lg:mt-10 min-[320px]:mt-8 min-[320px]:ml-20 min-[320px]:mb-10">
                                       <label for="" class="font-['Montserrat'] text-[13px]">Old Password</label><br>
                                       <div class="flex flex-row">
                                           <input type="password" placeholder="     Old password" class="border-2 border-[#4e78c0] text-[#293793] bg-light opacity-50 w-[580px] h-[40px] rounded-md">
                                       </div>
                                   </div>
                               </div>
    
                                <div class="flex lg:flex-row min-[320px]:flex-col">
                                    <!-- Old password -->
                                    <div class="lg:m-10 lg:pl-10 min-[320px]:m-10 min-[320px]:pl-10 min-[320px]:mt-[-10px]">
                                        <label for="" class="font-['Montserrat'] text-[13px]">New Password</label><br>
                                        <div class="flex flex-row">
                                            <input type="password" placeholder="  New password" class="border-2 border-[#4e78c0] text-[#293793] bg-light opacity-50 w-[250px] h-[40px] rounded-md">
                                        </div>
                                    </div>
    
                                    <!-- confirm password  -->
                                    <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                                        <label for="" class="font-['Montserrat'] text-[13px]">Confirm Password</label><br>
                                        <div class="flex flex-row">
                                            <input type="password" placeholder="  COnfirm password" class="border-2 border-[#4e78c0] text-[#293793] bg-light opacity-50 w-[250px] h-[40px] rounded-md">
                                        </div>
                                    </div>
                                </div>
    
    
                                <!-- button  -->
                                <router-link to="/Mobile-Verification">
                                    <button class="font-['Montserrat' bg-[#293793] w-[250px] h-[45px] rounded-lg shadow-lg text-white opacity-85 lg:ml-20 min-[320px]:ml-20 transition duration-300 ease-in-out 
                                        hover:bg-[#293793] hover:text-[#293793] hover:bg-[white] hover:border-[#293793] border-[2px]">Change Password</button>
                                </router-link>
                            </form>
    
            </div>

        <!-- form - 2  end  -->
                            
    
    </div>
    
    </template>
    
    <script>
        export default {
            
        }
    </script>
    