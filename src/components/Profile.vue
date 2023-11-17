<template>
    <div class="flex flex-col lg:pl-[5px]">
        <!-- header  -->
        <div>
            <div class="flex flex-row items-center justify-between h-full px-2 py-2 bg-white rounded-lg shadow-lg">
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

                               

                                    <hr class="w-full mt-2">

                                    <!-- start of the form -->
                                    <div class="w-full">

                                        <VeeForm  @submit="patchAuthUserData" :validation-schema="signupSchema">

                                            <!-- name section -->
                                            <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between lg:gap-x-20 md:gap-x-10 sm:gap-x-8 min-[320px]:gap-x-2 px-8 pt-10 gap-y-10">
                                                
                                                <div class="z-0 w-full mb-6 group">

                                                    <vee-field ref="anyName" autocomplete="off" name="firstName" type="text" class="relative w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" :placeholder="firstName" />
                                                    <ErrorMessage name="firstName" class="text-red-400 bottom-[-12px] text-[12px]" />

                                                    <!-- <ErrorMessage name="firstName" /> -->
                                                    
							                        <label for="firstName" class="absolute left-0 -top-6 text-gray-600 text-sm placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">First Name :</label>
                                                </div>

                                                <div class="relative z-0 w-full mb-6 group">
                                                    <vee-field ref="anyName2"  name="lastName" type="text" class="w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" :placeholder="lastName" />
                                                    <!-- <ErrorMessage name="lastName" class="text-red-400 bottom-[-12px] text-[12px]" /> -->

                                                    <!-- <ErrorMessage name="lastName" /> -->

							                        <label for="lastName" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Last Name :</label>
                                                </div>
                                            </div>
                                            <!-- end of the name section -->

                                            <!-- country section -->
                                            <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between mt-4 min-[320px]:mt-4 lg:mt-4 lg:gap-x-20 md:gap-x-10 sm:gap-x-8 min-[320px]:gap-x-2 px-8 gap-y-10 pt-6">
                                                <!-- country -->
                                                <div class="relative z-0 w-full mb-6 group">

                                                    <select v-model="selected"

                                                      name="country" class="w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white bg-transparent">
                                                   
                                                    <option  v-for="country in countryList" 
                                                    :key="country.Code" :value="country" :selected="firstName"
                                                      class="w-[200px] bg-transparent">{{ country.Name }}</option>
                                                    </select>
                                                    


							                        <label class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Country:</label>
                                                </div>

                                                <!-- country -->
                                                <div class="relative z-0 w-full mb-6 group">
  
							                        <label for="code" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Country Code:</label>
                                                    


                                                    <select

                                                 name="code" class="w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white bg-transparent">

                                                    <option >{{ selected.MobileCode }}</option>
                                                </select>
                                                
                                                <label class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Country Code:</label>
                                                
                                                </div>


                                                
                                            </div>
                                            <!-- end of the select country -->

                                            <!-- mobile and button -->
                                            <div class="px-8 pt-6">
                                                <!-- mobile number -->
                                                <div class="relative flex flex-col mt-4 ">
                                                    
                                                    <vee-field ref="anyName3o" autocomplete="off" id="" name="mobile" type="tel" class="h-10 pl-2 text-gray-900 border-b-2 lg:w-[544px] border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" :placeholder="mobileNumber" />


							<label class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Mobile Number :</label>

                                                </div>

                                                <!-- button -->
                                                <div class="relative flex flex-col mt-8">
                                                    
                                                    <button type="submit" class=" w-[200px] p-2 bg-sidebarBG rounded-lg px-8 text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out text-[14px]">Save Changes</button>

                                                    <div v-if="isUpdating" class="absolute left-[170px] top-[10px]">
                                                        <img src="../img/animationGIFs/Rolling.svg" alt="" class="w-[20px]">
                                                    </div>

                                                    <div v-if="updated" class="text-green-400 absolute bottom-[-25px] left-10">
                                                        <h3 class="text-[12px]">Update Success!</h3>
                                                    </div>
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

                                <!-- <div class="px-8 py-4 mt-2 bg-blue-50"> -->
                                    <hr class="w-full mt-2">






                        <!-- start of the form -->
                        <div class="w-full">

                            <vee-form  @submit="authPassword" :validation-schema="changePassSchema" class="pt-8" >
 <!--email and oldPassword  section -->
                                    <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between lg:gap-x-20 md:gap-x-12 sm:gap-x-8 min-[320px]:gap-x-2 mt-8 px-8 gap-y-12 ">
                                    <!-- email -->
                                    <div class="relative flex flex-col w-full">

                                        <vee-field name="email" type="email" class="relative w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" :placeholder="email" />
                                        <ErrorMessage name="email" class="text-red-400 absolute bottom-[-20px] text-[12px]" />



                                        <label for="email" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Email :</label>
                                    </div>

                                    <!-- old password -->
                                    <div class="flex flex-col min-[320px]:mt-4 lg:mt-0 md:mt-0 w-full relative">
                                        

                                        <vee-field name="oldPassword" type="password" class="realtive w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="password" />
                                        <ErrorMessage name="oldPassword" class="text-red-400 absolute bottom-[-20px] text-[12px]" />

                                        <label for="password" class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Password :</label>

                                        
                                    </div>
                                    </div>
                                    <!-- end of the email and old password section -->


                                <!-- new and confirm password section -->
                                <div class="flex lg:flex-row md:flex-row sm:flex min-[320px]:flex-col w-full justify-between lg:gap-x-20 md:gap-x-12 sm:gap-x-8 min-[320px]:gap-x-2 mt-8 px-8 gap-y-12 pt-8">
                                    <!-- new password -->
                                    <div class="relative flex flex-col w-full">
                                        
                                        <vee-field name="newPassword" type="password" class="relative w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="New Password" />
                                        <ErrorMessage name="newPassword" class="text-red-400 absolute bottom-[-15px] text-[12px]" />


                                        <label class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">New Password :</label>

                                        
                                    </div>

                                    <!-- confirm password -->
                                    <div class="flex flex-col min-[320px]:mt-4 lg:mt-0 md:mt-0 w-full relative">
                                        

                                        <vee-field  name="confirm_password" type="password" class="relative w-full h-10 pl-2 text-gray-900 border-b-2 border-sidebarBG focus:outline-none focus:borer-rose-600 on:focus:bg-white" placeholder="Confirm Password" />
                                        <ErrorMessage name="confirm_password" class="text-red-400 absolute bottom-[-15px] text-[12px]" />

                                        <label class="absolute left-0 -top-6 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Confirm Password :</label>

                                    </div>
                                </div>
                                <!-- end of the new and confirm password section -->

                                
                                <!-- button -->

                                <div class="relative flex flex-col px-8 mt-10 mb-8">

                                    
                                    <button type="submit" class="w-[200px] p-2 bg-sidebarBG rounded-lg px-8 text-white border-[1px] hover:bg-white hover:text-sidebarBG hover:border-[1px] hover:border-sidebarBG transition-all ease-in-out text-[14px]">Change Password</button>

                                    <div v-if="isPassing" class="absolute left-[205px] top-[10px]">
                                        <img src="../img/animationGIFs/Rolling.svg" alt="" class="w-[20px]">
                                    </div>

                                    <div v-if="passed" class="text-green-400 absolute bottom-[-25px] left-12">
                                        <h3 class="text-[12px]">Update Password Success!</h3>
                                    </div>
                                    
                                
                                </div>

                            </vee-form>
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
import {mapStores} from 'pinia'
import axios from 'axios';
import { authUser } from '@/stores/AuthUser'
import { useWalletData } from '@/stores/DataStore'
import { ErrorMessage } from 'vee-validate';


export default{
    name: 'Profile',
    updated() {
    },
    data() {
        return {
            signupSchema: {

                firstName: "required|min:3|max:100",
            },

            changePassSchema : {
                email: "required|min:3|max:100|email",
                oldPassword: "required|min:2|max:100",
                newPassword : "required|min:9|max:100",
                confirm_password: "passwords_mismatch:@newPassword",

            },

            emails : '',
            passwords : '',
            newPasswords : '',

            selecteds : {},

            selected: {},
            firstName: '',
            lastName: '',
            mobileNumber: '',
            country : '',
            countryCode : '',




            email: '',
            code: '',
            userData: null,
            userDetail: null,
            userID : null,
            // update styles 
            isUpdating: false,
            updated: false,

            // update password detals
            isPassing : false,
            passed : false,

            countryList: [{ Name: 'Afghanistan', Code: 'AF', Timezone: 'Afghanistan Standard Time', UTC: 'UTC+04:30', MobileCode: '+93' }, { Name: 'Åland Islands', Code: 'AX', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+358-18' }, { Name: 'Albania', Code: 'AL', Timezone: 'Central Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+355' }, { Name: 'Algeria', Code: 'DZ', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+213' }, { Name: 'American Samoa', Code: 'AS', Timezone: 'UTC-11', UTC: 'UTC-11:00', MobileCode: '+1-684' }, { Name: 'Andorra', Code: 'AD', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+376' }, { Name: 'Angola', Code: 'AO', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+244' }, { Name: 'Anguilla', Code: 'AI', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-264' }, { Name: 'Antarctica', Code: 'AQ', Timezone: 'Pacific SA Standard Time', UTC: 'UTC-03:00', MobileCode: '+' }, { Name: 'Antigua and Barbuda', Code: 'AG', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-268' }, { Name: 'Argentina', Code: 'AR', Timezone: 'Argentina Standard Time', UTC: 'UTC-03:00', MobileCode: '+54' }, { Name: 'Armenia', Code: 'AM', Timezone: 'Caucasus Standard Time', UTC: 'UTC+04:00', MobileCode: '+374' }, { Name: 'Aruba', Code: 'AW', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+297' }, { Name: 'Australia', Code: 'AU', Timezone: 'AUS Eastern Standard Time', UTC: 'UTC+10:00', MobileCode: '+61' }, { Name: 'Austria', Code: 'AT', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+43' }, { Name: 'Azerbaijan', Code: 'AZ', Timezone: 'Azerbaijan Standard Time', UTC: 'UTC+04:00', MobileCode: '+994' }, { Name: 'Bahamas, The', Code: 'BS', Timezone: 'Eastern Standard Time', UTC: 'UTC-05:00', MobileCode: '+1-242' }, { Name: 'Bahrain', Code: 'BH', Timezone: 'Arab Standard Time', UTC: 'UTC+03:00', MobileCode: '+973' }, { Name: 'Bangladesh', Code: 'BD', Timezone: 'Bangladesh Standard Time', UTC: 'UTC+06:00', MobileCode: '+880' }, { Name: 'Barbados', Code: 'BB', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-246' }, { Name: 'Belarus', Code: 'BY', Timezone: 'Belarus Standard Time', UTC: 'UTC+03:00', MobileCode: '+375' }, { Name: 'Belgium', Code: 'BE', Timezone: 'Romance Standard Time', UTC: 'UTC+01:00', MobileCode: '+32' }, { Name: 'Belize', Code: 'BZ', Timezone: 'Central America Standard Time', UTC: 'UTC-06:00', MobileCode: '+501' }, { Name: 'Benin', Code: 'BJ', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+229' }, { Name: 'Bermuda', Code: 'BM', Timezone: 'Atlantic Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-441' }, { Name: 'Bhutan', Code: 'BT', Timezone: 'Bangladesh Standard Time', UTC: 'UTC+06:00', MobileCode: '+975' }, { Name: 'Bolivarian Republic of Venezuela', Code: 'VE', Timezone: 'Venezuela Standard Time', UTC: 'UTC-04:30', MobileCode: '+58' }, { Name: 'Bolivia', Code: 'BO', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+591' }, { Name: 'Bonaire, Sint Eustatius and Saba', Code: 'BQ', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+599' }, { Name: 'Bosnia and Herzegovina', Code: 'BA', Timezone: 'Central European Standard Time', UTC: 'UTC+01:00', MobileCode: '+387' }, { Name: 'Botswana', Code: 'BW', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+267' }, { Name: 'Bouvet Island', Code: 'BV', Timezone: 'UTC', UTC: 'UTC', MobileCode: '+' }, { Name: 'Brazil', Code: 'BR', Timezone: 'E. South America Standard Time', UTC: 'UTC-03:00', MobileCode: '+55' }, { Name: 'British Indian Ocean Territory', Code: 'IO', Timezone: 'Central Asia Standard Time', UTC: 'UTC+06:00', MobileCode: '+246' }, { Name: 'Brunei', Code: 'BN', Timezone: 'Singapore Standard Time', UTC: 'UTC+08:00', MobileCode: '+673' }, { Name: 'Bulgaria', Code: 'BG', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+359' }, { Name: 'Burkina Faso', Code: 'BF', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+226' }, { Name: 'Burundi', Code: 'BI', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+257' }, { Name: 'Cabo Verde', Code: 'CV', Timezone: 'Cape Verde Standard Time', UTC: 'UTC-01:00', MobileCode: '+238' }, { Name: 'Cambodia', Code: 'KH', Timezone: 'SE Asia Standard Time', UTC: 'UTC+07:00', MobileCode: '+855' }, { Name: 'Cameroon', Code: 'CM', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+237' }, { Name: 'Canada', Code: 'CA', Timezone: 'Eastern Standard Time', UTC: 'UTC-05:00', MobileCode: '+1' }, { Name: 'Cayman Islands', Code: 'KY', Timezone: 'SA Pacific Standard Time', UTC: 'UTC-05:00', MobileCode: '+1-345' }, { Name: 'Central African Republic', Code: 'CF', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+236' }, { Name: 'Chad', Code: 'TD', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+235' }, { Name: 'Chile', Code: 'CL', Timezone: 'Pacific SA Standard Time', UTC: 'UTC-03:00', MobileCode: '+56' }, { Name: 'China', Code: 'CN', Timezone: 'China Standard Time', UTC: 'UTC+08:00', MobileCode: '+86' }, { Name: 'Christmas Island', Code: 'CX', Timezone: 'SE Asia Standard Time', UTC: 'UTC+07:00', MobileCode: '+61' }, { Name: 'Cocos (Keeling) Islands', Code: 'CC', Timezone: 'Myanmar Standard Time', UTC: 'UTC+06:30', MobileCode: '+61' }, { Name: 'Colombia', Code: 'CO', Timezone: 'SA Pacific Standard Time', UTC: 'UTC-05:00', MobileCode: '+57' }, { Name: 'Comoros', Code: 'KM', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+269' }, { Name: 'Congo', Code: 'CG', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+242' }, { Name: 'Congo (DRC)', Code: 'CD', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+243' }, { Name: 'Cook Islands', Code: 'CK', Timezone: 'Hawaiian Standard Time', UTC: 'UTC-10:00', MobileCode: '+682' }, { Name: 'Costa Rica', Code: 'CR', Timezone: 'Central America Standard Time', UTC: 'UTC-06:00', MobileCode: '+506' }, { Name: "Côte d'Ivoire", Code: 'CI', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+225' }, { Name: 'Croatia', Code: 'HR', Timezone: 'Central European Standard Time', UTC: 'UTC+01:00', MobileCode: '+385' }, { Name: 'Cuba', Code: 'CU', Timezone: 'Eastern Standard Time', UTC: 'UTC-05:00', MobileCode: '+53' }, { Name: 'Curaçao', Code: 'CW', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+599' }, { Name: 'Cyprus', Code: 'CY', Timezone: 'E. Europe Standard Time', UTC: 'UTC+02:00', MobileCode: '+357' }, { Name: 'Czech Republic', Code: 'CZ', Timezone: 'Central Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+420' }, { Name: 'Democratic Republic of Timor-Leste', Code: 'TL', Timezone: 'Tokyo Standard Time', UTC: 'UTC+09:00', MobileCode: '+670' }, { Name: 'Denmark', Code: 'DK', Timezone: 'Romance Standard Time', UTC: 'UTC+01:00', MobileCode: '+45' }, { Name: 'Djibouti', Code: 'DJ', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+253' }, { Name: 'Dominica', Code: 'DM', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-767' }, { Name: 'Dominican Republic', Code: 'DO', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-809 and 1-829' }, { Name: 'Ecuador', Code: 'EC', Timezone: 'SA Pacific Standard Time', UTC: 'UTC-05:00', MobileCode: '+593' }, { Name: 'Egypt', Code: 'EG', Timezone: 'Egypt Standard Time', UTC: 'UTC+02:00', MobileCode: '+20' }, { Name: 'El Salvador', Code: 'SV', Timezone: 'Central America Standard Time', UTC: 'UTC-06:00', MobileCode: '+503' }, { Name: 'Equatorial Guinea', Code: 'GQ', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+240' }, { Name: 'Eritrea', Code: 'ER', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+291' }, { Name: 'Estonia', Code: 'EE', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+372' }, { Name: 'Ethiopia', Code: 'ET', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+251' }, { Name: 'Falkland Islands (Islas Malvinas)', Code: 'FK', Timezone: 'SA Eastern Standard Time', UTC: 'UTC-03:00', MobileCode: '+500' }, { Name: 'Faroe Islands', Code: 'FO', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+298' }, { Name: 'Fiji Islands', Code: 'FJ', Timezone: 'Fiji Standard Time', UTC: 'UTC+12:00', MobileCode: '+679' }, { Name: 'Finland', Code: 'FI', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+358' }, { Name: 'France', Code: 'FR', Timezone: 'Romance Standard Time', UTC: 'UTC+01:00', MobileCode: '+33' }, { Name: 'French Guiana', Code: 'GF', Timezone: 'SA Eastern Standard Time', UTC: 'UTC-03:00', MobileCode: '+594' }, { Name: 'French Polynesia', Code: 'PF', Timezone: 'Hawaiian Standard Time', UTC: 'UTC-10:00', MobileCode: '+689' }, { Name: 'French Southern and Antarctic Lands', Code: 'TF', Timezone: 'West Asia Standard Time', UTC: 'UTC+05:00', MobileCode: '+' }, { Name: 'Gabon', Code: 'GA', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+241' }, { Name: 'Gambia, The', Code: 'GM', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+220' }, { Name: 'Georgia', Code: 'GE', Timezone: 'Georgian Standard Time', UTC: 'UTC+04:00', MobileCode: '+995' }, { Name: 'Germany', Code: 'DE', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+49' }, { Name: 'Ghana', Code: 'GH', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+233' }, { Name: 'Gibraltar', Code: 'GI', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+350' }, { Name: 'Greece', Code: 'GR', Timezone: 'GTB Standard Time', UTC: 'UTC+02:00', MobileCode: '+30' }, { Name: 'Greenland', Code: 'GL', Timezone: 'Greenland Standard Time', UTC: 'UTC-03:00', MobileCode: '+299' }, { Name: 'Grenada', Code: 'GD', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-473' }, { Name: 'Guadeloupe', Code: 'GP', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+590' }, { Name: 'Guam', Code: 'GU', Timezone: 'West Pacific Standard Time', UTC: 'UTC+10:00', MobileCode: '+1-671' }, { Name: 'Guatemala', Code: 'GT', Timezone: 'Central America Standard Time', UTC: 'UTC-06:00', MobileCode: '+502' }, { Name: 'Guernsey', Code: 'GG', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+44-1481' }, { Name: 'Guinea', Code: 'GN', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+224' }, { Name: 'Guinea-Bissau', Code: 'GW', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+245' }, { Name: 'Guyana', Code: 'GY', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+592' }, { Name: 'Haiti', Code: 'HT', Timezone: 'Eastern Standard Time', UTC: 'UTC-05:00', MobileCode: '+509' }, { Name: 'Heard Island and McDonald Islands', Code: 'HM', Timezone: 'Mauritius Standard Time', UTC: 'UTC+04:00', MobileCode: '+ ' }, { Name: 'Honduras', Code: 'HN', Timezone: 'Central America Standard Time', UTC: 'UTC-06:00', MobileCode: '+504' }, { Name: 'Hong Kong SAR', Code: 'HK', Timezone: 'China Standard Time', UTC: 'UTC+08:00', MobileCode: '+852' }, { Name: 'Hungary', Code: 'HU', Timezone: 'Central Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+36' }, { Name: 'Iceland', Code: 'IS', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+354' }, { Name: 'India', Code: 'IN', Timezone: 'India Standard Time', UTC: 'UTC+05:30', MobileCode: '+91' }, { Name: 'Indonesia', Code: 'ID', Timezone: 'SE Asia Standard Time', UTC: 'UTC+07:00', MobileCode: '+62' }, { Name: 'Iran', Code: 'IR', Timezone: 'Iran Standard Time', UTC: 'UTC+03:30', MobileCode: '+98' }, { Name: 'Iraq', Code: 'IQ', Timezone: 'Arabic Standard Time', UTC: 'UTC+03:00', MobileCode: '+964' }, { Name: 'Ireland', Code: 'IE', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+353' }, { Name: 'Israel', Code: 'IL', Timezone: 'Israel Standard Time', UTC: 'UTC+02:00', MobileCode: '+972' }, { Name: 'Italy', Code: 'IT', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+39' }, { Name: 'Jamaica', Code: 'JM', Timezone: 'SA Pacific Standard Time', UTC: 'UTC-05:00', MobileCode: '+1-876' }, { Name: 'Jan Mayen', Code: 'SJ', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+47' }, { Name: 'Japan', Code: 'JP', Timezone: 'Tokyo Standard Time', UTC: 'UTC+09:00', MobileCode: '+81' }, { Name: 'Jersey', Code: 'JE', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+44-1534' }, { Name: 'Jordan', Code: 'JO', Timezone: 'Jordan Standard Time', UTC: 'UTC+02:00', MobileCode: '+962' }, { Name: 'Kazakhstan', Code: 'KZ', Timezone: 'Central Asia Standard Time', UTC: 'UTC+06:00', MobileCode: '+7' }, { Name: 'Kenya', Code: 'KE', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+254' }, { Name: 'Kiribati', Code: 'KI', Timezone: 'UTC+12', UTC: 'UTC+12:00', MobileCode: '+686' }, { Name: 'Korea', Code: 'KR', Timezone: 'Korea Standard Time', UTC: 'UTC+09:00', MobileCode: '+82' }, { Name: 'Kosovo', Code: 'XK', Timezone: 'Central European Standard Time', UTC: 'UTC+01:00', MobileCode: '+' }, { Name: 'Kuwait', Code: 'KW', Timezone: 'Arab Standard Time', UTC: 'UTC+03:00', MobileCode: '+965' }, { Name: 'Kyrgyzstan', Code: 'KG', Timezone: 'Central Asia Standard Time', UTC: 'UTC+06:00', MobileCode: '+996' }, { Name: 'Laos', Code: 'LA', Timezone: 'SE Asia Standard Time', UTC: 'UTC+07:00', MobileCode: '+856' }, { Name: 'Latvia', Code: 'LV', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+371' }, { Name: 'Lebanon', Code: 'LB', Timezone: 'Middle East Standard Time', UTC: 'UTC+02:00', MobileCode: '+961' }, { Name: 'Lesotho', Code: 'LS', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+266' }, { Name: 'Liberia', Code: 'LR', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+231' }, { Name: 'Libya', Code: 'LY', Timezone: 'E. Europe Standard Time', UTC: 'UTC+02:00', MobileCode: '+218' }, { Name: 'Liechtenstein', Code: 'LI', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+423' }, { Name: 'Lithuania', Code: 'LT', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+370' }, { Name: 'Luxembourg', Code: 'LU', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+352' }, { Name: 'Macao SAR', Code: 'MO', Timezone: 'China Standard Time', UTC: 'UTC+08:00', MobileCode: '+853' }, { Name: 'Macedonia, Former Yugoslav Republic of', Code: 'MK', Timezone: 'Central European Standard Time', UTC: 'UTC+01:00', MobileCode: '+389' }, { Name: 'Madagascar', Code: 'MG', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+261' }, { Name: 'Malawi', Code: 'MW', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+265' }, { Name: 'Malaysia', Code: 'MY', Timezone: 'Singapore Standard Time', UTC: 'UTC+08:00', MobileCode: '+60' }, { Name: 'Maldives', Code: 'MV', Timezone: 'West Asia Standard Time', UTC: 'UTC+05:00', MobileCode: '+960' }, { Name: 'Mali', Code: 'ML', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+223' }, { Name: 'Malta', Code: 'MT', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+356' }, { Name: 'Man, Isle of', Code: 'IM', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+44-1624' }, { Name: 'Marshall Islands', Code: 'MH', Timezone: 'UTC+12', UTC: 'UTC+12:00', MobileCode: '+692' }, { Name: 'Martinique', Code: 'MQ', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+596' }, { Name: 'Mauritania', Code: 'MR', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+222' }, { Name: 'Mauritius', Code: 'MU', Timezone: 'Mauritius Standard Time', UTC: 'UTC+04:00', MobileCode: '+230' }, { Name: 'Mayotte', Code: 'YT', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+262' }, { Name: 'Mexico', Code: 'MX', Timezone: 'Central Standard Time (Mexico)', UTC: 'UTC-06:00', MobileCode: '+52' }, { Name: 'Micronesia', Code: 'FM', Timezone: 'West Pacific Standard Time', UTC: 'UTC+10:00', MobileCode: '+691' }, { Name: 'Moldova', Code: 'MD', Timezone: 'GTB Standard Time', UTC: 'UTC+02:00', MobileCode: '+373' }, { Name: 'Monaco', Code: 'MC', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+377' }, { Name: 'Mongolia', Code: 'MN', Timezone: 'Ulaanbaatar Standard Time', UTC: 'UTC+08:00', MobileCode: '+976' }, { Name: 'Montenegro', Code: 'ME', Timezone: 'Central European Standard Time', UTC: 'UTC+01:00', MobileCode: '+382' }, { Name: 'Montserrat', Code: 'MS', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-664' }, { Name: 'Morocco', Code: 'MA', Timezone: 'Morocco Standard Time', UTC: 'UTC', MobileCode: '+212' }, { Name: 'Mozambique', Code: 'MZ', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+258' }, { Name: 'Myanmar', Code: 'MM', Timezone: 'Myanmar Standard Time', UTC: 'UTC+06:30', MobileCode: '+95' }, { Name: 'Namibia', Code: 'NA', Timezone: 'Namibia Standard Time', UTC: 'UTC+01:00', MobileCode: '+264' }, { Name: 'Nauru', Code: 'NR', Timezone: 'UTC+12', UTC: 'UTC+12:00', MobileCode: '+674' }, { Name: 'Nepal', Code: 'NP', Timezone: 'Nepal Standard Time', UTC: 'UTC+05:45', MobileCode: '+977' }, { Name: 'Netherlands', Code: 'NL', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+31' }, { Name: 'New Caledonia', Code: 'NC', Timezone: 'Central Pacific Standard Time', UTC: 'UTC+11:00', MobileCode: '+687' }, { Name: 'New Zealand', Code: 'NZ', Timezone: 'New Zealand Standard Time', UTC: 'UTC+12:00', MobileCode: '+64' }, { Name: 'Nicaragua', Code: 'NI', Timezone: 'Central America Standard Time', UTC: 'UTC-06:00', MobileCode: '+505' }, { Name: 'Niger', Code: 'NE', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+227' }, { Name: 'Nigeria', Code: 'NG', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+234' }, { Name: 'Niue', Code: 'NU', Timezone: 'UTC-11', UTC: 'UTC-11:00', MobileCode: '+683' }, { Name: 'Norfolk Island', Code: 'NF', Timezone: 'Central Pacific Standard Time', UTC: 'UTC+11:00', MobileCode: '+672' }, { Name: 'North Korea', Code: 'KP', Timezone: 'Korea Standard Time', UTC: 'UTC+09:00', MobileCode: '+850' }, { Name: 'Northern Mariana Islands', Code: 'MP', Timezone: 'West Pacific Standard Time', UTC: 'UTC+10:00', MobileCode: '+1-670' }, { Name: 'Norway', Code: 'NO', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+47' }, { Name: 'Oman', Code: 'OM', Timezone: 'Arabian Standard Time', UTC: 'UTC+04:00', MobileCode: '+968' }, { Name: 'Pakistan', Code: 'PK', Timezone: 'Pakistan Standard Time', UTC: 'UTC+05:00', MobileCode: '+92' }, { Name: 'Palau', Code: 'PW', Timezone: 'Tokyo Standard Time', UTC: 'UTC+09:00', MobileCode: '+680' }, { Name: 'Palestinian Authority', Code: 'PS', Timezone: 'Egypt Standard Time', UTC: 'UTC+02:00', MobileCode: '+970' }, { Name: 'Panama', Code: 'PA', Timezone: 'SA Pacific Standard Time', UTC: 'UTC-05:00', MobileCode: '+507' }, { Name: 'Papua New Guinea', Code: 'PG', Timezone: 'West Pacific Standard Time', UTC: 'UTC+10:00', MobileCode: '+675' }, { Name: 'Paraguay', Code: 'PY', Timezone: 'Paraguay Standard Time', UTC: 'UTC-04:00', MobileCode: '+595' }, { Name: 'Peru', Code: 'PE', Timezone: 'SA Pacific Standard Time', UTC: 'UTC-05:00', MobileCode: '+51' }, { Name: 'Philippines', Code: 'PH', Timezone: 'Singapore Standard Time', UTC: 'UTC+08:00', MobileCode: '+63' }, { Name: 'Pitcairn Islands', Code: 'PN', Timezone: 'Pacific Standard Time', UTC: 'UTC-08:00', MobileCode: '+870' }, { Name: 'Poland', Code: 'PL', Timezone: 'Central European Standard Time', UTC: 'UTC+01:00', MobileCode: '+48' }, { Name: 'Portugal', Code: 'PT', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+351' }, { Name: 'Puerto Rico', Code: 'PR', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-787 and 1-939' }, { Name: 'Qatar', Code: 'QA', Timezone: 'Arab Standard Time', UTC: 'UTC+03:00', MobileCode: '+974' }, { Name: 'Reunion', Code: 'RE', Timezone: 'Mauritius Standard Time', UTC: 'UTC+04:00', MobileCode: '+262' }, { Name: 'Romania', Code: 'RO', Timezone: 'GTB Standard Time', UTC: 'UTC+02:00', MobileCode: '+40' }, { Name: 'Russia', Code: 'RU', Timezone: 'Russian Standard Time', UTC: 'UTC+03:00', MobileCode: '+7' }, { Name: 'Rwanda', Code: 'RW', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+250' }, { Name: 'Saint Barthélemy', Code: 'BL', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+590' }, { Name: 'Saint Helena, Ascension and Tristan da Cunha', Code: 'SH', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+290' }, { Name: 'Saint Kitts and Nevis', Code: 'KN', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-869' }, { Name: 'Saint Lucia', Code: 'LC', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-758' }, { Name: 'Saint Martin (French part)', Code: 'MF', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+590' }, { Name: 'Saint Pierre and Miquelon', Code: 'PM', Timezone: 'Greenland Standard Time', UTC: 'UTC-03:00', MobileCode: '+508' }, { Name: 'Saint Vincent and the Grenadines', Code: 'VC', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-784' }, { Name: 'Samoa', Code: 'WS', Timezone: 'Samoa Standard Time', UTC: 'UTC+13:00', MobileCode: '+685' }, { Name: 'San Marino', Code: 'SM', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+378' }, { Name: 'São Tomé and Príncipe', Code: 'ST', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+239' }, { Name: 'Saudi Arabia', Code: 'SA', Timezone: 'Arab Standard Time', UTC: 'UTC+03:00', MobileCode: '+966' }, { Name: 'Senegal', Code: 'SN', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+221' }, { Name: 'Serbia', Code: 'RS', Timezone: 'Central Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+381' }, { Name: 'Seychelles', Code: 'SC', Timezone: 'Mauritius Standard Time', UTC: 'UTC+04:00', MobileCode: '+248' }, { Name: 'Sierra Leone', Code: 'SL', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+232' }, { Name: 'Singapore', Code: 'SG', Timezone: 'Singapore Standard Time', UTC: 'UTC+08:00', MobileCode: '+65' }, { Name: 'Sint Maarten (Dutch part)', Code: 'SX', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+599' }, { Name: 'Slovakia', Code: 'SK', Timezone: 'Central Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+421' }, { Name: 'Slovenia', Code: 'SI', Timezone: 'Central Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+386' }, { Name: 'Solomon Islands', Code: 'SB', Timezone: 'Central Pacific Standard Time', UTC: 'UTC+11:00', MobileCode: '+677' }, { Name: 'Somalia', Code: 'SO', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+252' }, { Name: 'South Africa', Code: 'ZA', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+27' }, { Name: 'South Georgia and the South Sandwich Islands', Code: 'GS', Timezone: 'UTC-02', UTC: 'UTC-02:00', MobileCode: '+' }, { Name: 'South Sudan', Code: 'SS', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+211' }, { Name: 'Spain', Code: 'ES', Timezone: 'Romance Standard Time', UTC: 'UTC+01:00', MobileCode: '+34' }, { Name: 'Sri Lanka', Code: 'LK', Timezone: 'Sri Lanka Standard Time', UTC: 'UTC+05:30', MobileCode: '+94' }, { Name: 'Sudan', Code: 'SD', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+249' }, { Name: 'Suriname', Code: 'SR', Timezone: 'SA Eastern Standard Time', UTC: 'UTC-03:00', MobileCode: '+597' }, { Name: 'Svalbard', Code: 'SJ', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+47' }, { Name: 'Swaziland', Code: 'SZ', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+268' }, { Name: 'Sweden', Code: 'SE', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+46' }, { Name: 'Switzerland', Code: 'CH', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+41' }, { Name: 'Syria', Code: 'SY', Timezone: 'Syria Standard Time', UTC: 'UTC+02:00', MobileCode: '+963' }, { Name: 'Taiwan', Code: 'TW', Timezone: 'Taipei Standard Time', UTC: 'UTC+08:00', MobileCode: '+886' }, { Name: 'Tajikistan', Code: 'TJ', Timezone: 'West Asia Standard Time', UTC: 'UTC+05:00', MobileCode: '+992' }, { Name: 'Tanzania', Code: 'TZ', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+255' }, { Name: 'Thailand', Code: 'TH', Timezone: 'SE Asia Standard Time', UTC: 'UTC+07:00', MobileCode: '+66' }, { Name: 'Togo', Code: 'TG', Timezone: 'Greenwich Standard Time', UTC: 'UTC', MobileCode: '+228' }, { Name: 'Tokelau', Code: 'TK', Timezone: 'Tonga Standard Time', UTC: 'UTC+13:00', MobileCode: '+690' }, { Name: 'Tonga', Code: 'TO', Timezone: 'Tonga Standard Time', UTC: 'UTC+13:00', MobileCode: '+676' }, { Name: 'Trinidad and Tobago', Code: 'TT', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-868' }, { Name: 'Tunisia', Code: 'TN', Timezone: 'W. Central Africa Standard Time', UTC: 'UTC+01:00', MobileCode: '+216' }, { Name: 'Turkey', Code: 'TR', Timezone: 'Turkey Standard Time', UTC: 'UTC+02:00', MobileCode: '+90' }, { Name: 'Turkmenistan', Code: 'TM', Timezone: 'West Asia Standard Time', UTC: 'UTC+05:00', MobileCode: '+993' }, { Name: 'Turks and Caicos Islands', Code: 'TC', Timezone: 'Eastern Standard Time', UTC: 'UTC-05:00', MobileCode: '+1-649' }, { Name: 'Tuvalu', Code: 'TV', Timezone: 'UTC+12', UTC: 'UTC+12:00', MobileCode: '+688' }, { Name: 'U.S. Minor Outlying Islands', Code: 'UM', Timezone: 'UTC-11', UTC: 'UTC-11:00', MobileCode: '+1' }, { Name: 'Uganda', Code: 'UG', Timezone: 'E. Africa Standard Time', UTC: 'UTC+03:00', MobileCode: '+256' }, { Name: 'Ukraine', Code: 'UA', Timezone: 'FLE Standard Time', UTC: 'UTC+02:00', MobileCode: '+380' }, { Name: 'United Arab Emirates', Code: 'AE', Timezone: 'Arabian Standard Time', UTC: 'UTC+04:00', MobileCode: '+971' }, { Name: 'United Kingdom', Code: 'GB', Timezone: 'GMT Standard Time', UTC: 'UTC', MobileCode: '+44' }, { Name: 'United States', Code: 'US', Timezone: 'Pacific Standard Time', UTC: 'UTC-08:00', MobileCode: '+1' }, { Name: 'Uruguay', Code: 'UY', Timezone: 'Montevideo Standard Time', UTC: 'UTC-03:00', MobileCode: '+598' }, { Name: 'Uzbekistan', Code: 'UZ', Timezone: 'West Asia Standard Time', UTC: 'UTC+05:00', MobileCode: '+998' }, { Name: 'Vanuatu', Code: 'VU', Timezone: 'Central Pacific Standard Time', UTC: 'UTC+11:00', MobileCode: '+678' }, { Name: 'Vatican City', Code: 'VA', Timezone: 'W. Europe Standard Time', UTC: 'UTC+01:00', MobileCode: '+379' }, { Name: 'Vietnam', Code: 'VN', Timezone: 'SE Asia Standard Time', UTC: 'UTC+07:00', MobileCode: '+84' }, { Name: 'Virgin Islands, U.S.', Code: 'VI', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-340' }, { Name: 'Virgin Islands, British', Code: 'VG', Timezone: 'SA Western Standard Time', UTC: 'UTC-04:00', MobileCode: '+1-284' }, { Name: 'Wallis and Futuna', Code: 'WF', Timezone: 'UTC+12', UTC: 'UTC+12:00', MobileCode: '+681' }, { Name: 'Yemen', Code: 'YE', Timezone: 'Arab Standard Time', UTC: 'UTC+03:00', MobileCode: '+967' }, { Name: 'Zambia', Code: 'ZM', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+260' }, { Name: 'Zimbabwe', Code: 'ZW', Timezone: 'South Africa Standard Time', UTC: 'UTC+02:00', MobileCode: '+263' }]
        };
    },
    computed: {
        ...mapStores(authUser, useWalletData)
    },
    async mounted() {
        let userID = localStorage.getItem('userID');
        userID = userID.replace(/^"|"$/g, '');
        this.userID = userID

        this.userDetail = JSON.parse(localStorage.getItem('userDetails'));
        const userData2 = JSON.parse(localStorage.getItem('userData'));
        this.userData = userData2;
        this.firstName = this.userDetail.firstName;
        this.lastName = this.userDetail.lastName;
        this.code = this.userDetail.code;
        this.country = this.userDetail.country
        this.mobileNumber = this.userDetail.mobile;
        this.email = this.userData.email;
    },
    methods: {
        async patchAuthUserData(values) {
            this.isUpdating = true;
           if(!this.selected.Name){
            
           }else{
            this.country = this.selected.Name;
            this.code = this.selected.MobileCode;
           }

           if(values.firstName){
            this.firstName = values.firstName
           }

           if(values.lastName){
            this.lastName = values.lastName
           }

           if(values.mobile){
            this.mobileNumber = values.mobile
           }

            const details = {
                details: {
                    "firstName": this.firstName,
                    "lastName": this.lastName,
                    "country": this.country,
                    "code": this.code,
                    "mobile": this.mobileNumber
                }
            };
            

            const res = await axios.patch('https://mw.bethel.network/users/' + this.userID, details, { withCredentials: true });
            console.log(res);
            if (res.error) {
                console.log(res.error);
            }
            else {
                
            }

            // reset values on input fiels
            // this.$ref.anyName.reset();
            // this.$ref.anyName2.reset();
            // this.$ref.anyName3.reset();

            // display the updated user details -------->>
            const res2 = await axios.get('https://mw.bethel.network/users/' + this.userID, { withCredentials: true });
            localStorage.setItem('userDetails', JSON.stringify(res2.data.details));
            this.userDetail = JSON.parse(localStorage.getItem('userDetails'));

            this.firstName = this.userDetail.firstName;
            this.lastName = this.userDetail.lastName;
            this.code = this.userDetail.code;
            this.mobileNumber = this.userDetail.mobile;
            this.email = this.userData.email;

            this.walletStore.userDetail.firstName = this.userDetail.firstName
            this.walletStore.userDetail.lastName = this.userDetail.lastName

            // UPDATDE STYLE STATUS
            this.updated = true;
            this.isUpdating = false;
            setTimeout(() => {
                this.updated = false;
            }, 2000);
            
        },


        async authPassword(values) {
        console.log(values)
        
        this.isPassing = true;

        const passDetails = {
            email: values.email,
            oldPassword: values.oldPassword,
            newPassword: values.newPassword
        };

        const res = await axios.patch('https://mw.bethel.network/auth/updatepassword/' + this.userID, passDetails, 
        {withCredentials : true});

        this.isPassing = false;

        if (res.error) {
            console.log(res.error);
        }
        else {
            console.log("password changes succesfully");
            this.passed = true;

            setTimeout(() => {
                this.passed = false;
            }, 3000);
        }
    },
    },
    
    components: { ErrorMessage }
}
</script>

<style scoped>
input[type=password]:focus {
  border: 2px solid #5669cc ;
  border-radius: 10px;
}

input[type=email]:focus {
  border: 2px solid #5669cc ;
  border-radius: 10px;
}

input[type=text]:focus {
  border: 2px solid #5669cc ;
  border-radius: 10px;
}

input[type=tel]:focus {
  border: 2px solid #5669cc ;
  border-radius: 10px;
}
</style>