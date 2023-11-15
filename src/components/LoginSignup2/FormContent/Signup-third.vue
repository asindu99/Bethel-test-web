<template>
    <!-- top account information text section -->
    <div class="flex flex-col w-full lg:px-10 md:px-40 sm:px-10">
                    <h3 class="text-[20px] text-sidebarBG">Account Information</h3>
                    <h4 class="text-[14px] text-[#757784]">Enter Your email address and password details ! </h4>
    </div>

    <hr class="w-full mt-2">
    <VeeForm @submit="onReg" :validation-schema="signupSchema" class="mt-14">
            <!-- email div -->
            
                <div class="flex w-full justify-center mt-4 lg:flex-col md:flex-col sm:flex-col min-[320px]:flex-col  lg:px-10 md:px-40 sm:px-10 gap-y-10">
                    <!-- email div -->
                    <div class="relative flex flex-col">
                        <vee-field autocomplete="off" id="email" name="email" type="email" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="email" />
							<label for="email" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Email :</label>

                        <ErrorMessage name="email" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                    </div>

                    <!-- username password div -->
                    <div class="flex flex-col relative lg:mt-0 md:mt-0 sm:mt-4 min-[320px]:mt-5">
                        
                        <!-- <label for="" class="text-[14px]">User Name :</label>
                        <VeeField  name="username" type="text" class=" bg-transparent p-1 border-2 border-[#29379384] outline-none rounded-md lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px]"/> -->
                        
                        <vee-field autocomplete="off" id="username" name="username" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="username" />
							<label for="username" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">User Name :</label>
                    </div>
                    

                </div>

                <!-- password and confirm password section -->
                <div class="flex w-full justify-center mt-4 lg:flex-col md:flex-col sm:flex-col min-[320px]:flex-col  lg:px-10 md:px-40 sm:px-10  gap-y-10 pt-8">
                    <!-- password div -->
                    <div class="relative flex flex-col ">
                        <!-- <label for="" class="text-[14px]">Password :</label>
                        <VeeField  name="password" type="password" class=" bg-transparent p-1 border-2 border-[#29379384] outline-none rounded-md lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px]"/> -->

                        <div class="flex lg:flex-row md:flex-row sm:flex-row min-[320px]:flex-col gap-x-8 gap-y-12">
                            
                            <div class="relative flex flex-col">
                                <vee-field autocomplete="off" id="firstname" name="firstname" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="firstname" />
                                
							<label for="firstname" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">First Name :</label>
                            </div>
                            
                            <div class="relative flex flex-col">
                                <vee-field autocomplete="off" id="lastname" name="lastname" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="lastname" />
							<label for="lastname" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Last Name :</label>
                            </div>
                            
                        </div>
                        <!-- <vee-field autocomplete="off" id="password" name="password" type="password" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="password" />
							<label for="password" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Password :</label>
                        <ErrorMessage name="password" class="absolute text-[12px] text-red-500 bottom-[-20px]"/> -->
                    </div>

                    <!-- confirm password div -->
                    <div class="flex flex-col relative lg:mt-0 md:mt-0 sm:mt-4 min-[320px]:mt-4">
                        <!-- <label for="" class="text-[14px]">Confirm Password :</label>
                        <VeeField  name="confirm_password" type="password" class=" bg-transparent p-1 border-2 border-[#29379384] outline-none rounded-md lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px]"/> -->
                        
                         <!-- <vee-field autocomplete="off" id="username" name="username" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="username" />
							<label for="username" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">User Name :</label> -->
                            
                            <div class="flex lg:flex-row md:flex-row sm:flex-row min-[320px]:flex-col gap-x-8 gap-y-12">
                            
                                <div class="relative flex flex-col">
                                <vee-field autocomplete="off" id="password" name="password" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="password" />
							<label for="password" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Password :</label>
                                </div>
                            
                                <div class="relative flex flex-col">
                                    <vee-field autocomplete="off" id="confirm_password" name="confirm_password" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-b-2 border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="confirm_password" />
							<label for="confirm_password" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Confirm Password:</label>
                                </div>
                                
                        </div>
                    </div>

                </div>

                <!-- button div
                
                <div class="flex flex-col w-[200px] justify-center gap-2 mt-10">                              
                    <router-link to="/signup/personal">
                        <button @click="modalStore.toggleSignLog = false" type="submit" class="p-2 bg-sidebarBG rounded-lg px-10
                            text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG
                            transition-all ease-in-out ">Next Step</button>
                    </router-link>
                </div> -->

                <div class="flex flex-col justify-between w-full mt-4 lg:px-10 md:px-40 sm:px-10 gap-y-2">

                    <!-- tos name -->
                    <div class="relative flex items-center gap-2 mt-4">
                        <VeeField name="tos" type="checkbox" value="0" class="scale-[1.3]"/>
                        <ErrorMessage name="tos" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                        <label for="" class="text-[12px]">I agree to the terms of Bethel Platform cloud terms of service , General terms of service and Privacy Policy </label>
                    </div>

                    <!-- <router-link to="/mobile-verify"> -->
                    <div class="relative flex flex-col justify-between w-full mt-8">
                        <button type="submit" class=" bg-sidebarBG rounded-lg w-full p-2 text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out">Create Account</button>
                        
                    <div class="absolute lg:right-[28%] -bottom-4 min-[320px]:right-[14%] md:right-[28%] sm:right-[28%] ">
                        <h2 class="text-xs text-center text-gray-600">Already have an account?<RouterLink to="/"><a class="text-center cursor-pointer tet-xs text-sidebarBG"> Login</a></RouterLink></h2>
                    </div>
                    </div>
                    <!-- </router-link> -->
                    
                </div>
                

                
    </VeeForm>
                
</template>

<script >
import {mapStores} from 'pinia'
import useModalStore from "@/stores/modal"
import { authUser } from '@/stores/AuthUser'

export default{
    name : 'Signup-third',
    data(){
        return{
            signupSchema : {
                email: "required|min:3|max:100|email",
                password: "required|min:9|max:100",
                confirm_password: "passwords_mismatch:@password",
                tos: "tos",
            },
            selected : {},
    
        
        }
    },
    computed : {
        ...mapStores(useModalStore , authUser)
    },

    methods : {
        onReg(values){
            console.log(values)
            this.authUserStore.postAuthUserData(values);
        }
    }
      
}

</script>

<style scoped>

input[type=text]:focus {
  border: 2px solid #5669cc ;
  border-radius: 5px;
}

input[type=password]:focus {
  border: 2px solid #5669cc ;
  border-radius: 5px;
}

input[type=email]:focus {
  border: 2px solid #5669cc ;
  border-radius: 5px;
}



</style>
