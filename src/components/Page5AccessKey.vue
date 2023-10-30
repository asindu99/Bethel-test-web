<template>
    
    <div class="w-full px-2">
        <!-- access key name -->
        <!-- head wallet div  -->
        <div class="flex items-center justify-between shadow-sm rounded-lg px-3 py-3 bg-white">
                <!-- left side text -->
                 <div>
                    <!-- storage with arrow -->
                    <div class="flex">
                        <div>
                            <h3>Access Keys </h3>
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
                        <h1 class="font-bold text-[30px]">Access Keys </h1>
                    </div>
                    <!-- end of the bucket main -->
                </div>
            </div>
        <!-- end of the head key name -->

         <!-- text of table -->
         <div class="relative mt-10">
                <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Access Keys Details</h3> 
            </div>

        <!-- access keys table content -->
        <div class="mt-4 py-1 min-[320px]:px-[4px] sm:px-2 md:px-2 lg:px-2 bg-white rounded-lg my-2">
            <!-- start of the table -->
            <table class="table-auto border-separate py-1 w-full rounded-lg">
                    <thead class="">
                        <tr class="">
                        <th class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">USER NAME</th>
                        <th class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">KEY</th>
                        <th class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">SECRET</th>
                        <th class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">CREATED ON</th>
                        <th class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">STATUS</th>
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
            <div class="relative mt-10 ">
                <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px] font-medium">S3 API Endpoint</h3> 
            </div>  
            <!-- end of the S3 API Endpoint -->

            <div class="mt-2">
                <form action="" class="flex gap-2">
                    <input v-on:focus = $event.target.select()
                    ref = "clone"
                    :value="text"
                    readonly
                     type="text"
                      class="w-[250px] border-[2px] rounded-md px-3" placeholder="https://s3.filebase.com">
                    <!-- button -->
                    <button @click.prevent="copy" class="text-[15px] text-bethelBlue"><div class="flex items-center gap-2 border-[2px] px-1 py-1 rounded-lg bg-white">
                        Copy
                        <img src="../img/icons/icons-copy.png" alt="" class="w-[20px] h-[20px]">

                    </div></button>
                    <!-- end of buttton -->
                    
                </form>
            </div>


            <!-- IPFS Pinning Service API Endpoint section -->
            <div>

                <div class="relative mt-10 ">
                    <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[4px] "></div>
                    <h3 class="ml-2 text-[20px] font-medium">IPFS Pinning Service API Endpoint</h3> 
                </div> 

                <form action="" class="flex gap-2 mt-2">
                    <input v-on:focus = $event.target.select()
                    ref = "clone2"
                    :value="text2"
                    readonly
                    
                    type="text" class="w-[250px] border-[2px] rounded-md px-3">
                    <!-- button -->
                    <button @click.prevent="copy2" class="text-[15px] text-bethelBlue"><div class="flex items-center gap-2 border-[2px] px-1 py-1 rounded-lg bg-white">
                        Copy
                        <img src="../img/icons/icons-copy.png" alt="" class="w-[20px] h-[20px]">

                    </div></button>
                    <!-- end of buttton -->
                    
                </form>
            </div>
            <!-- end IPFS Pinning Service API Endpoint  -->

        </div>
        <!-- end of the middle -->
        


    </div>

    
</template>

<script >
export default {
    name : 'Page5AccessKey',
    data(){
        return{
            text : 'https://api.bethel.io/v1/ipfs',
            text2 :'https://api.bethel.io/v1/ipfsasda'
        }
    },

    methods : {
        copy(){
            this.$refs.clone.focus();
            document.execCommand('copy')  
        },

        copy2(){
            this.$refs.clone2.focus();
            document.execCommand('copy')  
        }
    }
}

</script>
