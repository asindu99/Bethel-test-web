<template>
<div class="flex">

<!-- main container  -->
<div class="w-full lg:h-screen flex justify-center items-center 
lg:p-20 md:py-[10px] md:h-screen sm:p-10 min-[320px]:p-3 ">

    <div class="lg:flex-row md:flex sm:flex-col-reverse min-[320px]:flex-col
     rounded-xl shadow-lg bg-white w-full">
        <!-- login side left  -->

        <img class="w-[600px] lg:hidden md:hidden sm:hidden min-[320px]:flex sm:w-[300px]" src="../../../img/images/LoginSignup-page-images/bg-login1.jpg" alt="">

        <div class="flex flex-1 px-20 lg:py-20 md:py-5 lg:w-[600px] lg:rounded-l-xl md:w-full
        min-[320px]:py-10 bg-blue-50">
            <!-- left side log in content -->
            <div class="flex flex-col w-full items-start justify-center">
                    <!-- TOP CAPTION SEC -->
                <div class="w-full text-center">
                    <h3 class="text-[#293793] font-bold text-[25px]">Welcome to the BETHEL!</h3>
                    <p class="text-[#757784] text-[14px]">Please sign in to the your account and start the adventure!</p>
                </div>
                <!-- END OF TOP CAPTION SEC -->

                <!-- form section -->
                <div class="mt-10 w-full">
                    <form action="" class="flex flex-col">
                        <div class="flex flex-col">
                            <label for="" class="text-[14px]">Email :</label>
                            <input type="text" placeholder="Jhon@example.com" class="text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384]
                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ">
                        </div>
                    
                        <div class="flex flex-col mt-6">
                            <label for="" class="text-[14px]">Password :</label>
                            <input type="password" placeholder="Password"
                            class="mt-2 text-[#757784] bg-transparent p-1 border-b-2 border-[#29379384]
                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ">
                            <button class=""><h3 class="text-[#293793] text-[12px] mt-2 text-right">forgot password?</h3></button>
                        </div>

                        <div class="w-full mt-8">
                            <button class="w-full p-2 bg-[#293793] rounded-lg px-10  text-white border-[1px] hover:bg-white hover:text-[#293793] hover:border-[1px] hover:border-[#293793] transition-all ease-in-out">Sign in</button>
                        </div>
                    </form>
                </div>
                <!-- end of the form sec -->

                <!-- new account creation -->
                <div class="w-full text-center mt-2">
                    <h3 class="text-[#999898] text-[14px]">New to our platform ? <router-link to="/signup"><span class="text-[#29379386]">Create an account</span></router-link> </h3>
                </div>

            </div>
            <!-- end of the left side content -->
        
        </div>



        <!-- image side right -->
        <div class="lg:flex md:flex sm:flex min-[320px]:hidden lg:flex-1 justify-center items-center overflow-hidden w-full">
            <img class="lg:w-[800px] md:w-[400px] sm:w-[300px] md:pt-4" src="../../../img/images/LoginSignup-page-images/bg-login1.jpg" alt="">
        </div> 
    </div>
    

</div>
<!-- end of the main container -->

</div>
</template>

<script>
export default{
    name : 'LoginContent'
}
</script>
