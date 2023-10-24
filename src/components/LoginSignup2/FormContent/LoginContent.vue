<template>
    <!-- content div -->
    <div class="w-full h-full lg:px-10 justify-center items-center flex flex-col">

<!-- full div bethel and upper content -->
<div class="flex py-2 lg:items-start md:items-center w-full
gap-1 ">

    <!-- bethel logo div -->
    <div class="flex md:items-center lg:justify-start md:justify-center w-full gap-1">
        <img class="w-[30px]" src="../../../img/logos/bethellogo.png" alt="">
        <h3 class="text-[#293793] font-medium ">BETHEL</h3>
    </div>

    <!--  -->
    <div>
        
    </div>
</div>
<!-- end of the upper section -->



<!-- middle section -->
<div class="flex flex-col md:items-center lg:items-start lg:justify-start w-full">

    <!-- introdution section -->
    <div class="flex flex-col mt-2 lg:text-left md:text-center">
        <h1 class="lg:text-[25px] md:text-[25px] sm:text-[25px] min-[320px]:text-[25px] text-[#293793]">Welcome to the BETHEL</h1>
        <h3 class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[14px] text-[#757784]">Please sign-in to your account and start the adventure</h3>
    </div>

    <!-- form section -->
    <div class="mt-5 w-full">
        <form action="">
            <div class="flex flex-col">
            <label for="" class="text-[14px] mb-1">Email :</label>
            <input type="text" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
            </div>

            <div class="flex flex-col w-full mt-4">
            <label for="" class="text-[14px]">Password :</label>
            <input type="password" class=" bg-transparent p-1 border-b-2 border-[#29379384] outline-none">
            <button class="w-full text-left  mt-2"><h3 class="text-[12px] text-[#293793]">Forget password?</h3></button>
            </div>

            <!-- sign in button -->
            <div class="w-full mt-4">
                <button class="w-full p-2 rounded-lg bg-[#293793] text-white">Sign In</button>
            </div>
            
        </form>

        <!-- under div -->
        <div class="w-full text-center mt-2">
            <h3 class="text-[13px] text-[#757784]">New on our platform ?
                <button class="text-[#293793]">Create an Account</button>
            </h3>
        </div>
    </div>

</div>
<!-- end of the middle section -->

    </div>
<!-- end of the content -->
</template>

<script>
export default{
    name : 'LoginContent'
}
</script>
