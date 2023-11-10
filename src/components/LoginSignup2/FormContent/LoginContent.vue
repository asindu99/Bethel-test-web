<template>
<div class="flex">

<!-- main container  -->
<div class="w-full lg:h-screen flex justify-center items-center 
lg:p-20 md:py-[10px] md:h-screen sm:p-10 min-[320px]:p-3 ">

    <div class="lg:flex-row md:flex sm:flex-col-reverse min-[320px]:flex-col
     rounded-xl shadow-lg bg-white w-full">
        <!-- login side left  -->

        <img class="w-[600px] lg:hidden md:hidden sm:hidden min-[320px]:flex sm:w-[300px]" src="../../../img/images/LoginSignup-page-images/BG-img-login2.jpg" alt="">

        <div class="flex flex-1 px-20 lg:py-20 md:py-5 lg:w-[600px] lg:rounded-l-xl md:w-full
        min-[320px]:py-10 bg-blue-50">
            <!-- left side log in content -->
            <div class="flex flex-col w-full items-start justify-center">

                <div class="w-full flex items-center justify-center">
                    <img src="../../../img/logos/bethellogo.png" alt="" class="w-[80px]">
                </div>
                    <!-- TOP CAPTION SEC -->
                <div class="w-full text-center mt-2">
                    <h3 class="text-sidebarBG font-bold text-[25px]">Welcome to the BETHEL!</h3>
                    <p class="text-[#757784] text-[14px]">Please sign in to the your account and start the adventure!</p>
                    <h3 class="text-[white] text-[14px] bg-bethelOrange p-2 mt-2 rounded-md">Please use Firefox Browser for Better Experience, support for other browsers will be made soon.</h3>
                </div>
                <!-- END OF TOP CAPTION SEC -->

                <!-- form section -->
                <div class="mt-4 w-full">
                    <VeeForm
                    :validation-schema = "loginSchema"
                    @submit="onSubmit"
                     action="" class="flex flex-col">
                        <div class="flex flex-col relative">
                            <label for="" class="text-[14px]">Email :</label>
                            <VeeField name="email" type="text" placeholder="Jhon@example.com" class="text-[#757784] bg-transparent p-1 border-2 border-[#29379384]
                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md"/>
                        <!-- display error message -->
                        <ErrorMessage name="email" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                        </div>
                    
                        <div class="flex flex-col mt-8 relative">
                            <label for="" class="text-[14px]">Password :</label>
                            <VeeField name="password" type="password" placeholder="Password"
                            class=" text-[#757784] bg-transparent p-1 border-2 border-[#29379384]
                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md"/>
                            <!-- disply error message -->
                            <button class=""><h3 class="text-sidebarBG text-[12px] mt-4 text-right">forgot password?</h3></button>
                            <ErrorMessage name="password" class="absolute text-[12px] text-red-500 bottom-[15px]"/>
                        </div>

                        <div class="w-full mt-8">
                            <button  type="submit" class="w-full p-2 bg-sidebarBG rounded-lg px-10  text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out">Sign in</button>
                        </div>
                    </VeeForm>
                </div>
                <!-- end of the form sec -->

                <!-- new account creation -->
                <div class="w-full text-center mt-2">
                    <h3 class="text-[#999898] text-[14px]">New to our platform ? <router-link to="/signup"><span class="text-[#29379386]">Create an account</span></router-link> </h3>
                </div>

            </div>
            <!-- end of the left side content -->
        
        </div>



        <!-- image side right -->
        <div class="lg:flex md:flex sm:flex min-[320px]:hidden lg:flex-1 justify-center items-center overflow-hidden w-full">
            <img class="lg:w-[800px] md:w-[400px] sm:w-[300px] md:pt-4" src="../../../img/images/LoginSignup-page-images/BG-img-login2.jpg" alt="">
        </div> 
    </div>
    

</div>
<!-- end of the main container -->

</div>
</template>

<script>
import {mapStores} from 'pinia'
import { authUser } from '@/stores/AuthUser';
import axios from 'axios';
import router from '@/router/index'

export default{
    name : 'LoginContent',
    data(){
        return{
            loginSchema: {
                email: "required|email",
                password: "required",
            },

            // logindetails array
            loginDetailsArr : [],

        }
    },
    async mounted(){
        

    },
    computed : {
        ...mapStores(authUser)
    },
    methods : {
        onSubmit(values){
            this.authUserStore.postLoginData(values);
        }
    }
    
}
</script>
