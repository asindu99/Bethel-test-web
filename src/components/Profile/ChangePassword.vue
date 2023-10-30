<template>
    <!-- change password info form cont... -->

<div class="px-8 lg:py-14 min-[320px]:py-4 lg:mt-[-70px]">
    <!-- change passowrd information div -->
    <div class="flex flex-col w-full mt-10 lg:justify-start min-[320px]:items-center">
        <h1 class="text-[20px] text-[#293793] font-bold">Change Password</h1>
    </div>

    <hr class="w-full lg:mt-10 md:mt-2 sm:mt-2 min-[320px]:mt-2">

    <div class="lg:flex-row md:flex-row sm:flex min-[320px]:flex-col justify-between w-full mt-8">


        <!-- old password -->
        <div class="flex flex-col mr-2">
            <label for="" class="text-[14px]">Old Password :</label>
            <input type="password" class="lg:w-[460px] md:w-[240px] text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384]">
        </div>


    </div>


    <div class="flex justify-between w-full mt-8 lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col">

        <!-- new password -->
        <div class="flex flex-col min-[320px]:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mr-2">
            <label for="" class="text-[14px]">New Password :</label>
            <input type="password" class="lg:w-[235px] text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-1 ">
        </div>
        <!-- confirm password -->
        <div class="flex flex-col min-[320px]:mt-2 lg:mt-0">
            <label for="" class="text-[14px]">Confirm Password :</label>
            <input type="password" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] w-[235px] 
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ">
        </div>

    </div>

    <div class="flex flex-col justify-between w-full mt-12">

        <router-link to="">
            <div class="flex justify-between w-full mt-4">
                <button class="p-2 bg-[#293793] rounded-lg px-10  text-white border-[1px] hover:bg-white hover:text-[#293793] hover:border-[1px] hover:border-[#293793] transition-all ease-in-out ">Change Password</button>
            </div>
        </router-link>
    </div>
</div>
</template>

<script>
export default{
name : 'ChangePassword',
}
</script>
