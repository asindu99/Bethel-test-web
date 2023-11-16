<template>
<div class="flex">

<!-- main container  -->
<div class="w-full lg:h-screen flex justify-center items-center 
lg:py-40 md:py-[10px] md:h-screen sm:p-10 min-[320px]:p-3 lg:px-20">

    <div class="lg:flex-row md:flex sm:flex-col-reverse min-[320px]:flex-col
     rounded-xl shadow-lg bg-white w-full ">
        <!-- login side left  -->

        <!-- <img class="w-[600px] lg:hidden md:hidden sm:hidden min-[320px]:flex sm:w-[300px]" src="../../../img/images/LoginSignup-page-images/BG-img-login2.jpg" alt=""> -->

        <div class="flex flex-1 lg:px-20 md:px-20 sm:px-20 min-[320px]:px-4
         lg:py-0 md:py-10 lg:w-[600px] lg:rounded-l-xl md:w-full
        min-[320px]:py-20 bg-blue-50">
            <!-- left side log in content -->
            <div class="flex flex-col items-start justify-center w-full">

                <div class="flex items-center justify-center w-full">
                    <img src="../../../img/logos/bethellogo.png" alt="" class="w-[80px]">
                </div>
                    <!-- TOP CAPTION SEC -->
                <div class="w-full mt-2 text-center ">
                    <h3 class="text-sidebarBG font-bold text-[25px]">Welcome to BETHEL!</h3>
                    <p class="text-[#757784] text-[14px]">Please sign in to the your account and start the adventure!</p>
                    <!-- <h3 class="text-[white] text-[14px] bg-bethelOrange p-2 mt-2 rounded-md">Please use Firefox Browser for Better Experience, support for other browsers will be made soon.</h3> -->
                </div>
                <!-- END OF TOP CAPTION SEC -->

                <!-- form section -->
                <div class="w-full mt-4">
                    <VeeForm
                    :validation-schema = "loginSchema"
                    @submit="onSubmit"
                     action="" class="flex flex-col pt-10 gap-y-5">
                        <div class="relative flex flex-col">
                            <vee-field autocomplete="off" id="email" name="email" type="email" class="w-full h-10 pl-2 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="email" />
							<label for="email" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Email :</label>
                        <!-- display error message -->
                        <ErrorMessage name="email" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                        </div>
                    
                        <div class="relative flex flex-col mt-8">
                            <vee-field autocomplete="off" id="password" name="password" type="password" class="w-full h-10 pl-2 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="password" />
							<label for="password" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Password :</label>
                            <!-- disply error message -->
                            
                            <ErrorMessage name="password" class="absolute text-[12px] text-red-500 bottom-[-22px]"/>
                        </div>

                        <div class="relative w-full mt-8">
                            <div v-if="authUserStore.logInWait" class="absolute top-2 right-[2%]">
                                <img src="../../../img/animationGIFs/Rolling.svg" alt="" class="w-[25px]">
                            </div>
                            <button  type="submit" class="w-full p-2 bg-sidebarBG rounded-lg px-10  text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out">Sign in</button>
                        </div>
                    </VeeForm>
                </div>
                <!-- end of the form sec -->

                <!-- new account creation -->
                <div class="relative w-full pb-10 mt-2 text-center">
                    <h3 class="text-[#999898] text-[14px]">New to our platform ? <router-link to="/signup"><span class="text-[#29379386]">Create an account</span></router-link> </h3>

                    <!-- error msg displaying if user name or pasword is invalid -->
                    <div :class="loginHide" v-if="!!authUserStore.logInFail" class="w-full fle justify-center absolute bottom-[-60px]">
                        <!-- err msg  -->
                        <div class="flex justify-center w-full p-3 rounded-md bg-bethelOrange ">
                            <h3 class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[11px] text-white">Invalid Email or Password! Please Try again..</h3>
                        </div>
                    </div>

                </div>

                <div class="flex justify-center w-full">
                <button @click="routerP" class=""><h3 class="text-sidebarBG text-[12px] mt-4 text-right">forgot password?</h3></button>

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
import router from '@/router/index';

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

            // hide the error msg on login fail
            loginHide : ''

        }
    },
    async mounted(){
        
        // save wallet details
        // localStorage.setItem('storageDetails', JSON.stringify(res3.data))
    },
    computed : {
        ...mapStores(authUser)
    },
    methods : {
        onSubmit(values){
            this.authUserStore.logInWait = true;
            this.authUserStore.logInFail = false;
            this.authUserStore.postLoginData(values);
            
            setTimeout(()=> {
                this.loginHide = 'hidden';
            },8000)
        },
        routerP(){
            router.push('/')
        }
    }
    
}
</script>

<style scoped>
input[type=password]:focus {
  border: 2px solid #5669cc ;
  border-radius: 10px;
}

input[type=email]:focus {
  border: 2px solid #5669cc ;
  border-radius: 10px;
}
</style>