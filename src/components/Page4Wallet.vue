<template>
    <div class="relative lg:px-0 md:px-5 sm:px-4 min-[320px]:px-2 animate__animated animate__fadeInLeft animate__faster">
        <!-- wallet section -->

    <div :class="authBlur">
        <div :class="authBlur" class="lg:w-[100%] md:w-[100%] sm:w-[100%] min-[320px]:w-[full]">
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
                        <button @click="openAuthModal" class="border-[2px] px-2 py-2 rounded-xl bg-[#E9983C] w-[150px] text-[white] 
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
    </div>
        

        <!-- pop up model for Create wallet -->
        <Transition 
        enter-active-class="animate__animated animate__zoomIn animate__faster"
        leave-active-class="animate__animated animate__zoomOut">
        <div v-if="openClose" class="
        absolute lg:top-[5%] lg:left-[25%] md:top-[5%] md:left-[15%] sm:top-[5%] sm:left-[10%] min-[320px]:top-[5%] min-[320px]:left-[2%]
         lg:w-[500px] md:w-[500px] sm:w-[500px] min-[320px]:w-[350px]
          shadow-mlg bg-white rounded-2xl p-2 border-[2px]">
            <!-- wallet details -->
            <div class="realtive bg-gray-100 p-3 rounded-md">

                <!-- modal close btn -->
                <button @click="closeAuthModal" class="absolute top-5 right-4">
                    <div >
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </div>
                </button>
                <!-- end of modal close button -->

                <h3 class="text-[#293793]">Wallet Details</h3>
            </div>

            <!-- wallet information main div -->
            <div class="bg-white p-6 flex flex-col flex-wrap w-full">

                <div>
                    <h3 class="text-[#5b5b5b]">Your Wallet Informations</h3>
                </div>

                <div class="mt-2 text-[#5b5b5b]">
                    <h3 class="text-[16px]">Address</h3>
                </div>

                <div>
                    <input type="text" placeholder="5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W"
                     class="mt-2 lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-[300px]
                      border-[2px] rounded-lg p-1">
                </div>

                <div class="mt-4">
                    <h3 class="text-[#5b5b5b]">Seeds</h3>
                </div>

                <!-- seeds catergory Flex -->
                <div class="p-2 flex w-full">
                    <!-- cards -->
                    <div class="flex gap-2 flex-wrap">
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

                <!-- public key section -->
                <div>
                    <div class="mt-2 text-[#5b5b5b]">
                        <h3 class="text-[16px]">Public Key</h3>
                    </div>

                    <div>
                        <div>
                            <input type="text" placeholder="5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W" 
                            class="mt-2 lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-[300px]
                             border-[2px] rounded-lg p-1">
                        </div>
                    </div>
                </div>
                <!-- end of the public key section -->

                <!-- close and okat sec -->
                <div class="mr-2 mt-4 flex gap-2 justify-end border-t-[2px] py-2">
                    <button @click="closeAuthModal" class="border-[2px] py-2 px-4 rounded-lg bg-[#f7f5f5]">
                        <h3 class="text-[14px] text-[#293793] ">Close</h3>
                    </button>

                    <button class="border-[2px] py-2 px-4 rounded-lg bg-[#293793]">
                        <h3 class="text-[14px] text-[white] ">Okay</h3>
                    </button>

                </div>
                <!-- end of the close and okay sec -->
            </div>
            <!-- end wallet info div -->
        </div>
        </Transition>
        <!-- end of ppop  -->
    </div>

    
    
        
</template>

<script>
export default {
    name : 'Page4Wallet',
    data(){
        return{
            openClose : false,
            authBlur : ''
        }
    },

    methods : {
        openAuthModal(){
            this.openClose = true;
            this.authBlur = 'blur-md'
        },

        closeAuthModal(){
            this.openClose = false;
            this.authBlur = '';
        }
    }
}
</script>
