<template>
    <!-- right-side  -->
    <div class="">
        <div class="rounded-r-xl pb-6">
        <div class="flex lg:flex-row min-[320px]:flex-col items-center justify-center lg:ml-[-100px] min-[320px]:ml-[-70px]">
            <router-link to="/">
                <div class="flex lg:flex-row cursor-pointer">
                    <div class="flex items-center justify-center bg-[#293793] w-[50px] h-[50px] m-10 rounded-md">
                        <!-- <img src="./img/home.svg" alt="" class=""> -->
                        <span class="material-symbols-outlined text-white">
                            home
                        </span>
                    </div>

                    <div class="flex items-center lg:text-[16px] min-[320px]:text-[12px] min-[320px]:ml-[-20px] lg:ml-2">
                    
                        <p class="font-['Montserrat'] text-[#293793]"><span class="font-bold">Account Information</span> <br> <span>Enter username</span></p>
                    
                    </div>
                </div>
            </router-link>

            <router-link to="/signup/signup-personal">
                <div class="flex flex-row cursor-pointer min-[320px]:mt-[-40px] lg:mt-1 ">
                    <div class="flex items-center justify-center bg-[#808080] w-[50px] h-[50px] m-10 rounded-md">
                        <!-- <img src="./img/home.svg" alt="" class=""> -->
                        <span class="material-symbols-outlined text-white">
                            person
                        </span>
                    </div>

                    
                        <div class="flex items-center lg:text-[16px] min-[320px]:text-[12px] min-[320px]:ml-[-20px] lg:ml-2">
                            <p class="font-['Montserrat'] text-[#808080]"><span class="font-bold">Personal Information</span> <br> <span>Enter Information</span></p>
                        </div>
                </div>
            </router-link>
        </div>

        <div class="bg-blue-100 rounded-md pt-10 pb-[2px]">
            <div class="lg:ml-[-105px] min-[320px]:ml-[-115px]">
                <p class="font-['Montserrat'] ml-40"><span class="text-[20px] font-bold">Personal Information</span><br><span class="pt-[50px] min-[320px]:text-[12px] lg:text-[13px]">Enter Information !</span></p>
            </div>

            <div class="lg:mt-[-15px]">
                <form action="" class="min-[320px]:ml-[-30px]">

                    <div class="flex lg:flex-row min-[320px]:flex-col">
                        <!-- first name -->
                        <div class="lg:m-10 lg:pl-10 min-[320px]:m-10 min-[320px]:pl-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">First Name</label><br>
                            <div class="flex flex-row">
                                <input type="text" placeholder="  First name" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                            </div>
                        </div>

                        <!-- last name  -->
                        <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Last Name</label><br>
                            <div class="flex flex-row">
                                <input type="text" placeholder="  Last name" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                            </div>
                        </div>
                    </div>

                    <div class="flex lg:flex-row min-[320px]:flex-col mt-[-60px]">
                        <!-- select country -->
                        <div class="lg:m-10 lg:pl-10 min-[320px]:m-10 min-[320px]:pl-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Select country</label><br>
                            <select class="border-2 w-[250px] h-[40px] rounded-md font-['Montserrat'] text-[13px] bg-light opacity-25 border-2 border-[#4e78c0] ">
                                <option value="Australia">Australia</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>

                        <!-- country code  -->
                        <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Country code</label><br>
                            <div class="flex flex-row">
                                <input type="text" placeholder="  Country" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                            </div>
                        </div>
                    </div>

                    <!-- mobile number  -->
                    <div class="flex lg:flex-row min-[320px]:flex-col lg:mt-[-60px] lg:ml-10">
                        <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                            <label for="" class="font-['Montserrat'] text-[13px]">Mobile number</label><br>
                            <div class="flex flex-row">
                                <input type="text" placeholder="  Mobile number" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                            </div>
                        </div>
                    </div>


                    <!-- button  -->
                    <router-link to="/signup/signup-personal">
                        <button class="font-['Montserrat' bg-[#293793] w-[250px] h-[40px] rounded-md shadow-lg text-white opacity-85 lg:ml-20 min-[320px]:ml-20 transition duration-300 ease-in-out 
                            hover:bg-[#293793] lg:mt-[-50px]">Create Account</button>
                    </router-link>
                </form>

                <div class="m-8">
                    <p class="font-[montserrat] text-[13px] text-center text-[14px]"> <span>Already have an account?</span> <RouterLink to="/login"><a href="#" class="text-[#293793] cursor-pointer">Sign in Instead </a></RouterLink> </p>
                </div>
            </div>
        </div>


        </div>
     </div>
</template>

<script>
export default{
name : 'SignupPersonal'
}
</script>
