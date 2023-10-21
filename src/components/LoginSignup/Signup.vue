<template>
    <!-- signup -->
<div class="h-screen">
    <div class="flex lg:flex-row shadow:xl lg:p-12">
        <!-- left-side  -->
        <div class="lg:h-[600px] bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] lg:rounded-l-xl">
            <!-- image  -->
            <div class="">
                <img src="../../img/images/signup-img2.png" alt="" class="lg:mt-20 lg:mx-20 lg:transform  lg:scale-[1.1]">

            </div>

        </div>

        <div class="lg:h-[600px] bg-white lg:rounded-r-xl">
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
