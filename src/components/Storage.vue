<template>
<!-- storage  -->

        <div class="animate__animated animate__fadeInLeft animate__faster">

            <!-- header  -->
            <div class="flex flex-row items-center justify-between h-full bg-white shadow-lg px-2 py-2 rounded-lg">
                <div class="lg:ml-[15px] my-2">
                    <!-- storage with arrow -->
                    <div class="flex">
                        <div>
                            <h3>Storage</h3>
                        </div>

                        <!-- right arrow -->
                        <div class="ml-2">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        
                    </div>
                    <!-- end of the storage with arrrow -->

                    <!-- Main Bucket -->
                    <div>
                        <h1 class="font-bold text-[30px]">Bucket</h1>
                    </div>
                    <!-- end of the bucket main -->

                    <!-- bucket with images -->
                    <div class="flex items-center mt-2">
                        <!-- image -->
                        <div class="flex">
                            <span class=" material-symbols-outlined text-[blue] mr-2
                            ">
                                glass_cup
                            </span> 
                        </div>
                        <!-- text -->
                        <div class="flex gap-1">
                            <div>3</div>
                            <h3>Buckets</h3>
                        </div>
                    </div>
                </div>
        
                <!-- create bucktes  -->
                <div class="mr-[10px]">
                    <button @click="openAuthModal" class="border-[2px] px-2 py-2 rounded-xl bg-[#E9983C] w-[150px] text-[white] 
                        font-medium hover:text-[#E9983C] hover:bg-[white] transition-all ease-linear hover:border-[#E9983C]">Create Bucket</button>
                </div>
            </div>
            
             <!-- text of table -->
             <div class="relative mt-10">
                <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Storage History</h3> 
            </div>

            <!-- table -->
            <div class=" w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-md ">
                    <!-- start of the table -->
                    <table class="table-auto border-separate py-2 w-full rounded-lg">
                        <thead class="">
                            <tr class="">
                            <th class="text-[14px] border p-3 bg-blue-50">BUCKET NAME</th>
                            <th class="text-[14px] border p-3 bg-blue-50">ACCESS</th>
                            <th class="text-[14px] border p-3 bg-blue-50">NETWORK</th>
                            <th class="text-[14px] border p-3 bg-blue-50">DATE CREATED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="text-[12px] text-center bg-white border p-3"> --NAME--</td>
                            <td class="text-[12px] text-center bg-white border p-3">PRIVATE</td>
                            <td class="text-[12px] text-center bg-white border p-3">IPFS</td>
                            <td class="text-[12px] text-center bg-white border p-3">2023-10-14 14:00</td>
                            </tr>
                        </tbody>
                    </table>


            </div>
            

        </div>

</template>


<script>
    export default {
        name:"Storage",
        
    }
</script>