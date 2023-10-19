<template>
    <!-- content section div -->
    <div class="p-3 flex bg-blue-100  items-center rounded-lg">
                <!-- content -->
                <div class="flex flex-col w-full px-3">
                    <!-- verify account -->
                    <div class="flex flex-col justify-center text-center mb-6">
                        <h3 class="lg:text-[30px] md:text-[30px] sm:text-[30px] min-[320px]:text-[18px] font-medium text-blue-400 ">Verify Account</h3>
                        <p class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[12px]">Please Select the Country to verify your account</p>
                    </div>

                    <!-- country selection sector -->
                    <div class="mt-6">
                        <form action="" class="flex flex-col items-center">
                            <label for="cars" class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[12px]">Choose Your Country :</label>

                                <select id="country" name="country" class="mt-2 w-[200px] p-2 mx-2 bg-transparent border-b-2 border-blue-300 rounded-md">
                                    <option value="volvo">Sri Lanka</option>
                                    <option value="saab">Australiya</option>
                                    <option value="fiat">France</option>
                                    <option value="audi">England</option>
                                </select>

                            <label for="cars" class="mt-6 lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[12px]">Enter the Mobile number :</label>
                            <input type="number" class="p-1 bg-transparent border-b-2 border-blue-300 mx-2">
                                
                            <router-link to="/Mobile-Verfication/Number-Verify">
                                <button type="submit" class="mt-4 border-2 p-1 bg-blue-300 rounded-md w-[100px]">Verify</button>
                            </router-link>

                        </form>
                    </div>
                    
                </div>
                <!-- end of the content -->
                <!---------- end of router view ----------->
    </div>
</template>

<script>
export default{
    name : 'VerifyComp'
}
</script>
