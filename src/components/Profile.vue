<template>
    <div class="flex flex-col lg:pl-[5px]">
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

                <!-- left side -->
                <!-- <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col">
                <div class="flex items-center justify-center lg:pl-[-150px] lg:mr-2 md:mr-0 sm:mr-2 min-[320px]:ml-2">
                    <router-link to="/profile/profileEdit">

                        <button class="border-[2px] px-1 py-2 rounded-xl bg-sidebarBG w-[160px] text-[white] text-[14px]
                                font-medium hover:text-[#293793] hover:bg-[white] transition-all ease-linear border-sidebarBG">Profile

                        </button>
                    </router-link>
                </div>

                <div class="flex items-center justify-center">
                    <router-link to="/profile/changePassword">

                        <button class="border-[2px] px-1 py-2 rounded-xl hover:bg-sidebarBG w-[160px] hover:text-[white] text-[14px]
                                font-medium text-sidebarBG bg-[white] transition-all ease-linear border-sidebarBG">Change Password

                        </button>
                    </router-link>
                </div>
                </div> -->
                <!-- end of left side  -->
            </div>
        </div>
        <!-- header-end  -->

        <!-- main-container  -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col pt-2 lg:items-center lg:justify-center
        md:items-center md:justify-center sm:items-center sm:justify-center min-[320px]:items-center min-[320px]:justify-center">

                    <!--bg container  -->
                        <div class="w-full bg-white shadow-sm rounded-lg py-2 lg:w-full sm:px-4 min-[320px]:px-4 md:px-4 lg:px-2 md:mx-2 md:mb-10 sm:mx-2 sm:my-2 min-[320px]:mx-2 min-[320px]:mb-4">
                            
                            <!-- edit profile form container  -->
                            <div class="w-full">
                                <!-- personal information div -->

                                <div class="flex w-full mt-8 lg:justify-start md:justify-center sm:justify-center min-[320px]:justify-center min-[320px]:items-center p-4">
                                    <!-- <h1 class="text-sidebarBG lg:text-2xl md:text-2xl sm:text-2xl min-[320px]:text-xl ">Edit Profile</h1> -->
                                    
                                    <div class="relative ">
                                        <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                                        <h3 class="ml-4 text-sidebarBG lg:text-2xl md:text-2xl sm:text-2xl min-[320px]:text-xl">Edit Profile</h3> 
                                    </div>
                                </div>

                                <!-- <div class="bg-blue-50 w-full px-10 py-4 mt-2 justify-around "> -->
                                    <!-- <div class="flex justify-center items-center pt-2">
                                    <img src="../img/images/AdminProfile.png" alt="" class="w-[70px] h-[70px]">
                                    </div> -->

                                    <hr class="w-full mt-2">

                                    <!-- start of the form -->
                                    <div class="w-full">
                                        <VeeForm action="" @submit="patchAuthUserData">
                                            <!-- name section -->
                                            <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between lg:gap-20 md:gap-10 sm:gap-8 min-[320px]:gap-2 px-8">
                                                <div class="z-0 w-full mb-6 group">
                                                    <label for="" class="text-[14px]">First Name :</label>
                                                    <VeeField type="text" name="firstName"  class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none  dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer" placeholder=" " required />
                                                </div>

                                                <div class="z-0 w-full mb-6 group">
                                                    <label for="" class="text-[14px]"> Last Name:</label>
                                                    <vee-field type="text" name="lastName"  class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none  dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer" placeholder=" " required />
                                                </div>
                                            </div>
                                            <!-- end of the name section -->

                                            <!-- country section -->
                                            <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between mt-4 min-[320px]:mt-4 lg:mt-4 lg:gap-20 md:gap-10 sm:gap-8 min-[320px]:gap-2 px-8">
                                                <!-- country -->
                                                <div class="z-0 w-full mb-6 group">
                                                    <label for="" class="text-[14px]">Select Country :</label>
                                                    <!-- <input type="text" class="lg:w-[335px] md:w-[235px] text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384]"> -->
                                                    <vee-field type="text" name="country"  class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none  dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer" placeholder=" " required />
                                                </div>

                                                <!-- select country -->
                                                <div class="z-0 w-full mb-6 group">
                                                    <label for="" class="text-[14px]">Country Code :</label>
                                                    <!-- <input type="text" class="lg:w-[335px] md:w-[235px] text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384]"> -->
                                                    <vee-field type="text" name="code"  class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none  dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer" placeholder=" " required />
                                                </div>
                                            </div>
                                            <!-- end of the select country -->

                                            <!-- mobile and button -->
                                            <div class="px-8">
                                                <!-- mobile number -->
                                                <div class="flex  flex-col mt-4 ">
                                                    <label for="" class="text-[14px]">Mobile Number :</label>
                                                    <vee-field name="mobile" type="text" class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer"/>
                                                </div>

                                                <!-- button -->
                                                <div class="flex flex-col mt-8">
                                                    
                                                    <button type="submit" class="w-[200px] p-2 bg-sidebarBG rounded-lg px-8 text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out text-[14px]">Save Changes</button>
                                                    
                                                </div>
                                            </div>
                                        </VeeForm>
                                    </div>
                                    <!-- end of the form  -->
                                    

                                <!-- </div> -->
                            </div>
                            <!-- end of profile form container  -->


                            <!-- change Password form container -->
                            <div class="lg:pb-8">
                                <!-- change password information div -->

                                <div class="flex w-full mt-8 lg:justify-start md:justify-center sm:justify-center min-[320px]:justify-center min-[320px]:items-center p-4">
                                    <!-- <h1 class="text-sidebarBG lg:text-2xl md:text-2xl sm:text-2xl min-[320px]:text-xl ">Change Password</h1> -->

                                    <div class="relative ">
                                        <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                                        <h3 class="ml-4 text-sidebarBG lg:text-2xl md:text-2xl sm:text-2xl min-[320px]:text-xl">Change Password</h3> 
                                    </div>
                                </div>

                                <!-- <div class="bg-blue-50 px-8 py-4 mt-2"> -->
                                    <hr class="w-full mt-2">

                                    <!-- start of the form -->
                                    <div class="w-full">
                                        <VeeForm action="">
                                            <!-- old password -->
                                            <div class="px-8">
                                                <!-- old password -->
                                                <div class="flex  flex-col mt-4">
                                                    <label for="" class="text-[14px]">Email :</label>
                                                    <vee-field name="email" type="text" class="lg:w-full md:w-full text-[#757784] bg-transparent p-1 border-2 border-[#29379384] rounded-md"/>
                                                </div>
                                            </div>
                                            <!-- new and confirm password section -->
                                            <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between mt-4 lg:gap-20 md:gap-12 sm:gap-8 min-[320px]:gap-2 mt-8 px-8">
                                                <!-- first name -->
                                                <div class="flex flex-col w-full">
                                                    <label for="" class="text-[14px]">Old Password :</label>
                                                    <vee-field name="oldPassword" type="password" class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer"/>
                                                </div>

                                                <!-- last name -->
                                                <div class="flex flex-col min-[320px]:mt-4 lg:mt-0 md:mt-0 w-full">
                                                    <label for="" class="text-[14px]">New Password :</label>
                                                    <vee-field name="newPassword" type="password" class="block py-1.5 px-0 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-[#29379384] appearance-none dark:border-[#29379384] dark:focus:border-[#29379384] focus:outline-none focus:ring-0 focus:border-[#29379384] peer"/>
                                                </div>
                                            </div>
                                            <!-- end of the new and confirm password section -->

                                            <!--button -->
                                            <div>
                                                <!-- button -->
                                                <div class="flex flex-col mt-8 px-8">
                                                    
                                                    <button type="submit" class="w-[200px] p-2 bg-sidebarBG rounded-lg px-8 text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out text-[14px]">Change Password</button>
                                                    
                                                </div>
                                            </div>

                                        </VeeForm>
                                    </div>
                                    <!-- end of the form  -->

                                <!-- </div> -->
                            </div>
                            <!-- end of change Password form container  -->

                        </div>
                    <!-- end of bg container  -->

        </div>
        <!-- main-container end  -->

    </div>
</template>

<script>
import router from '@/router/index'
import {mapStores} from 'pinia'
import axios from 'axios';
import { authUser } from '@/stores/AuthUser'
export default{
name : 'Profile',
computed:{
    ...mapStores(authUser)
},
methods: {
   async patchAuthUserData(values){
            console.log(values)

            console.log(values.email)

            console.log(this.authUserStore.userID)
            const res = await axios.patch('https://mw.bethel.network/users/' + this.authUserStore.userID,
            
            {
                email: values.email,
                username: values.username,
                password: values.password,
                firstName: values.FirstName,
                lastName: values.LastName,
                country: values.country,
                code: values.code,
                mobile: values.mobile
            })
            console.log(res)

            if(res.error){
                console.log(res.error)
            }
        },

 async patchAuthPassData(values){
            // this.authUserDetailsArr.push(values)

            // console.log(values.email)

            const res = await axios.get('https://mw.bethel.network/users/' + this.authUserStore.userID,
            {
                email: values.email,
                oldpassword: values.oldpassword,
                newPassword : values.newPassword
            })
            console.log(res)

            if(res.error){
                console.log(res.error)
            }
            else{
                router.push('/login')
            }
        },  
}

    
}
</script>