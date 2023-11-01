<template>
    <!-- top account information text section -->
    <div class="flex flex-col w-full mt-2">
                    <h3 class="text-[20px] text-sidebarBG">Account Information</h3>
                    <h4 class="text-[14px] text-[#757784]">Enter Your email address and password details ! </h4>
                </div>

                <hr class="w-full mt-2">
        <VeeForm @submit="onReg"
        :validation-schema="signupSchema">
            <!-- email div -->
                <div class="flex flex-col mt-8 relative">
                    <label for="" class="text-[14px]">Email :</label>
                    <VeeField ref="anyName" name="email" type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none"/>

                    <ErrorMessage name="email" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                </div>

                <!-- password and confirm password section -->
                <div class="flex w-full justify-between gap-2 mt-10
                lg:flex-row md:flex-row sm:flex min-[320px]:flex-col">
                    <!-- password div -->
                    <div class="flex flex-col relative">
                        <label for="" class="text-[14px]">Password :</label>
                        <VeeField  name="password" type="password" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none"/>

                        <ErrorMessage name="password" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                    </div>

                    <!-- confirm password div -->
                    <div class="flex flex-col relative lg:mt-0 md:mt-0 sm:mt-2 min-[320px]:mt-5">
                        <label for="" class="text-[14px]">Confirm Password :</label>
                        <VeeField  name="confirm_password" type="password" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none"/>
                        <ErrorMessage name="confirm_password" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                    </div>

                </div>

                <!-- button div -->
                
                    <div class="flex flex-col w-[200px] justify-center gap-2 mt-10">                              
                        <router-link to="/signup/personal">
                            <button type="submit" class="p-2 bg-sidebarBG rounded-lg px-10
                             text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG
                              transition-all ease-in-out ">Next Step</button>
                        </router-link>
                    </div>
                
        </VeeForm>
                
</template>

<script >
export default{
    name : 'Signup-third',
    data(){
        return{
            signupSchema : {
                email: "required|min:3|max:100|email",
                password: "required|min:9|max:100",
                confirm_password: "passwords_mismatch:@password",
            },
        }
    },
    methods : {
        onReg(values){
            console.log(values)
            this.$refs.anyName.reset();
        }
    }
      
}

</script>
