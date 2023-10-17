<template>
    <div class="w-full px-2">
        <!-- access key name -->
        <div class="relative">
            <div class="w-[4px] h-[40px] bg-[#293793] absolute top-[10px] "></div>
            <h3 class="ml-4 text-[40px]">Access Keys</h3> 
        </div>
        <!-- end of the access key name -->

        <!-- access keys table content -->
        <div class="py-1 px-2 bg-white rounded-lg my-2">
            <!-- start of the table -->
            <table class="table-auto border-separate py-2 w-full rounded-lg">
                    <thead class="">
                        <tr class="">
                        <th class="text-[14px] border p-3 bg-blue-50">USER NAME</th>
                        <th class="text-[14px] border p-3 bg-blue-50">KEY</th>
                        <th class="text-[14px] border p-3 bg-blue-50">SECRET</th>
                        <th class="text-[14px] border p-3 bg-blue-50">CREATED ON</th>
                        <th class="text-[14px] border p-3 bg-blue-50">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="text-[12px] text-center bg-white border p-3"> Future CX</td>
                        <td class="text-[12px] text-center bg-white border p-3">14$</td>
                        <td class="text-[12px] text-center bg-white border p-3">24-10-2023 14:00</td>
                        <td class="text-[12px] text-center bg-white border p-3">Details</td>
                        <td class="text-[12px] text-center bg-white border p-3">ONLINE</td>
                        </tr>
                    </tbody>
            </table>
            <!-- end of the table -->

        </div>
        <!-- end of the access key content -->

        <!-- start of middle -->
        <div>
            <!-- S3 API Endpoint -->
            <div class="relative mt-6 ">
                <div class="w-[4px] h-[25px] bg-[#293793] absolute top-[6px] "></div>
                <h3 class="ml-4 text-[25px] font-medium">S3 API Endpoint</h3> 
            </div>  
            <!-- end of the S3 API Endpoint -->

            <div class="mt-2">
                <form action="" class="flex gap-2">
                    <input type="text" class="w-[250px] border-[2px] rounded-lg px-3" placeholder="https://s3.filebase.com">
                    <!-- button -->
                    <div class="flex items-center gap-2 border-[2px] px-1 py-1 rounded-lg bg-white">
                        <button class="text-[15px] ml-1 text-[#293793]">Copy</button>
                        <img src="../img/icons/icons-copy.png" alt="" class="w-[20px] h-[20px]">

                    </div>
                    <!-- end of buttton -->
                    
                </form>
            </div>

        </div>
        <!-- end of the middle -->
        


    </div>
</template>

<script >
export default {
    name : 'Page5AccessKey'
}

</script>
