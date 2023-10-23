<template>
    <div class="flex h-auto lg:mt-16 md:mt-6 sm:mt-2 min-[320px]:mt-2 justify-center items-center">
        <!-- main container div -->
        <div class="flex lg:flex-row md:flex-col p-2 sm:flex min-[320px]:flex-col border-2 bg-white shadow-lg rounded-xl mx-8">

            <!-- image sec -->
            <div class="">
                <img src="src/img/images/LoginSignup-page-images/BG-img1.jpg" alt="" class="lg:w-[500px] lg:h-full
                 md:w-[500px] scale-[0.8]">
            </div>
            
            <!-- right-side  -->
            <div class="p-3 flex bg-blue-50 items-center rounded-lg">
                <div class="flex flex-col w-[500px] h-[550px] rounded-r-xl">
                    <div class="flex flex-row mt-6">
                        <img src="../../img/logos/bethellogo.png" alt="" class="w-[30px] h-[30px] ml-[80px] mt-[20px]">
                        <span class="font-bold text-xl mt-[20px] font-['Montserrat']">BETHEL</span>
                    </div>
            
                    <div class="py-10 px-20 mt-10 bg-blue-100 ">
                        <form>
                            <!-- Email -->
                            <div>
                                <label for="" class="font-['Montserrat'] text-[14px]">Email</label><br>
                                <input type="text" placeholder="  john@gmail.com" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[300px] h-[40px] rounded-md">
                                
                            </div><br>
            
                            <!-- password -->
                            <div class="mb-[15px]">
                                    <label for="" class="font-['Montserrat'] text-[14px]">Password</label><br>
                                    <div class="flex flex-row relative">
                                        <input type="password" placeholder="  password" class="border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[300px] h-[40px] rounded-md">
                                        
                                        <div class="flex absolute right-[40px] p-[10px]">
                                            <img src="../../img/images/LoginSignup-page-images/visibility-lock.svg" alt="">
                                        </div>
                                    </div>
                            </div>
            
                        <!-- button  -->
                        <div class="mb-[10px]">
                                <button class="border-2 bg-[#293793] w-[300px] h-[40px] rounded-lg text-white shadow-lg hover:bg-none hover:border-[#293793]">Sign In</button>
                        </div>
                        
                        <!-- checkbox  -->
                        <div class="flex items-center">
                                <input type="checkbox" class="w-[18px] h-[18px]">
                                <span class="font-['Montserrat'] text-[13px] text-center pl-[10px]">Accept Terms & Conditions*</span>
                        </div>
            
            
                        </form><br>
            
                        <div class="pt-[10px] pl-[10px]">
                            <p class="font-[montserrat] text-[13px]"> <span>New on our platform?</span> <RouterLink to="/signup" class="text-[#293793] cursor-pointer ">Create an account</RouterLink> </p>
                        </div>
                    </div>
            
            </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name : 'LoginComp'
}
</script>
