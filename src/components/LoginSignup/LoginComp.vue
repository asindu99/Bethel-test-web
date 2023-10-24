<template>
    <div class="flex h-auto lg:mt-16 md:mt-6 sm:mt-2 min-[320px]:mt-2 justify-center items-center">
        <!-- main container div -->
        <div class="flex lg:flex-row md:flex-col p-2 sm:flex-col min-[320px]:flex-col border-2 bg-white shadow-lg rounded-xl mx-8">

            <!-- image sec -->
            <div class="">
                <img src="src/img/images/LoginSignup-page-images/bg-login1.jpg" alt="" class="lg:w-[500px] lg:h-full
                 md:w-[500px] min-[320px]:w-[500px] lg:scale-[0.9] min-[320px]:scale-[0.8] bg-opacity-25">
            </div>
            
            <div class="relative p-3 flex bg-blue-50  items-center rounded-lg">

                <!-- content -->
                <div class="flex flex-col w-full px-3">
                    <div class="flex flex-row lg:mt-[-20px]">
                        <img src="../../img/logos/bethellogo.png" alt="" class="w-[30px] h-[30px] ml-[80px] mt-[20px]">
                        <span class="font-bold text-xl mt-[20px] font-['Montserrat']">BETHEL</span>
                    </div>

                    <div class="mt-8">
                        <form action="" class="flex flex-col ">

                            <!-- email  -->
                            <label for="" class="font-['Montserrat'] text-[13px]">Email</label>
                            <input type="text" placeholder="  john@example.com" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 p-1 rounded-md">
                    
                            <!-- password -->
                            <label for="" class="font-['Montserrat'] text-[13px] mt-6">Password</label>
                            <div class="flex flex-row relative">
                                <input type="password" placeholder="  password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 p-1 rounded-md lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-[350px]">
                                        
                                        <!-- <div class="flex absolute lg:right-[100px] min-[320px]:right-[100px] p-[10px]">
                                            <img src="../../img/images/LoginSignup-page-images/visibility-lock.svg" alt="">
                                        </div> -->
                            </div>
                            
                            <!-- button  -->
                            <router-link to="/"><button type="submit" class="mt-4 border-2 p-2 bg-[#293793] rounded-md w-[350px] text-white text-[14px]">Sign In</button></router-link>

                            <!-- checkbox  -->
                            <div class="p-4">
                                    <input type="checkbox" class="p-10">
                                    <span class="font-['Montserrat'] text-[13px] lg:text-center lg:pl-4 min-[320px]:pl-4">Accept Terms & Conditions*</span>
                            </div>
                        </form>

                        <div class="p-6">
                            <p class="font-[montserrat] text-[13px] lg:text-center min-[320px]:text-center"> <span>New on our platform?</span> <RouterLink to="/signup" class="text-[#293793] cursor-pointer ">Create an account</RouterLink> </p>
                        </div>
                    </div>
                    
                </div>
    </div>

        </div>
    </div>
</template>

<script>
export default {
    name : 'LoginComp'
}
</script>
