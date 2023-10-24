<template>
    <!-- right-side  -->
    <div class="">
        <div class="rounded-r-xl pb-6">
        <div class="flex lg:flex-row min-[320px]:flex-col items-center justify-center lg:ml-[-100px] min-[320px]:ml-[-100px]">
            <router-link to="/signup">
                <div class="flex lg:flex-row cursor-pointer">
                    <div class="flex items-center justify-center bg-[#293793] w-[50px] h-[50px] m-10 rounded-md">
                        <span class="material-symbols-outlined text-white">
                            home
                        </span>
                    </div>

                    <div class="flex items-center lg:text-[16px] min-[320px]:text-[12px] min-[320px]:ml-[-20px] lg:ml-2">
                    
                        <p class="font-['Montserrat'] text-[#293793]"><span class="font-bold">Account Information</span> <br> <span>Enter username</span></p>
                    
                    </div>
                </div>
            </router-link>

            <router-link to="/signup/signup-personal">
                <div class="flex flex-row cursor-pointer lg:mt-1 min-[320px]:mt-[-50px]">
                    <div class="flex items-center justify-center bg-[#808080] w-[50px] h-[50px] m-10 rounded-md">
                        <span class="material-symbols-outlined text-white">
                            person
                        </span>
                    </div>

                    
                        <div class="flex items-center lg:text-[16px] min-[320px]:text-[12px] min-[320px]:ml-[-20px] lg:ml-2">
                            <p class="font-['Montserrat'] text-[#808080]"><span class="font-bold">Personal Information</span> <br> <span>Enter Information</span></p>
                        </div>
                </div>
            </router-link>
        </div>

        <div class="bg-blue-100 rounded-md pt-10 pb-[2px]">
            <div class="lg:ml-[-110px] min-[320px]:ml-[-125px]">
                <p class="font-['Montserrat'] ml-40"><span class="text-[20px] font-bold">Account Information</span><br><span class="pt-[50px] min-[320px]:text-[12px] lg:text-[13px]">Enter your email address & password details !</span></p>
            </div>

            <div class="">
                <form action="" class="min-[320px]:ml-[-30px]">
                    <!-- email  -->

                    <div class="lg:m-10 lg:pl-10 min-[320px]:m-10 min-[320px]:pl-10 ">
                        <label for="" class="font-['Montserrat'] text-[13px]">Email</label><br>
                        <input type="text" placeholder="  john@example.com" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 lg:w-[580px] h-[40px] min-[320px]:w-[250px] rounded-md">
                    </div>

                    <!-- password  -->
                    <div class="flex lg:flex-row min-[320px]:flex-col mt-[-60px]">
                        <!-- password  -->
                        <div class="lg:m-10 lg:pl-10 min-[320px]:m-10 min-[320px]:pl-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Password</label><br>
                            <div class="flex flex-row relative">
                                <input type="password" placeholder="  password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                
                                <div class="flex absolute lg:right-[15px] min-[320px]:right-[50px] p-[10px]">
                                    <img src="../../img/images/LoginSignup-page-images/visibility-lock.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- confirm password  -->
                        <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Confirm Password</label><br>
                            <div class="flex flex-row relative">
                                <input type="password" placeholder="  confirm password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                
                                <div class="flex absolute lg:right-[15px] min-[320px]:right-[90px] p-[10px]">
                                    <img src="../../img/images/LoginSignup-page-images/visibility-lock.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- button  -->
                    <router-link to="/signup/signup-personal">
                        <button class="font-['Montserrat' bg-[#293793] w-[250px] h-[40px] rounded-md shadow-lg text-white opacity-85 lg:ml-[410px] min-[320px]:ml-20 transition duration-300 ease-in-out 
                            hover:bg-[#293793]">Next Step</button>
                    </router-link>
                </form>

                <div class="m-8">
                    <p class="font-[montserrat] text-[13px] text-center text-[14px]"> <span>Already have an account?</span> <RouterLink to="/login"><a href="#" class="text-[#293793] cursor-pointer">Sign in Instead </a></RouterLink> </p>
                </div>
            </div>
        </div>


        </div>
     </div>
</template>

<script>
export default{
name : 'SignupAccount'
}
</script>
