<template>
<!-- storage  -->

        <div class="flex flex-col lg:mb-40 bg-red-500 w-[100%]">

            <!-- header  -->
            <div class="flex flex-row justify-between sm:justify-between w-full h-[130px] bg-white shadow-lg">
                <div class="lg:ml-[15px] lg:mt-[15px]">
                    <p class="font-['Montserrat']"><span class="text-md">Storage></span><br>
                        <span class="text-3xl font-bold">Storage</span><br>
                        <div class="flex flex-row">
                            <img src="../img/images/storage.svg" alt="">
                                
                            <span class=" lg:ml-[5px]">1 Storage</span>
                        </div>
                    </p>
                </div>
        
                <!-- create bucktes  -->
                <div class="mr-[10px]">
                    <button class="flex items-center justify-center ml-10 border-2 w-[200px] h-[50px] rounded-lg bg-gradient-to-r from-[#F48320] to-[#f8b878] shadow-lg text-white text-center font-['Montserrat'] mt-[30px] cursor-pointer">Create Bucket</button>
                </div>
            </div>
  

            <!-- storage table  -->
            <div  class="flex items-center justify-center w-full bg-white mt-20">
                <div class="font-['Montserrat'] lg:mt-10 lg:ml-[21px] text-xl font-bold">

                    <span></span>

                </div>


                <div class="bg-light lg:px-4 w-full">
                    <table class="w-full border-separate border-spacing-2 border border-none">

                        <tr class=" bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] text-[13px]">
                        <th class="font-['Montserrat'] font-bold text-center">STORAGE NAME</th>
                        <th class="font-['Montserrat'] font-bold text-center">ACCESS</th>
                        <th class="font-['Montserrat'] font-bold text-center">NETWORK</th>
                        <th class="font-['Montserrat'] font-bold text-center">DATE CREATED</th>
                        </tr>

                        <tr class="bg-[#f5f5f5]">
                            <td class="text-center p-3 font-['Montserrat'] text-[14px]">ABCD</td>
                            <td class="text-center font-['Montserrat'] text-[14px]">Private</td>
                            <td class="text-center font-['Montserrat'] text-[14px]">IPFS</td>
                            <td class="text-center font-['Montserrat'] text-[14px]">2023-10-13 06:46:10 -0400</td>

                        </tr>
                        <tr class="">
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center "></td>
                        </tr>
                        <tr class="">
                            <td class="text-center "></td>
                            <td class="text-center "></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                        </tr>
                    </table>

                </div>
            </div>

        </div>

</template>


<script>
    export default {
        name:"Storage",
        
    }
</script>