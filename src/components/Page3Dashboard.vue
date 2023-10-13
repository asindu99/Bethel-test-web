<template>
    <div :class="paddingClass" class="w-full h-full">
        <!-- 1st caption section -->
        <div class="relative">
            <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">OverView</h3> 
        </div>

        <!-- overview content flex -->
        <div class="flex mt-4 justify-evenly w-full flex-wrap gap-[40px]">

            <!-- buckets  -->
            <div class="flex flex-col gap-2 pl-3 pt-4 border-2 w-[300px] h-[120px] justify-start items-start rounded-xl shadow-md 
            hover:shadow-none hover:border-orange-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- icon and text-->
                <div class="flex items-center">
                    <img src="../img/icons/icon-bucket.png" alt="" class="w-[25px]">
                    <h2  class="text-[16px] ml-2">Buckets</h2>
                </div>

                <!-- bucket count -->
                <div class="flex ">
                    <h3 class="ml-8">Total Buckets </h3>
                    <!-- changing block -->
                    <div class="ml-2 bg-[#293793] w-[30px] text-center rounded-sm text-white">0</div>
                </div>

            </div>
            <!-- end of the bucket section -->

            <!-- Total strorage Section -->
            <div class="flex flex-col gap-2 pl-3 pt-4 border-2 w-[300px] h-[120px] justify-start items-start rounded-xl shadow-md 
            hover:shadow-none hover:border-orange-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- icon and text-->
                <div class="flex items-start">
                    <img src="../img/icons/icon-storage.png" alt="" class="w-[25px]">
                    <h2  class="text-[16px] ml-2">Storage</h2>
                </div>

                <!-- bucket count -->
                <div class="flex ">
                    <h3 class="ml-8">Total Storage</h3>
                    <!-- changing block -->
                    <div class="ml-2 bg-[#293793] w-[30px] text-center rounded-sm text-white">0</div>
                </div>

            </div>

            <!-- Bandwidth flex -->
            <div class="flex flex-col gap-2 pl-3 pt-4 border-2 w-[300px] h-[120px] justify-start items-start rounded-xl shadow-md 
            hover:shadow-none hover:border-orange-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- icon and text-->
                <div class="flex items-center">
                    <img src="../img/icons/icon-bandwidth.png" alt="" class="w-[22px]">
                    <h2  class="text-[16px] ml-2">Bandwith</h2>
                </div>

                <!-- bucket count -->
                <div class="flex ">
                    <h3 class="ml-8">Total Bandwith </h3>
                    <!-- changing block -->
                    <div class="ml-2 bg-[#293793] w-[30px] text-center rounded-sm text-white">0</div>
                </div>

            </div>

        </div>
        <!-- end of the overview content -->

        <!-- 2nd caption section -->
        <div class="relative mt-6">
            <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">Data Usage</h3> 
        </div>

        <!-- data usage content flex -->
        <div class="flex mt-4 justify-evenly w-full flex-wrap gap-6
        ">
            <!-- data usage flex -->
            <div class="flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 w-[500px] justify-start items-start rounded-xl shadow-xl">
                <!-- icon and text-->
                <div class="flex items-center">
                    <img src="../img/icons/icon-data-analize.png" alt="" class="w-[25px]">
                    <h2  class="text-[16px] ml-2">Storage Data Usage</h2>
                </div>

                <!-- storage text -->
                <div class="flex items-center">
                    <h3 class="ml-8 text-[14px]">Storage Chart</h3> <span class="material-symbols-outlined">chevron_right</span>
                </div>

                <!-- storage chart -->
                <div class="w-[450px] h-[200px] bg-blue-100">
                    <h3 class="text-center text-[13px] mt-2">--Chart goes here--</h3>
                </div>

            </div>
            <!-- end of the data usage flex -->

            <!-- data usage flex -->
            <div class="flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 w-[500px] justify-start items-start rounded-xl shadow-xl">
                <!-- icon and text-->
                <div class="flex items-center">
                    <img src="../img/icons/icon-transaction.png" alt="" class="w-[25px]">
                    <h2  class="text-[16px] ml-2">Transactions</h2>
                </div>

                <!-- storage text -->
                <div class="flex items-center">
                    <h3 class="ml-8 text-[14px]">Transactions Chart</h3> <span class="material-symbols-outlined">chevron_right</span>
                </div>

                <!-- storage chart -->
                <div class="w-[450px] h-[200px] bg-blue-100">
                    <h3 class="text-center text-[13px] mt-2">--Chart goes here--</h3>
                </div>

            </div>
            <!-- end of the data usage flex -->
        </div>
        <!-- end of the data usage flex -->
        

        <!-- 3rd caption section -->
        <div class="relative mt-6">
            <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">Recent Log Activies</h3> 
        </div>

        <!-- log activies table -->
        <div class="w-full mt-4 px-6">
            <!-- start of the table -->
            <table class="table-auto border-separate w-full">
                <thead>
                    <tr class="">
                    <th class="border p-3">User's Name</th>
                    <th class="border p-3">Ip Address</th>
                    <th class="border p-3">Log Status</th>
                    <th class="border p-3">Date and time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border p-3">User Name </td>
                    <td class="border p-3">Ipv4 / Ipv6</td>
                    <td class="border p-3">Loged In</td>
                    <td class="border p-3">2023-10-14 14:00</td>
                    </tr>
                </tbody>
            </table>


        </div>
       
    </div>
</template>

<script>
export default {
    name : 'Page3Dashboard',
    data(){
        return{
            paddingClass : 'mt-[90px] ml-[300px]'
        }
    }
}
</script>
