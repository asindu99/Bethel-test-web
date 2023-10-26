<template>
    <div>
        <div class="flex absolute items-center justify-center top-[-70px] lg:left-80 min-[320px]:left-40">
                            <img src="../../img/images/profile-admin.png" alt="" class="w-[60px] h-[60px]">
        </div>
    
        <!-- form - 1  -->
        <div class="w-full bg-white rounded-lg p-8">
    
                        <div class="lg:mt-[-15px]">
    
                            <div class="flex ml-4">
                                <div>
                                    <h1 class="font-['Montserrat'] text-[#293793] pl-8 text-2xl font-bold ml-[-20px]">Edit Profile</h1>
                                </div>
                            </div>
    
                            <form action="" class="min-[320px]:ml-[-50px] lg:mt-[-20px]">
    
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
    
    </template>
    
    <script>
        export default {
            
        }
    </script>