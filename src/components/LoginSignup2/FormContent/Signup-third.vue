<template>
    <!-- top account information text section -->
    <div class="flex flex-col w-full mt-2">
                    <h3 class="text-[20px] text-[#293793]">Account Information</h3>
                    <h4 class="text-[14px] text-[#757784]">Enter Your email address and password details ! </h4>
                </div>

                <hr class="w-full mt-2">
        
                <!-- email div -->
                <div class="flex flex-col mt-8">
                    <label for="" class="text-[14px]">Email :</label>
                    <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                </div>

                <!-- password and confirm password section -->
                <div class="flex w-full justify-between gap-2 mt-4
                lg:flex-row md:flex-row sm:flex min-[320px]:flex-col">
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

                <!-- button div -->
                <router-link to="/login2/personal">
                    <div class="flex justify-between w-full mt-10">
                        <button class="p-2 bg-[#293793] rounded-lg px-10 text-white border-[1px] hover:bg-white hover:text-[#293793] hover:border-[1px] hover:border-[#293793] transition-all ease-in-out ">Next Step</button>
                    </div>
                </router-link>
</template>

<script >
export default{
    name : 'Signup-third'
}

</script>

<style lang="scss" scoped>

</style>