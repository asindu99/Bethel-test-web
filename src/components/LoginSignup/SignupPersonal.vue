<template>
    <div class="lg:h-[600px] lg:bg-[#FDFDFD] lg:basis-1/2 lg:rounded-r-xl">
        <div class="flex lg:flex-row lg:items-center lg:justify-center lg:ml-[-100px] lg:mt-[-20px]">

            <router-link to="/signup">
                <div class="flex lg:flex-row lg:cursor-pointer">
                    <div class="flex lg:items-center lg:justify-center bg-[#808080] lg:w-[50px] lg:h-[50px] lg:m-10 lg:rounded-md">
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
                <div class="flex lg:items-center lg:justify-center lg:bg-[#293793] lg:w-[50px] lg:h-[50px] lg:m-10 lg:rounded-md">
                    <span class="material-symbols-outlined text-white">
                        person
                    </span>
                </div>

                
                <div class="flex items-center">
                    <p class="lg:font-['Montserrat'] lg:text-[#293793]"><span class="lg:font-bold">Personal Information</span> <br> <span>Enter Information</span></p>
                </div>
            </div>
        </div>

        <div>
            <div class="lg:ml-[-80px]">
                <p class="lg:font-['Montserrat'] lg:ml-40"><span class=" lg:text-[20px] lg:font-bold">Personal Information</span><br><span class="lg:pt-[50px]">Enter information</span></p>
            </div>

            <div>
                <form action="" class="mt-[-30px]">
                    <div class="flex flex-row">
                        <!-- first name -->
                        <div class="lg:m-10 lg:pl-10">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">First name</label><br>
                            <input type="text" placeholder=" first name" class="lg:border-2 lg:border-[#4e78c0] lg:text-[D3D3D3] lg:bg-light lg:opacity-25 lg:w-[250px] lg:h-[40px] lg:rounded-md">
                        </div>

                        <!-- last name  -->
                        <div class="lg:m-10">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">Last name</label><br>
                            <input type="text" placeholder="  Last name" class="lg:border-2 lg:border-[#4e78c0] lg:text-[D3D3D3] lg:bg-light lg:opacity-25 lg:w-[250px] lg:h-[40px] lg:rounded-md">
                        </div>
                    </div>

                    <div class="flex flex-row lg:mt-[-20px]">
                        <!-- country  -->
                        <div class="lg:mx-10 lg:pl-10 lg:mb-10 ">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">Select country</label><br>
                            <select class="lg:border-2 lg:w-[250px] lg:h-[40px] lg:rounded-md lg:font-['Montserrat'] lg:text-[13px]">
                                <option value="Australia">Australia</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>

                        <!-- country-code  -->
                        <div class="lg:mx-10">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">Country code</label><br>
                            <input type="text" placeholder="   Country code" class="lg:border-2 lg:border-[#4e78c0] lg:text-[D3D3D3] lg:bg-light lg:opacity-25 lg:w-[250px] lg:h-[40px] lg:rounded-md" readonly>
                        </div>
                    </div>

                    <div class="flex flex-row lg:mt-[-20px] lg:mb-[20px]">
                        <!-- mobile  -->
                        <div class="lg:mx-[80px]">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">Mobile number</label><br>
                            <input type="text" placeholder="   Mobile number" class="lg:border-2 lg:border-[#4e78c0] lg:text-[D3D3D3] lg:bg-light lg:opacity-25 lg:w-[250px] lg:h-[40px] lg:rounded-md">
                        </div>
                    </div>

                    <!-- checkbox  -->
                    <div class="flex lg:items-center lg:ml-[80px] lg:mb-[20px]">
                        <input type="checkbox" class="lg:w-[18px] lg:h-[18px]">
                        <p class="lg:font-['Montserrat'] lg:text-[13px] lg:text-center lg:mt-[12px]"><span class="lg:pl-[10px]">I agree to the terms of Bethel</span> 
                            <a href="#" class="lg:text-[#293793] lg:cursor-pointer">Platform cloud terms of service , General terms of <br> service</a>
                            <span>and</span> <a href="#" class="lg:text-[#293793] lg:cursor-pointer">Privacy Policy</a>
                        </p>
                    </div>

                    <!-- button  -->
                    <router-link to="/Mobile-Verification">
                        <button class="lg:font-['Montserrat' lg:bg-[#293793] lg:w-[250px] lg:h-[40px] lg:rounded-md lg:shadow-xl lg:text-white lg:opacity-90 lg:ml-[80px] transition duration-300 ease-in-out 
                        hover:bg-[#293793]">Create Account
                        </button>
                    </router-link>
                </form>

                <div class="lg:mb-10 mx-10 lg:mt-[15px]">
                    <p class="lg:font-[montserrat] lg:text-[13px] lg:text-center lg:text-[14px]"> <span>Already have an account?</span> <router-link to="/login"><a href="#" class="lg:text-[#293793] lg:cursor-pointer">Sign in Instead</a></router-link></p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    
}
</script>