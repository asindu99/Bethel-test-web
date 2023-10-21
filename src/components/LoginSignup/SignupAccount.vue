<template>
    <!-- right-side  -->
    <div class="lg:h-[600px] bg-white lg:rounded-r-xl">
        <div class="flex lg:flex-row lg:items-center lg:justify-center lg:ml-[-100px]">
            <div class="flex lg:flex-row lg:cursor-pointer">
                <div class="flex lg:items-center lg:justify-center bg-[#293793] lg:w-[50px] lg:h-[50px] lg:m-10 lg:rounded-md">
                    <!-- <img src="./img/home.svg" alt="" class=""> -->
                    <span class="material-symbols-outlined text-white">
                        home
                    </span>
                </div>

                <div class="flex items-center">
                   <router-link to="/">
                    <p class="lg:font-['Montserrat'] lg:text-[#293793]"><span class="lg:font-bold lg:text-[12px]">Account Information</span> <br> <span>Enter username</span></p>
                   </router-link> 
                </div>
            </div>

            <router-link to="/signup/signup-personal">
                <div class="flex lg:flex-row lg:cursor-pointer">
                    <div class="flex lg:items-center lg:justify-center lg:bg-[#808080] lg:w-[50px] lg:h-[50px] lg:m-10 lg:rounded-md">
                        <!-- <img src="./img/home.svg" alt="" class=""> -->
                        <span class="material-symbols-outlined text-white">
                            person
                        </span>
                    </div>

                    
                        <div class="flex items-center">
                            <p class="lg:font-['Montserrat'] lg:text-[#808080]"><span class="lg:font-bold">Personal Information</span> <br> <span>Enter Information</span></p>
                        </div>
                </div>
            </router-link>
        </div>

        <div>
            <div class="lg:ml-[-80px]">
                <p class="lg:font-['Montserrat'] lg:ml-40"><span class=" lg:text-[20px] lg:font-bold">Account Information</span><br><span class="lg:pt-[50px]">Enter your email address & password details !</span></p>
            </div>

            <div>
                <form action="">
                    <!-- email  -->
                    <div class="lg:m-10 lg:pl-10">
                        <label for="" class="lg:font-['Montserrat'] text-[13px]">Email</label><br>
                        <input type="text" placeholder="  john@example.com" class="lg:border-2 border-[#4e78c0] text-[D3D3D3] bg-light lg:opacity-25 lg:w-[580px] lg:h-[40px] lg:rounded-md">
                    </div>

                    <!-- password  -->
                    <div class="flex flex-row  lg:mt-[-60px]">
                        <!-- password  -->
                        <div class="lg:m-10 lg:pl-10">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">Password</label><br>
                            <div class="flex lg:flex-row lg:relative">
                                <input type="password" placeholder="  password" class="lg:border-2 lg:border-[#4e78c0] lg:text-[D3D3D3] lg:bg-light lg:opacity-25 lg:w-[250px] lg:h-[40px] lg:rounded-md">
                                
                                <div class="flex lg:absolute lg:right-[15px] lg:p-[10px]">
                                    <img src="../../img/images/LoginSignup-page-images/visibility-lock.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <!-- confirm password  -->
                        <div class="lg:m-10">
                            <label for="" class="lg:font-['Montserrat'] text-[13px]">Confirm Password</label><br>
                            <div class="flex lg:flex-row lg:relative">
                                <input type="password" placeholder="  confirm password" class="lg:border-2 lg:border-[#4e78c0] lg:text-[D3D3D3] lg:bg-light lg:opacity-25 lg:w-[250px] lg:h-[40px] lg:rounded-md">
                                
                                <div class="flex lg:absolute lg:right-[15px] lg:p-[10px]">
                                    <img src="../../img/images/LoginSignup-page-images/visibility-lock.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- button  -->
                    <router-link to="/signup/signup-personal">
                        <button class="lg:font-['Montserrat' lg:bg-[#293793] lg:w-[250px] lg:h-[40px] lg:rounded-md lg:shadow-lg lg:text-white lg:opacity-85 lg:ml-[410px] transition duration-300 ease-in-out 
                            hover:bg-[#293793]">Next Step</button>
                    </router-link>
                </form>

                <div class="lg:m-10">
                    <p class="lg:font-[montserrat] lg:text-[13px] lg:text-center lg:text-[14px]"> <span>Already have an account?</span> <RouterLink to="/login"><a href="#" class="lg:text-[#293793] lg:cursor-pointer">Sign in Instead </a></RouterLink> </p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {

name:"SignupAccount",

}
</script>