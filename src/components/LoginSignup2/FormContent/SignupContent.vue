<template>
    <div class="w-full h-full lg:px-10 justify-center items-center flex flex-col">

        <!-- bethel logo div -->
    <div class="flex md:items-center lg:justify-start md:justify-center w-full gap-1">
        <img class="w-[30px]" src="../../../img/logos/bethellogo.png" alt="">
        <h3 class="text-[#293793] font-medium ">BETHEL</h3>
    </div>

        <!-- top account information text section -->
        <div class="flex flex-col w-full mt-2">
            <h3 class="text-[20px] text-[#293793]">Account Information</h3>
            <h4 class="text-[14px] text-[#757784]">Enter Your email address and password details ! </h4>
        </div>

        <hr class="w-full mt-2">

        <!-- form section -->
        <div class="w-full mt-4">
            <form action="">
                <!-- email div -->
                <div class="flex flex-col">
                    <label for="" class="text-[14px]">Email :</label>
                    <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                </div>

                <!-- password and confirm password section -->
                <div class="flex w-full justify-between gap-2 mt-4">
                    <!-- password div -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Password :</label>
                        <input :type="password" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">

                    </div>

                    <!-- confirm password div -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Confirm Password :</label>
                        <input :type="password" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                </div>

                <!-- personal information div -->
                <div class="flex flex-col w-full mt-8">
                    <h3 class="text-[20px] text-[#293793]">Personal Information</h3>
                    <h4 class="text-[14px] text-[#757784]">Enter Your personal details ! </h4>
                </div>

                <hr class="w-full mt-2">


                <!-- button div -->
                <div class="flex justify-between w-full mt-4">
                    <button class="p-2 bg-[#293793] rounded-lg px-4 text-white">Create Account</button>
                </div>

                <SignupSecond/>


            </form>
        </div>

        

    </div>
</template>

<script>
import SignupSecond from '@/components/LoginSignup2/FormContent/Signup-second.vue';

export default{
    name : 'SignupContent',
    components : {
        SignupSecond,
    },
    data(){
        return{
            password : 'password'
        }
    }
}
</script>
