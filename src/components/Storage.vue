<template>
    <div class="relative lg:px-2 md:px-5 sm:px-4 min-[320px]:px-2">
    
        <!-- bucket section -->
        <!-- <div :class="authBlur"> -->
            <div :class="bucketStore.authBlur" class="lg:w-[100%] md:w-[100%] sm:w-[100%] min-[320px]:w-[full]">
                <!-- head storage div  -->
                <div class="flex items-center justify-between shadow-sm rounded-lg px-3 py-3 bg-white">
                    <!-- left side text -->
                    <div>
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
                            <h1 class="font-bold text-[30px]">Storage</h1>
                        </div>
                        <!-- end of the bucket main -->

                        <!-- bucket with images -->
                        <!-- <div class="flex items-center mt-2"> -->
                            <!-- image -->
                            <!-- <div class="flex w-[30px] justify-center items-center">
                                <span class=" material-symbols-outlined scale-[1.5] text-iconColor2 mr-2
                                ">
                                    cleaning_bucket
                                </span> 
                            </div> -->
                            <!-- text -->
                            <!-- <div class="flex gap-1 mt-1">
                                <div>{{ bucketCount }}</div>
                                <h3>Buckets</h3>
                            </div>
                        </div> -->
                        <!-- end of the bucket with images -->
                    </div>

                    <!-- right side button -->
                    <!-- <div class="flex">
                        <div>
                            <button @click="openAuthModal" class="border-[2px] px-2 py-2 rounded-xl bg-sidebarBG w-[150px] text-[white] 
                            font-medium hover:text-sidebarBG hover:bg-[white] transition-all ease-linear hover:border-sidebarBG">Create Bucket</button>
                        </div>
                        
                    </div> -->
                </div>
                <!-- end of the head section -->


                
                <!-- bucket content section -->
                <div class="my-10">
                    <!-- end of the bucket content section -->
                <!-- text of table -->
                <div class="relative ">
                    <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                    <h3 class="ml-2 text-[20px]">Bucket History</h3> 
                </div>
                

                <!-- table -->
                <div class="w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-sm ">
                    <!-- start of the table -->
                    <table class="table-auto border-separate py-2 w-[100%] rounded-lg">
                        <thead class="">
                            <tr class="">
                            <th class="text-[13px] border p-3 bg-blue-50">BUCKET NAME</th>
                            <!-- <th class="text-[13px] border p-3 bg-blue-50">ACCESS</th> -->
                            <th class="text-[13px] border p-3 bg-blue-50">NETWORK</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td class="text-[12px] text-center bg-white border p-3 cursor-pointer hover:text-sidebarBG font-bold"><router-link to="/bucketFolder"> public_storage_0 </router-link></td>
                            <td class="text-[12px] text-center bg-white border p-3">IPFS/GCS</td>
                            <!-- <td class="text-[12px] text-center bg-white border p-3">{{bucket.bucketNetwork}}</td> -->
                            <!-- <td class="text-[12px] text-center bg-white border p-3">{{bucket.bucketDateCreated}}</td>  -->
                            

                            <!-- more button end --> 
                            </tr>
                        </tbody>
                    </table>


                </div>
                </div>
                
            </div>
        
        <!-- </div> -->
        <!-- end of the bucket section -->



    </div>

    
    
        
</template>

<script>
import {mapStores} from 'pinia'
import {useBucketData} from '@/stores/bucketDataStore';
export default {
    name : 'Storage',
    data(){
        return{
            // moreButton open and close
            isMore : false,

            // bucket details array
            bucketTableArr : [],

            bucketTableArr2 : [],

            // bucket count
            bucketCount : 0,

            // storageName: null,
        }
    },
    mounted(){
    },
    computed : {
        ...mapStores(useBucketData)
    },

    methods : {
        openAuthModal(){
            this.bucketStore.openClose = true;
            this.bucketStore.authBlur = 'blur-md'
        },

        closeAuthModal(){
            this.bucketStore.openClose = false;
            this.bucketStore.authBlur = '';
        },
        deleteBucketData(bucket){
            this.bucketStore.bucketTableArr2 = this.bucketStore.bucketTableArr2.filter((item) => {
                return bucket !== item
            });

        },

        
    }
}
</script>
