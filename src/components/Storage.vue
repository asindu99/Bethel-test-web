<template>
    <div class="relative lg:px-0 md:px-5 sm:px-4 min-[320px]:px-2">
    <!-- bucket section -->

    <div :class="authBlur">
        <div :class="authBlur" class="lg:w-[100%] md:w-[100%] sm:w-[100%] min-[320px]:w-[full]">
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
                            <div>{{ bucketCount }}</div>
                            <h3>Buckets</h3>
                        </div>
                    </div>
                    <!-- end of the bucket with images -->
                </div>

                <!-- right side button -->
                <div class="flex">
                    <div>
                        <button @click="openAuthModal" class="border-[2px] px-2 py-2 rounded-xl bg-[#E9983C] w-[150px] text-[white] 
                        font-medium hover:text-[#E9983C] hover:bg-[white] transition-all ease-linear hover:border-[#E9983C]">Create Bucket</button>
                    </div>
                    
                </div>
            </div>
            <!-- end of the head section -->


            
            <!-- wallet content section -->
            <div class="my-10">
                <!-- end of the bucket content section -->
            <!-- text of table -->
            <div class="relative ">
                <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
                <h3 class="ml-2 text-[20px]">Bucket History</h3> 
            </div>
            

            <!-- table -->
            <div class=" w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-sm ">
                <!-- start of the table -->
                <table class="table-auto border-separate py-2 w-full rounded-lg">
                    <thead class="">
                        <tr class="">
                        <th class="text-[14px] border p-3 bg-blue-50">BUCKET NAME</th>
                        <th class="text-[14px] border p-3 bg-blue-50">ACCESS</th>
                        <th class="text-[14px] border p-3 bg-blue-50">NETWORK</th>
                        <th class="text-[14px] border p-3 bg-blue-50">DATE CREATED</th>
                        <th class="text-[14px] border p-3 bg-blue-50">MORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="bucket in bucketTableArr" :key="bucket.Baddress">
                        <td class="text-[12px] text-center bg-white border p-3"> {{bucket.bucketName}}</td>
                        <td class="text-[12px] text-center bg-white border p-3">{{bucket.bucketAccess}}</td>
                        <td class="text-[12px] text-center bg-white border p-3">{{bucket.bucketNetwork}}</td>
                        <td class="text-[12px] text-center bg-white border p-3">{{bucket.bucketDateCreated}}</td>
                        

                        <!-- more button functions -->
                        <td class="text-[12px] text-center bg-white border p-3">
                            <div class="relative w-full">
                                <!-- more button auth modal -->
                                <div class="absolute right-[-15px] w-[60px] shadow-md border-[1px] bg-blue-50 rounded-md top-10 animate__animated animate__zoomIn animate__faster">
                                    <button @click="deleteBucketData(bucket)">
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
        <!-- end of the bucket section -->

    </div>
        

        <!-- pop up model for Create bucket -->
        <Transition 
        enter-active-class="animate__animated animate__zoomIn animate__faster"
        leave-active-class="animate__animated animate__zoomOut">
        <div v-if="openClose" class="
        absolute lg:top-[5%] lg:left-[25%] md:top-[5%] md:left-[15%] sm:top-[5%] sm:left-[10%] min-[320px]:top-[5%] min-[320px]:left-[2%]
         lg:w-[500px] md:w-[500px] sm:w-[500px] min-[320px]:w-[350px]
          shadow-mlg bg-white rounded-2xl p-2 border-[2px]">
            <!-- bucket details -->
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

                <h3 class="text-[#293793]">Create New Bucket</h3>
            </div>

            <!-- bucket information main div -->
            <div class="bg-white p-6 flex flex-col flex-wrap w-full">

                <div>
                    <h3 class="text-[#5b5b5b]">Bucket Informations</h3>
                </div>


                <!-- adding a form -->
                <form action="" @submit.prevent="handleSubmit">
                        <div class="mt-2 text-[#5b5b5b]">
                            <h3 class="text-[16px]">Bucket Name</h3>
                        </div>

                    <div>
                        <input type="text" placeholder=""
                        class="mt-2 lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-[300px]
                        border-[2px] rounded-lg p-1" >
                    </div>

                    <!-- network section -->
                    <div>
                        <div class="mt-2 text-[#5b5b5b]">
                            <h3 class="text-[16px]">Network</h3>
                        </div>

                        <div>
                            <div>
                                <select class="mt-2 lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-[300px]
                                border-[2px] rounded-lg p-2">

                                    <option value="Public">Public</option>
                                    <option value="Private"> Private</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- end of the network section -->

                    <!-- close and ok sec -->
                    <div class="mr-2 mt-4 flex gap-2 justify-end border-t-[2px] py-2">
                        <button @click="closeAuthModal" class="border-[2px] py-2 px-4 rounded-lg bg-[#f7f5f5]">
                            <h3 class="text-[14px] text-[#293793] ">Close</h3>
                        </button>

                        <button @click="addData" type="submit" class="border-[2px] py-2 px-4 rounded-lg bg-[#293793]">
                            <h3 class="text-[14px] text-[white] ">Ok</h3>
                        </button>

                    </div>
                </form>
                <!-- end of the form -->
                
                <!-- end of the close and okay sec -->
            </div>
            <!-- end bucket info div -->
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

            // bucket auth model open and close
            openClose : false,

            // auth model blur
            authBlur : '',

            // bucket table data
            bucketTableArr : [],
            bucketAuthModalData : {
                bucketName: 'ABC',
                bucketAccess:'Private',
                bucketNetwork: 'IPFS',
                bucketDateCreated : '2023-10-13 06:46:10 -0400',
            },

            // bucket count
            bucketCount : 0,
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
        deleteBucketData(bucket){
            this.bucketTableArr = this.bucketTableArr.filter((item) => {
                return bucket !== item
            });
            this.bucketCount = this.bucketCount - 1 ;
        }, 
        addData(){
            this.bucketTableArr.push(this.bucketAuthModalData);
            this.openClose = false;
            this.authBlur = '';
            console.log(this.bucketTableArr);
            this.bucketCount = this.bucketCount + 1 ;
        },
        handleSubmit(values){
            console.log(values)
        }
    }
}
</script>
