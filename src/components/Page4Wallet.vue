<template>
    <div class="relative lg:px-0 md:px-5 sm:px-4 min-[320px]:px-2">
        <!-- wallet section -->

    <div :class="authBlur" class="px-2">
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
                            <div>{{ walletCount }}</div>
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
            <!-- end of the head section -->


            
            <!-- wallet content section -->
            <div class="my-10">
                <!-- end of the wallet content section -->
            <!-- text of table -->
            <div class="relative ">
                <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Wallet Content</h3> 
            </div>
            

            <!-- wallet table -->
            <div class=" w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-sm ">
                <!-- start of the table -->
                <table class="table-auto border-separate py-2 w-full rounded-lg">
                    <thead class="">
                        <tr class="">
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">WALLET ADDRESS</th>
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">SEEDS</th>
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">ACTIVE SEEDS</th>
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">MORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="wallet in walletTableArr" :key="wallet.Waddress">
                        <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3"> {{wallet.publicKeys}}</td>
                        <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">{{wallet.walletAddress}}</td>
                        <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">{{ wallet.Active }}</td>
                        
                        <!-- toogle button table data -->
                        <!-- <td class="text-[12px] text-center bg-white border p-3">
                            
                            <button @click="showSeedValue = !showSeedValue">
                                
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                            </button>

                        </td> -->
                        <!-- end of tooge button table data -->

                        <!-- more button functions -->
                        <td class="text-[12px] text-center bg-white border p-3">
                            <div class="relative w-full">
                                <!-- more button auth modal -->
                                <div class="absolute right-[-15px] w-[60px] shadow-md border-[1px] bg-blue-50 rounded-md top-10 animate__animated animate__zoomIn animate__faster">
                                    <button @click="deleteWalletData(wallet)">
                                        <div class="p-1">
                                            <h3>Delete</h3>
                                        </div>
                                    </button>
                                    
                                </div>
                            <!-- end of the auth modal -->
                            </div>
                            <button>
                                <span class="material-symbols-outlined">more_vert</span>
                            </button>
                        </td>
                        <!-- more button end --> 
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
                        <img src="../img/icons/icon-upload.png" alt="" class="w-[150px] opacity-25">
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
                        <img src="../img/icons/icon-upload-download.png" alt="" class="w-[150px] opacity-25 ">
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
            
            <!--  transaction table -->
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


                <!-- adding a form -->
                <form action="" @submit.prevent="handleSubmit">
                        <div class="mt-2 text-[#5b5b5b]">
                        <h3 class="text-[16px]">Address</h3>
                    </div>

                    <div>
                        <input type="text" placeholder="5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W5FxUz8N6BztaerGhJYpjL5gTGBFZevK96vjpvxsWvs6QgJ7W"
                        class="mt-2 lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-[300px]
                        border-[2px] rounded-lg p-1" >
                    </div>

                    <div class="mt-4">
                        <h3 class="text-[#5b5b5b]">Seeds</h3>
                    </div>

                    <!-- seeds catergory Flex -->
                    <div class="p-2 flex w-full">
                        <!-- seeds -->
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
                        <!-- end of the seeds -->
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

                        <button @click="addData" type="submit" class="border-[2px] py-2 px-4 rounded-lg bg-[#293793]">
                            <h3 class="text-[14px] text-[white] ">Okay</h3>
                        </button>

                    </div>
                </form>
                <!-- end of the form -->
                
                <!-- end of the close and okay sec -->
            </div>
            <!-- end wallet info div -->
        </div>
        </Transition>
        <!-- end of pop up modal  -->

    </div>

    
    
        
</template>

<script>
export default {
    name : 'Page4Wallet',
    data(){
        return{
            // moreButton open and close
            isMore : false,

            // wallet auth model open and close
            openClose : false,

            // auth model blur
            authBlur : '',

            // show seeds
            showSeedValue : false,

            // wallet table data
            walletTableArr : [],
            walletAuthModalData : {
                publicKeys : 'Publickkey1231413',
                walletAddress : 'ipv4/dsfsdfsdfs',
                Active : 'Online',
            },

            // wallets count
            walletCount : 0,
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
        },
        deleteWalletData(wallet){
            this.walletTableArr = this.walletTableArr.filter((item) => {
                return wallet !== item
            });
            this.walletCount = this.walletCount - 1 ;
        }, 
        addData(){
            this.walletTableArr.push(this.walletAuthModalData);
            this.openClose = false;
            this.authBlur = '';
            console.log(this.walletTableArr);
            this.walletCount = this.walletCount + 1 ;
        },
        handleSubmit(values){
            console.log(values)
        }
    }
}
</script>
