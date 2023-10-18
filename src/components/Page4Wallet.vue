<template>
    <div class="relative lg:px-0 md:px-5 sm:px-4 min-[320px]:px-2 animate__animated animate__fadeInLeft animate__faster">
        <!-- wallet section -->
        <div class="lg:w-[100%] md:w-[100%] sm:w-[100%] min-[320px]:w-[full]">
            <!-- head wallet div  -->
            <div class="flex items-center justify-between shadow-sm rounded-lg px-3 py-3 bg-white">
                <!-- left side text -->
                <div>
                    <!-- storage with arrow -->
                    <div class="flex">
                        <div>
                            <h3>Wallets</h3>
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
                        <h1 class="font-bold text-[30px]">Wallet</h1>
                    </div>
                    <!-- end of the bucket main -->

                    <!-- bucket with images -->
                    <div class="flex items-center mt-2">
                        <!-- image -->
                        <div class="flex">
                            <span class=" material-symbols-outlined text-[blue] mr-2
                            ">
                                wallet
                            </span> 
                        </div>
                        <!-- text -->
                        <div class="flex gap-1">
                            <div>3</div>
                            <h3>Wallets</h3>
                        </div>
                    </div>
                    <!-- end of the bucket with images -->
                </div>

                <!-- right side button -->
                <div class="flex">
                    <div>
                        <button class="border-[2px] px-2 py-2 rounded-xl bg-[#E9983C] w-[150px] text-[white] 
                        font-medium hover:text-[#E9983C] hover:bg-[white] transition-all ease-linear hover:border-[#E9983C]">Create Wallet</button>
                    </div>
                    
                </div>
            </div>


            
            <!-- wallet content section -->
            <div class="my-10">
                <!-- end of the wallet content section -->
            <!-- text of table -->
            <div class="relative ">
                <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Wallet Content</h3> 
            </div>
            

            <!-- table -->
            <div class=" w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-md ">
                <!-- start of the table -->
                <table class="table-auto border-separate py-2 w-full rounded-lg">
                    <thead class="">
                        <tr class="">
                        <th class="text-[14px] border p-3 bg-blue-50">WALLET ADDRESS</th>
                        <th class="text-[14px] border p-3 bg-blue-50">SEEDS</th>
                        <th class="text-[14px] border p-3 bg-blue-50">ACTIVE SEEDS</th>
                        <th class="text-[14px] border p-3 bg-blue-50">MORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="text-[12px] text-center bg-white border p-3"> --address of wallet--</td>
                        <td class="text-[12px] text-center bg-white border p-3">Ipv4 / Ipv6</td>
                        <td class="text-[12px] text-center bg-white border p-3">Loged In</td>
                        <td class="text-[12px] text-center bg-white border p-3">2023-10-14 14:00</td>
                        </tr>
                    </tbody>
                </table>


            </div>
            </div>
            
        </div>
        <!-- end of the wallet section -->


        <!-- transation section -->
        <div class="my-10">
            <!-- transaction making sec -->
            <div class="">
                <div class="relative mt-6">
                <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Transaction</h3> 
            </div>
            </div>
            <!-- end of the transaction making  -->

            <!-- transation  -->
            <div class="flex basis-2 flex-wrap justify-center gap-10 mt-4">
                <!-- 1st container -->
                <div class="bg-white flex flex-col items-center justify-center border-[2px] shadow-md py-[20px] px-[60px] 
                lg:w-[550px] md:w-[550px] sm:w-[550px] min-[320px]:w-[350px] rounded-lg">
                    <!-- bethel logo image -->
                    <div class="py-10">
                        <img src="../img/logos/bethellogo.png" alt="" class="w-[150px]">
                    </div>

                    <!-- input fields -->
                    <div class="flex flex-col items-center justify-center gap-4">
                        <input type="text" placeholder="Enter the wallet Address" class="w-[300px] p-2 border-2 rounded-lg border-blue-200">
                        <input type="text" placeholder="Enter the Amount" class="w-[200px] p-2 border-2 rounded-lg border-blue-200">
                        <button class="border-[2px] px-2 py-2 rounded-xl bg-[#E9983C] w-[150px] text-[white] 
                        font-medium hover:text-[#E9983C] hover:bg-[white] transition-all ease-linear hover:border-[#E9983C]">Transfer</button>
                    </div>
                </div>

                <!-- 2nd container -->
                <div class="bg-white flex flex-col items-center justify-center border-[2px] shadow-md py-[20px] px-[60px] 
                lg:w-[550px] md:w-[550px] sm:w-[550px] min-[320px]:w-[350px] rounded-lg">
                    <!-- bethel logo image -->
                    <div class="py-10">
                        <img src="../img/logos/bethellogo.png" alt="" class="w-[150px]">
                    </div>

                    <!-- input fields -->
                    <div class="flex flex-col items-center justify-center gap-4">
                        <input type="text" placeholder="Enter the wallet Address" class="w-[300px] p-2 border-2 rounded-lg border-blue-200">
                        <input type="text" placeholder="Enter the Amount" class="w-[200px] p-2 border-2 rounded-lg border-blue-200">
                        <button class="border-[2px] px-2 py-2 rounded-xl bg-[#E9983C] w-[150px] text-[white] 
                        font-medium hover:text-[#E9983C] hover:bg-[white] transition-all ease-linear hover:border-[#E9983C]">Transfer</button>
                    </div>
                </div>
            </div>
            <!-- end of the transation sec -->


            
            <div class="relative my-10">
                <!-- table of content -->
                <!-- text of table -->
                <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Transation Details</h3> 
            </div>
            
            <!-- table -->
            <div class=" w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-md ">
                <!-- start of the table -->
                <table class="table-auto border-separate py-2 w-full rounded-lg">
                    <thead class="">
                        <tr class="">
                        <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">TIME</th>
                        <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">TYPE</th>
                        <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">WALLET ADDRESS</th>
                        <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">AMOUNT</th>
                        <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3"> Future CX</td>
                        <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">14$</td>
                        <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">24-10-2023 14:00</td>
                        <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">Details</td>
                        <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">ONLINE</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div> 
        <!-- end of the transaction sec -->

        <!-- pop up model for Create wallet -->
        <div class="absolute top-0 w-[500px] bg-red-100 p-2 border-2">
            <!-- wallet details -->
            <div class="bg-gray-100 p-2">
                <h3>Wallet Details</h3>
            </div>

            <!-- wallet information main div -->
            <div class="bg-white p-6 flex flex-col flex-wrap">

                <div>
                    <h3>Your Wallet Informations</h3>
                </div>

                <div>
                    <input type="text" placeholder="5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W" class="mt-2 w-[350px] border-[2px] rounded-lg p-1">
                </div>

                <div class="mt-4">
                    <h3>Seeds</h3>
                </div>

                <!-- seeds catergory Flex -->
                <div class="p-2 flex flex-warp">
                    <!-- cards -->
                    <div class="flex gap-2">
                            <!-- card 1 -->
                        <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->
                           <!-- card 1 -->
                           <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->

                        <!-- card 1 -->
                        <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->

                        <!-- card 1 -->
                        <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->

                        <!-- card 1 -->
                        <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->

                        <!-- card 1 -->
                        <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->

                        <!-- card 1 -->
                        <div class="flex border-2 py-1 px-2 rounded-md bg-[#f6f5f5b4]">
                            <h3 class="text-[14px] text-[#706c6c]">Organ</h3>
                        </div>
                        <!-- card 1 end -->
                    </div>
                    

                    <!-- end of the cards -->
                </div>
                <!-- end of seeds catergory  -->

            </div>
            <!-- end wallet info div -->
        </div>
        <!-- end of ppop  -->
    </div>

    
    
        
</template>

<script>
export default {
    name : 'Page4Wallet'
}
</script>
