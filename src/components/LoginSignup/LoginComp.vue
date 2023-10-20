<template>
    <div>
       <!-- login -->
    <div class="flex flex-row items-center justify-end my-20 mx-[300px] shadow-xl">
        <!-- left-side  -->
        <div class="flex min-[320px]:flex-col w-[500px] h-[550px] bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]">
            <img src="../../img/images/login-image.png" alt="" class=" rounded-l-xl  scale-[0.8] my-[50px]">
    
        </div>
        
        <!-- right-side  -->
        <div class="flex flex-col light w-[500px] h-[550px] rounded-r-xl">
            <div class="flex flex-row">
                <img src="../../img/logos/bethellogo.png" alt="" class="w-[30px] h-[30px] ml-[40px] mt-[20px]">
                <span class="font-bold text-xl mt-[20px] font-['Montserrat']">BETHEL</span>
            </div>
    
            <div class="py-20 px-20">
                <form>
                    <!-- Email -->
                    <div>
                        <label for="" class="font-['Montserrat'] text-[14px]">Email</label><br>
                        <input type="text" placeholder="  john@gmail.com" class="lg:border-2 border-[#4e78c0] text-[D3D3D3] bg-light opacity-25 w-[300px] h-[40px] rounded-md">
                        
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
</template>

<script>
export default {
    name : 'LoginComp'
}
</script>
