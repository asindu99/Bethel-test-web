<template>
    <!-- signup -->
<div class="lg:px-20 lg:py-20 h-screen">
    <div class="flex lg:h-[600px] lg:flex-row md:flex-row sm:flex-col min-[320px]:flex-col shadow:xl">
        <!-- left-side  -->
        <div class="flex bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] rounded-l-xl basis-1/2">
            <!-- image  -->
            <div class="">
                <img src="../../img/images/signup-img2.png" alt="" class="basis-1/2 lg:mt-20 lg:mx-10 md:my-40 transform lg:scale-[1.0] md:scale-[0.9] min-[320px]:scale-[0.8]">

            </div>

        </div>

        <!-- right-side  -->
        <div class="flex bg-white rounded-r-xl min-[320px]:flex-col-reverse basis-1/2">
           <router-view></router-view>
        </div>

    </div>  
</div>
</template>

<script>
export default {
    name : 'Signup'
}
</script>
