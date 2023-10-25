<template>
<div class="flex">

<!-- main container  -->
<div class="w-full lg:h-screen flex justify-center items-center 
lg:p-20 md:py-[10px] md:h-screen sm:p-10 min-[320px]:p-3 ">

    <div class="lg:flex-row md:flex sm:flex-col-reverse min-[320px]:flex-col
     rounded-xl shadow-lg bg-blue-50 w-full
     items-center">
        <!-- login side left  -->
        <img class="w-[550px] lg:hidden md:hidden sm:hidden min-[320px]:flex sm:w-[300px]" src="../../../img/images/Varification-Page-images/BG-mobile-verify.png" alt="">

        <div class="flex-col flex-1 px-10 lg:py-20 md:py-5 lg:w-[600px] lg:rounded-l-xl md:w-full
        min-[320px]:py-10 bg-blue-50 justify-center items-center">
        
            <!-- mobile verifcation text -->
            <div class="relative flex flex-col w-full mt-2  items-center">
                <!-- verified imgage -->
                <img src="src/img/images/Varification-Page-images/BG-Verified.png" alt="" class=" w-[150px]">

                <h3 class="lg:text-[30px] md:text-[30px] sm:text-[30px] min-[320px]:text-[25px] text-[#293793]">Mobile Verification</h3>
                <h4 class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[13px] text-center text-[#757784]">Please verify your mobile by using verification code !</h4>
            </div>

            <!-- mobile otp section -->
            <div class="flex flex-col w-full items-center justify-center gap-4 mt-10">

                <h3 class="min-[320px]:text-center lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[15px] text-center text-[#293793]">Enter the OTP code sent to your Mobile :</h3>
                <input type="number" class="text-[20px] tracking-tighter bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
                <router-link to="/"><button class="p-2 bg-[#293793] rounded-lg px-10 text-white border-[1px] hover:bg-white hover:text-[#293793] hover:border-[1px] hover:border-[#293793] transition-all ease-in-out ">Verify</button></router-link>
            </div>
        

        </div>



        <!-- image side right -->
        <div class="bg-white lg:rounded-r-xl md:rounded-t-xl sm:rounded-t-xl min[320px]:rounded-t-xl w-full lg:h-[100%] lg:flex md:flex sm:flex min-[320px]:hidden lg:flex-1 justify-center items-center overflow-hidden">
            <img class="lg:w-[800px] md:w-[400px] sm:w-[300px] md:pt-4 " src="../../../img/images/Varification-Page-images/BG-mobile-verify.png" alt="">
        </div> 
    </div>
    

</div>
<!-- end of the main container -->

</div>
</template>

<script>

</script>
