<template>
    <div class="flex">

        <!-- main container  -->
        <div class="w-full lg:h-screen flex justify-center items-center 
        lg:p-20 md:py-[10px] md:h-screen sm:p-10 min-[320px]:p-3 ">

            <div class="lg:flex-row md:flex sm:flex-col-reverse min-[320px]:flex-col
             rounded-xl shadow-lg bg-white w-full">
                <!-- login side left  -->

                <img class="w-[600px] lg:hidden md:hidden sm:hidden min-[320px]:flex sm:w-[300px]" src="../../img/images/LoginSignup-page-images/BG-login.png" alt="">

                <div class="flex flex-1 px-10 lg:py-10 md:py-5 lg:w-[600px] lg:rounded-l-xl md:w-full
                min-[320px]:py-10 bg-blue-50">

                    <!-- import another side components -->
                    <SignupContent/>

                </div>



                <!-- image side right -->
                <div class="lg:flex md:flex sm:flex min-[320px]:hidden lg:flex-1 justify-center items-center overflow-hidden w-full">
                    <img class="lg:w-[800px] md:w-[400px] sm:w-[300px] md:pt-4" src="../../img/images/LoginSignup-page-images/BG-login.png" alt="">
                </div> 
            </div>
            

        </div>
        <!-- end of the main container -->

    </div>
</template>

<script>
import LoginContent from '@/components/LoginSignup2/FormContent/LoginContent.vue';
import SignupContent from '@/components/LoginSignup2/FormContent/SignupContent.vue';


export default {
    name : 'LoginComp',
    components : {
        LoginContent,
        SignupContent,
    }
}

</script>
