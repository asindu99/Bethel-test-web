<template>
    <!-- personal info form cont... -->

    <div class="flex justify-between w-full mt-4">
                    <!-- first name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">First Name :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                    <!-- last name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Last Name :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>
                </div>


                <div class="flex justify-between w-full mt-4">

                    <!-- Select country name -->
                    <div class="flex flex-col">
                        <label for="" class="text-[14px]">Select Country :</label>
                        <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                    </div>

                    <!-- last name -->
                    <div class="flex flex-col">
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

                <div class="flex justify-between w-full mt-4">

                    <!-- tos name -->
                    <div class="flex items-center gap-2">
                        <input type="checkbox" class="scale-[1.3]">
                        <label for="" class="text-[12px]">I agree to the terms of Bethel Platform cloud terms of service , General terms of service and Privacy Policy </label>
                    </div>

                </div>
</template>

<script>
export default{
    name : 'Signup-second'
}
</script>
