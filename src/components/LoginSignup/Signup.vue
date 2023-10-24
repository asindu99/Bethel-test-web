<template>
    <div class="flex h-auto lg:mt-8 md:mt-6 sm:mt-2 min-[320px]:mt-2 justify-center items-center">
        <!-- main container div -->
        <div class="flex lg:flex-row md:flex-col p-2 sm:flex min-[320px]:flex-col border-2 bg-white shadow-lg rounded-xl mx-8">

            <!-- image sec -->
            <div class="flex justify-center">
                <img src="../../img/images/LoginSignup-page-images/BG-img2.jpg" alt="" class="lg:w-[600px] lg:h-full
                 md:w-[500px] transform lg:scale-x-[0.8] lg:scale-y-[0.6] md:scale-[0.9] min-[320px]:w-[300px]">
            </div>
            
            <div class="p-3 flex bg-blue-50 items-center rounded-lg">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'Signup',
    components : {
        
    }
}
</script>
