<template>
    <!-- personal info form cont... -->

    <!-- personal information div -->
    <div class="flex flex-col w-full mt-8">
                    <h3 class="text-[20px] text-[#293793]">Personal Information</h3>
                    <h4 class="text-[14px] text-[#757784]">Enter Your personal details ! </h4>
                </div>

                <hr class="w-full mt-2">

    <div class="lg:flex-row md:flex-row sm:flex min-[320px]:flex-col justify-between w-full mt-10">

        
                    <!-- first name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">First Name :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                    <!-- last name -->
                    <div class="flex flex-col min-[302px]:mt-4 lg:mt-0 md:mt-0 sm:mt-0">
                        <label for="" class="text-[14px]">Last Name :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>
                </div>


                <div class="justify-between w-full mt-4 lg:flex-row md:flex-row sm:flex min-[320px]:flex-col">

                    <!-- Select country name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Select Country :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                    <!-- last name -->
                    <div class="flex flex-col min-[302px]:mt-4 lg:mt-0 md:mt-0 sm:mt-0">
                        <label for="" class="text-[14px]">Country Code :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                </div>


                <div class="flex justify-between w-full mt-4">

                    <!-- first name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Mobile Number :</label>
                        <input type="number" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                </div>

                <div class="flex flex-col justify-between w-full mt-4">

                    <!-- tos name -->
                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="scale-[1.3]">
                        <label for="" class="text-[12px]">I agree to the terms of Bethel Platform cloud terms of service , General terms of service and Privacy Policy </label>
                    </div>

                    <router-link to="/mobile-verify">
                    <div class="flex justify-between w-full mt-7">
                        <button class="p-2 bg-[#293793] rounded-lg px-10 text-white">Create Account</button>
                    </div>
                    </router-link>
                </div>
</template>

<script>
export default{
    name : 'Signup-second'
}
</script>
