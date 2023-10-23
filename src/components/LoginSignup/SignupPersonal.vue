<template>
    <div class="w-full h-[600px] basis-1/2 rounded-r-xl">
        <div class="flex flex-row items-center justify-center ml-[-100px] mt-[-20px]">

            <router-link to="/signup">
                <div class="flex flex-row cursor-pointer">
                    <div class="flex items-center justify-center bg-[#808080] w-[50px] h-[50px] m-10 rounded-md">
                        <span class="material-symbols-outlined text-white">
                            home
                        </span>
                    </div>

                    <div class="flex items-center">
                        <p class="font-['Montserrat'] text-[#808080]"><span class="font-bold">Account Information</span> <br> <span>Enter username</span></p>
                    </div>
                </div>
            </router-link>

            <div class="flex lg:flex-row lg:cursor-pointer">
                <div class="flex items-center justify-center bg-[#293793] w-[50px] h-[50px] m-10 rounded-md">
                    <span class="material-symbols-outlined text-white">
                        person
                    </span>
                </div>

                
                <div class="flex items-center">
                    <p class="font-['Montserrat'] text-[#293793]"><span class="lg:font-bold">Personal Information</span> <br> <span>Enter Information</span></p>
                </div>
            </div>
        </div>

        <div class="bg-blue-100 pt-6 mt-[-20px]">
            <div class="lg:ml-[-80px]">
                <p class="font-['Montserrat'] lg:ml-40 sm:ml-20"><span class="text-[20px] font-bold">Personal Information</span><br><span class="lg:pt-[50px]">Enter information</span></p>
            </div>

            <div class="">
                <form action="" class="mt-[-30px]">
                    <div class="flex flex-row">
                        <!-- first name -->
                        <div class="m-10 pl-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">First name</label><br>
                            <input type="text" placeholder=" first name" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                        </div>

                        <!-- last name  -->
                        <div class="m-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Last name</label><br>
                            <input type="text" placeholder="  Last name" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                        </div>
                    </div>

                    <div class="flex flex-row mt-[-20px]">
                        <!-- country  -->
                        <div class="mx-10 pl-10 mb-10 ">
                            <label for="" class="font-['Montserrat'] text-[13px]">Select country</label><br>
                            <select class="border-2 w-[250px] h-[40px] rounded-md font-['Montserrat'] text-[13px] bg-light opacity-25 border-2 border-[#4e78c0] ">
                                <option value="Australia">Australia</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>

                        <!-- country-code  -->
                        <div class="mx-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Country code</label><br>
                            <input type="text" placeholder="   Country code" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md" readonly>
                        </div>
                    </div>

                    <div class="flex flex-row mt-[-20px] mb-[20px]">
                        <!-- mobile  -->
                        <div class="mx-[80px]">
                            <label for="" class="font-['Montserrat'] text-[13px]">Mobile number</label><br>
                            <input type="text" placeholder="   Mobile number" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                        </div>
                    </div>

                    <!-- checkbox  -->
                    <div class="flex items-center ml-[80px] mb-[20px]">
                        <input type="checkbox" class="w-[18px] h-[18px]">
                        <p class="font-['Montserrat'] text-[13px] text-center mt-[12px]"><span class="pl-[10px]">I agree to the terms of Bethel</span> 
                            <a href="#" class="text-[#293793] cursor-pointer">Platform cloud terms of service , General terms of <br> service</a>
                            <span>and</span> <a href="#" class="text-[#293793] cursor-pointer">Privacy Policy</a>
                        </p>
                    </div>

                    <!-- button  -->
                    <router-link to="/Mobile-Verification">
                        <button class="font-['Montserrat' bg-[#293793] w-[250px] h-[40px] rounded-md shadow-xl text-white opacity-90 ml-[80px] transition duration-300 ease-in-out 
                        hover:bg-[#293793]">Create Account
                        </button>
                    </router-link>
                </form>

                <div class="mb-10 mx-10 mt-[15px] pb-4">
                    <p class="font-[montserrat] text-[13px] text-center text-[14px]"> <span>Already have an account?</span> <router-link to="/login"><a href="#" class="text-[#293793] cursor-pointer">Sign in Instead</a></router-link></p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name:"SignupPersonal",
        
    }
</script>