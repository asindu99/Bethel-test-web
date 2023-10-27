<template>
    <div class="px-2 flex flex-col gap-4 w-full font-['Montserrat']">
            <!-- header  -->
            <div class="flex flex-row items-center justify-between h-full bg-white shadow-lg px-2 py-2 rounded-lg">
                <div class="lg:ml-[30px] my-2">
                    <!-- billing with arrow -->
                    <div class="flex">
                        <div>
                            <h3>Billing</h3>
                        </div>

                        <!-- right arrow -->
                        <div class="ml-2">
                            <span class="material-symbols-outlined">
                                chevron_right
                            </span>
                        </div>
                        
                    </div>
                    <!-- end of the billing with arrrow -->

                    <!-- Main billing -->
                    <div>
                        <h1 class="font-bold text-[30px]">Billing</h1>
                    </div>
                    <!-- end of the billing main -->

                    <!-- bi with images -->
                    <div class="flex items-center mt-2">
                        <!-- image -->
                        <div class="flex">
                            <span class="material-symbols-outlined text-[blue] mr-2">
                                monetization_on
                            </span>
                        </div>
                        <!-- text -->
                        <div class="flex gap-1">
                            <h3>Price Plans</h3>
                        </div>
                    </div>
                </div>
            </div>
    

            <!-- pricing plans  -->
            <div class="flex basis-2/4 px-6">
                <div class="flex lg:flex-row min-[320px]:flex-col md:flex-col-2 gap-6">

                    <!-- plan-1  -->
                    <div class="basis-1/4 shadow-xl rounded-lg bg-[#F48320] bg-opacity-75 min-[320px]:pb-10 mt-10">
                            <div> <h4 class="m-10 font-bold text-2xl">Free</h4></div>

                           <div> <p class="m-10">Features for creators and developers who need more storage.</p></div>

                            <div><p  class="m-10"><span class="font-bold text-2xl">$0</span><span> /mo</span></p></div>

                            
                            <div class="font-['Montserrat'] text-center font-bold">Your Current Plan</div>

                            <div><p class="mx-10 mt-[60px] font-bold">What's included</p></div>

                            <div class="flex flex-row mx-10 mt-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">Unlimited Files</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">200 GB Storage</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">400 GB Bandwidth</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">3 Dedicated IPFS Gateways</p>
                                
                            </div>
            
                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">IPFS Pinning Service API</p>
                                
                            </div>

                    </div>

                    <!-- plan-2  -->
                    <div class="basis-1/4 bg-white shadow-xl rounded-lg pb-4 mt-10">
                        <div class="">
                            <div><h4 class="m-10 font-bold text-2xl">Starter</h4></div>

                            <div><p class="m-10">Features for creators and developers who need more storage.</p></div>

                            <div><p  class="m-10"><span class="font-bold text-2xl">$20</span><span> /mo</span></p></div>

                            <div class="px-10 ">
                                <button class="border-2 w-[150px] h-[40px] rounded-lg bg-gradient-to-r from-[#F48320] to-[#f8b878] shadow-lg hover:bg-none hover:border-[#F48320] text-white hover:text-[#000000]">Select Starter</button>
                        
                            </div>

                            <div><p class="mx-10 mt-[50px] font-bold">What's included</p></div>

                            <div class="flex flex-row mx-10 mt-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">Unlimited Files</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">200 GB Storage</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">400 GB Bandwidth</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">3 Dedicated IPFS Gateways</p>
                                
                            </div>
            
                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">IPFS Pinning Service API</p>
                                
                            </div>

                        </div>
                        
                    </div>

                    <!-- plan-3  -->
                    <div class=" basis-1/4 bg-white shadow-xl rounded-lg pb-4  mt-10">
                            <div><h4 class="m-10 font-bold text-2xl">Pro</h4></div>

                            <div><p class="m-10">Features for creators and developers who need more storage.</p></div>

                            <div><p  class="m-10"><span class="font-bold text-2xl">$100</span><span> /mo</span></p></div>

                            <div class="px-10 ">
                                <button class="border-2 w-[150px] h-[40px] rounded-lg bg-gradient-to-r from-[#F48320] to-[#f8b878] shadow-lg hover:bg-none hover:border-[#F48320] text-white hover:text-[#000000]">Select Pro</button>
                        
                            </div>

                            <div><p class="mx-10 mt-[50px] font-bold">What's included</p></div>

                            <div class="flex flex-row mx-10 mt-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">Unlimited Files</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">1000 GB Storage</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">2000 GB Bandwidth</p>
                                
                            </div>

                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">3 Dedicated IPFS Gateways</p>
                                
                            </div>
            
                            <div class="flex flex-row mx-10">
                                <span class="material-symbols-outlined">
                                    done
                                </span>
                                <p class="pl-[10px]">IPFS Pinning Service API</p>
                                
                            </div>

                    </div>

                    <!-- plan-4  -->
                    <div class="basis-1/4 bg-white shadow-xl rounded-lg pb-4  mt-10">
                        <h4 class="m-10 font-bold text-2xl">Buisness</h4>
                        
                        <p class="m-10">Features for creators and developers who need more storage.</p>

                        <p  class="m-10"><span class="font-bold text-2xl">$500</span><span> /mo</span></p>

                        <div class="px-10 ">
                            <button class="border-2 w-[150px] h-[40px] rounded-lg bg-gradient-to-r from-[#F48320] to-[#f8b878] shadow-lg hover:bg-none hover:border-[#F48320] text-white hover:text-[#000000]">Select Buisness</button>
                    
                        </div>
                        
                        <p class="mx-10 mt-[50px] font-bold">What's included</p>

                        <div class="flex flex-row mx-10 mt-10">
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            <p class="pl-[10px]">Unlimited Files</p>
                            
                        </div>

                        <div class="flex flex-row mx-10">
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            <p class="pl-[10px]">1000 GB Storage</p>
                            
                        </div>

                        <div class="flex flex-row mx-10">
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            <p class="pl-[10px]">2000 GB Bandwidth</p>
                            
                        </div>

                        <div class="flex flex-row mx-10">
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            <p class="pl-[10px]">3 Dedicated IPFS Gateways</p>
                            
                        </div>

                        <div class="flex flex-row mx-10">
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            <p class="pl-[10px]">IPFS Pinning Service API</p>
                            
                        </div>

                    </div>
                </div>
            </div>

            <!-- billing History -->

            <div class="mb-10">
             <!-- text of table -->
                <div class="relative mt-10 ml-10">
                    <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                    <h3 class="ml-4 text-[20px]">Billing History</h3> 
                </div>

                <div class="mx-10 mt-4 bg-white rounded-lg px-2 shadow-md">
                    <!-- start of the table -->
                    <table class="table-auto border-separate py-2 w-full rounded-lg">
                        <thead class="">
                            <tr class="">
                            <th class="text-[14px] border p-3 bg-blue-50">DATE</th>
                            <th class="text-[14px] border p-3 bg-blue-50">DESCRIPTION</th>
                            <th class="text-[14px] border p-3 bg-blue-50">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="text-[12px] text-center bg-white border p-3">10/09/2023</td>
                            <td class="text-[12px] text-center bg-white border p-3">Oct 2023 Invoice</td>
                            <td class="text-[12px] text-center bg-white border p-3">$0.00</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name:"Billing",
        
    }
</script>