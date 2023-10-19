<template>
    <!-- content section div -->
    <div class="relative p-3 flex bg-blue-50  items-center rounded-lg">
                <!-- content -->
                <div class="flex flex-col w-full px-3">
                    <!-- verify account -->
                    <div class="flex flex-col justify-center text-center mb-6">
                        <h3 class="lg:text-[30px] md:text-[30px] sm:text-[30px] min-[320px]:text-[18px] font-medium text-blue-400 ">Confirm Number</h3>
                        <p class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[12px]">Please enter the Code that sent to your Mobile</p>
                    </div>

                    <!-- country selection sector -->
                    <div class="mt-6">
                        <form action="" class="flex flex-col items-center">

                            <label for="cars" class="mt-6 lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[12px]">Enter the Code :</label>
                            <input type="number" class="p-1 bg-transparent border-b-2 border-blue-300 mx-2">
                                
                            <button type="submit" class="mt-4 border-2 p-1 bg-blue-300 rounded-md w-[100px]">Confirm</button>

                        </form>
                    </div>

                    <router-link to="/Mobile-Verfication">
                       <div class="absolute top-[-40px] left-[0] flex items-center">
                        <img src="../../img/icons/icons-back.png" alt="" class="w-[20px]">
                        <h3 class="text-[12px] text-[gray] ml-1">back</h3>
                        </div> 
                    </router-link>
                    
                    
                </div>
                <!-- end of the content -->
                <!---------- end of router view ----------->
    </div>
</template>

<script>
export default{
    name : 'NumberVerifyComp'
}
</script>
