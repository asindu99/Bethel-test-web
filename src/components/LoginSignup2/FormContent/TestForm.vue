<template>
 <div class="lg:flex-row md:flex-row sm:flex min-[320px]:flex-col justify-between w-full mt-4 lg:gap-8">
                    <!-- first name -->
                    <div class="relative flex flex-col">
                        <!-- <label for="" class="text-[14px]">First Name :</label>
                        <VeeField name="FirstName" type="text" class="lg:w-[235px] md:w-[240px] text-[#757784] bg-transparent p-1 border-2 border-[#29379384] rounded-md lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px]"/> -->
                        
                        <ErrorMessage name="FirstName" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>

                    </div>

                    <!-- last name -->
                    <div class="flex flex-col min-[320px]:mt-4 lg:mt-0 md:mt-0 sm:mt-4 relative">
                        <!-- <label for="" class="text-[14px]">Last Name :</label>
                        <VeeField name="LastName" type="text" class="lg:w-[235px] text-[#757784] bg-transparent p-1 border-2 border-[#29379384] outline-1 rounded-md lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px]"/> -->
                        <ErrorMessage name="LastName" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>

                    </div>
                </div>


                <div class="justify-between w-full mt-4 lg:flex-row md:flex-row sm:flex min-[320px]:flex-col lg:gap-8">

                    <!-- Select country name -->
                    <div  class="flex flex-col">
                        <label for="" class="text-[14px]">Select Country :</label>
                        <!-- <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none"> -->

                        <vee-field as="select" name="country" v-model="selected" class="text-[#757784] bg-transparent p-2 border-2 border-[#29379384]  lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px] rounded-md">
                            <option v-for="country in countryList" :value="country.Name" class="w-[200px] bg-transparent">
                                {{ country.Name }}
                            </option>
                        </vee-field>

                        
                    </div>

                    <!-- last name -->
                    <div  class="flex flex-col min-[320px]:mt-4 lg:mt-0 md:mt-0 sm:mt-4">
                        <label for="" class="text-[14px]">Country Code :</label>

                        <VeeField as="select"  name="code" class="text-[#757784] bg-transparent p-2 border-2 border-[#29379384]  lg:w-[235px] md:w-[238px] min-[320px]:w-full w-[340px] rounded-md">
                            <option v-for="code in countryList" :value="code.MobileCode" class="w-[200px] bg-transparent">
                                {{ code.MobileCode }}
                            </option>
                        </VeeField>
                        <!-- <input type="text" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384] outline-none"> -->
                    </div>

                </div>


                <div class="flex justify-between w-full mt-2">

                    <!-- first name -->
                    <div class="relative flex flex-col w-full mt-2">
                        <label for="" class="text-[14px]">Mobile Number :</label>
                        <VeeField name="mobile" type="Number" class="text-[#757784] bg-transparent p-1 border-2 border-[#29379384]
                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md"/>
                        <ErrorMessage name="mobile" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                    </div>

                </div>

                <div class="flex flex-col justify-between w-full mt-2">

                    <!-- tos name -->
                    <div class="relative flex items-center gap-2 mt-4">
                        <VeeField name="tos" type="checkbox" value="0" class="scale-[1.3]"/>
                        <ErrorMessage name="tos" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
                        <label for="" class="text-[12px]">I agree to the terms of Bethel Platform cloud terms of service , General terms of service and Privacy Policy </label>
                    </div>

                    <!-- <router-link to="/mobile-verify"> -->
                    <div class="flex justify-between w-full mt-4">
                        <button type="submit" class="p-2 bg-sidebarBG rounded-lg px-10  text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out">Create Account</button>
                    </div>
                    <!-- </router-link> -->
                </div>
                
                
                
                <!------------------------>
                <vee-field autocomplete="off" id="username" name="username" type="text" class="w-full h-10 text-gray-900 placeholder-transparent border-2 rounded-md outline-none border-sidebarBG bg-blue-50 focus:outline-none focus:borer-rose-600" placeholder="User name " />
							<label for="username" class="absolute left-0 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User Name : </label>
                        <ErrorMessage name="name" class="absolute text-[12px] text-red-500 bottom-[-20px]"/>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>