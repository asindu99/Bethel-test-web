<template>
    <!-- main container  -->
    <div class="w-full lg:h-screen flex justify-center items-center lg:py-40 md:py-[10px] md:h-screen sm:p-10 min-[320px]:p-3 lg:px-20 ">

    <div class="lg:flex-row md:flex sm:flex-col-reverse min-[320px]:flex-col rounded-xl shadow-lg bg-white w-full ">
        <!-- login side left  -->

        <!-- <img class="w-[600px] lg:hidden md:hidden sm:hidden min-[320px]:flex sm:w-[300px]" src="../../../img/images/LoginSignup-page-images/BG-img-login2.jpg" alt=""> -->

        <div class="flex flex-1 lg:px-20 md:px-20 sm:px-20 min-[320px]:px-4 lg:py-0 md:py-10 lg:w-[600px] lg:rounded-l-xl md:w-full min-[320px]:py-20 bg-blue-50 flex-col justify-center">
            
            <!---Bethel Icon-->
            <div class="flex items-center justify-center w-full px-20 mt-10">
                    <img src="../../../img/logos/bethellogo.png" alt="" class="w-[80px]">
            </div>
            
            <!----------Heading-->
            <div class="flex flex-col items-center lg:px-20 md:px-20 sm:px-10 min-[320px]:px-5">
                <h3 class="text-[35px] text-sidebarBG font-medium text-center">
                    Foget your Password?
                </h3>
                <h3 class="text-[14px] text-gray-600 text-center">
                    We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                </h3>
            </div>
            
            <!----Content section-->
            <div class="px-10 ">
                
                <!-------Email-field-------->
                <div class="relative mt-16">
                    <vee-field autocomplete="off" id="email" name="email" type="email" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="email" />
					<label for="email" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Email :</label>
                    <ErrorMessage name="email" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                </div>
                
                <!------button---->
                <div class="mt-10">
                    <a class="flex items-center justify-center w-full p-3 text-white rounded-md bg-sidebarBG">Reset Password</a>
                </div>
                
                <hr class="w-full">
                
                <!------Login----->
                <div class="mt-5 text-sm text-gray-600">
                    <!-- <RouterLink to=""><h3 class="text-center cursor-pointer hover:underline">Create an account!</h3></RouterLink> -->
                    <h3 class="text-center">Already have an account?<RouterLink to="/changePassword"><a class="cursor-pointer text-sidebarBG"> Login</a></RouterLink></h3>
                    
                </div>
            </div>
            
        </div>

        <!-- image side right -->
        <div class="lg:flex md:flex sm:flex min-[320px]:hidden lg:flex-1 justify-center items-center overflow-hidden w-full">
            <img class="lg:w-[800px] md:w-[400px] sm:w-[300px] md:pt-4" src="../../../img/images/LoginSignup-page-images/BG-img-login2.jpg" alt="">
        </div> 
        
    </div>
    

    </div>
<!-- end of the main container -->
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink }
}
</script>

<style lang="scss" scoped>

</style>