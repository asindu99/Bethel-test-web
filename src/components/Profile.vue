<template>
    <div class="flex flex-col">
        <!-- header  -->
        <div>
            <div class="flex flex-row items-center justify-between h-full bg-white shadow-lg px-2 py-2 rounded-lg">
                <div class="lg:ml-[30px] my-2">
                    <!-- account setting with arrow -->
                    <div class="flex">
                        <div>
                            <h3>Account Settings</h3>
                        </div>

                        <!-- right arrow -->
                        <div class="ml-2">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        
                    </div>
                    <!-- end of the account setting with arrrow -->

                    <!-- Main -->
                    <div>
                        <h1 class="font-bold text-[30px]">Profile</h1>
                    </div>
                    <!-- end of the main -->
                </div>
            </div>
        </div>
        <!-- header-end  -->

        <!-- main-container  -->
        <div class="flex lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col py-8">
            <!-- left side -->
            <div class="basis-1/4 lg:flex-col min-[320px]:flex-col">
               <router-link to="">
                <button class="border-[2px] px-3 py-3 rounded-xl bg-[#293793] w-[200px] text-[white] text-[14px]
                        font-medium hover:text-[#293793] hover:bg-[white] transition-all ease-linear hover:border-[#293793]">Profile
                </button>
                </router-link>

                <router-link to="">
                <button class="border-[2px] px-3 py-3 rounded-xl bg-[#293793] w-[200px] text-[white] text-[14px]
                        font-medium hover:text-[#293793] hover:bg-[white] transition-all ease-linear hover:border-[#293793] mt-2">Change Password
                </button>
                </router-link>
            </div>
            <!-- end of left side  -->

            <!-- main wrap -->
            <div class="h-[100%]">
                <!-- form wrap -->
                <div class="bg-blue-100 pt-28 px-2 pb-2 rounded-lg shadow-lg">

                    <!-- right-side  -->
                    <div class="flex relative basis-2/4 w-[100%] h-[100%]">

                    <div class="flex absolute items-center justify-center top-[-95px] lg:left-80 min-[320px]:left-40">
                        <img src="../img/images/profile-admin.png" alt="" class="w-[85px] h-[85px]">
                    </div>

                    <!-- form - 1  -->
                    <div class="w-full bg-white rounded-lg p-10">

                    <div class="lg:mt-[-15px]">
                        <form action="" class="min-[320px]:ml-[-50px]">

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

                            
                            <div class="flex lg:flex-row min-[320px]:flex-col lg:mt-[-60px] lg:ml-10">
                                <!-- email  -->
                                <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                                    <label for="" class="font-['Montserrat'] text-[13px]">Email</label><br>
                                    <div class="flex flex-row">
                                        <input type="text" placeholder="  john@example.com" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                    </div>
                                </div>

                                <div class="lg:m-10 min-[320px]:mt-[-10px] min-[320px]:ml-20 min-[320px]:mb-10">
                                    <label for="" class="font-['Montserrat'] text-[13px]">Mobile number</label><br>
                                    <div class="flex flex-row">
                                        <input type="text" placeholder="  Mobile number" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[250px] h-[40px] rounded-md">
                                    </div>
                                </div>
                            </div>


                            <!-- button  -->
                            <router-link to="/Mobile-Verification">
                                <button class="font-['Montserrat' bg-[#293793] w-[250px] h-[40px] rounded-lg shadow-lg text-white opacity-85 lg:ml-20 min-[320px]:ml-20 transition duration-300 ease-in-out 
                                    hover:bg-[#293793] lg:mt-[-50px] hover:text-[#293793] hover:bg-[white] hover:border-[#293793] border-[2px]">Save Changes</button>
                            </router-link>
                        </form>

                    </div>
                            
                    </div>

                    </div>
                    <!-- end of right side  -->

                </div>
                <!-- form wrap end end  -->
            </div>
            <!-- main wrap end  -->

        </div>
        <!-- main-container end  -->

    </div>
</template>

<script>
    export default {
        
    }
</script>