<template>
    <div class="flex h-auto lg:mt-16 md:mt-6 sm:mt-2 min-[320px]:mt-2 justify-center items-center">
        <!-- main container div -->
        <div class="flex lg:flex-row md:flex p-2 sm:flex min-[320px]:flex-col border-2 bg-white shadow-lg rounded-xl mx-8">

            <!-- image sec -->
            <div class="">
                <img src="../../img/images/Varification-Page-images/Verfication-img.jpg" alt="" class="lg:w-[600px] lg:h-full
                 md:w-[500px] ">
            </div>


            <!--------- router view section  ---------------->
            <div class="p-3 flex bg-blue-50 items-center rounded-lg">
                <router-view></router-view>
            </div>
            

        </div>
        <!-- end of the main caontainer div -->
    </div>
</template>

<script>

export default {
    name : 'MobileVerifyComp',
    components : {
        
    }
}
</script>
