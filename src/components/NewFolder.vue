<template>
    <div class="relative lg:pl-[-1px] md:px-5 sm:px-4 min-[320px]:px-2">
        

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
                            <h2 class="font-bold text-[30px]">Folder</h2>
                        </div>
                        <!-- end of the bucket main -->
                    </div>
                </div>
                <!-- end of the head section -->

                <!-- main content  -->
                <div class="my-10">
                    <!-- topic of upload file  -->
                    <div class="">
                        <div class="relative mt-6">
                            <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                            <h3 class="ml-2 text-[20px]">Upload File</h3> 


                        </div>
                    </div>

                    <!-- file upload content -->
                    <div class="flex mt-4 justify-evenly w-full flex-wrap gap-2">
                        <!-- file uplaod flex -->
                        <div class="bg-white flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
                        lg:w-[595px] md:w-[595px] sm:w-[595px] min-[320px]:w-[340px]
                        justify-start items-start rounded-xl shadow-md">
                            
                            <div class="p-6 w-[100%]">
                            <!-- Upload Dropbox -->
                            <div class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-[#000000] hover:bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] hover:border-green-400 hover:border-solid">
                                <h5>Drop your files here</h5>
                            </div>
                            <div class="flex flex-row justify-between">
                                <!-- <input type="file" multiple class="font-['Montserrat']"/> -->
                                <div class=" lg:mt-8 md:mt-8 sm:mt-8 min-[320px]:mt-8">
                                    <input
                                    class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border 
                                    border-none border-sidebarBG bg-clip-padding px-3 py-3 text-[14px] font-['Montserrat'] 
                                    text-[white] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer 
                                    file:overflow-hidden file:rounded-lg file:border-2 file:border-sidebarBG file:border-inherit 
                                    file:bg-blue-50 file:px-4 file:py-2 file:text-sidebarBG file:transition file:duration-150 
                                    file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
                                     hover:file:bg-sidebarBG  hover:file:text-[white]  focus:border-primary focus:text-sidebarBG focus:shadow-te-primary 
                                     dark:text-sidebarBG sidebarBG:file:bg-sidebarBG sidebarBG:file:text-sidebarBG 
                                     sidebarBG:focus:border-primary"
                                    type="file"/>
                                </div>

                                <div class=" lg:mt-10 md:mt-8 sm:mt-8 min-[320px]:mt-9">
                                    <button class="bg-sidebarBG px-6 py-2 text-[white] rounded-xl text-[14px] hover:text-sidebarBG hover:bg-[white] border-2 hover:border-sidebarBG ml-14">Upload</button>

                                </div>
                            </div>
                            <hr class="my-6" />
                            <!-- Progess Bars -->
                            <div class="mb-4">
                                <!-- File Name -->
                                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                                <!-- Inner Progress Bar -->
                                <div
                                    class="transition-all progress-bar"
                                ></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <!-- end of the file upload -->

                        <!-- file upload flex -->
                        <div class="bg-white flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
                        lg:w-[595px] md:w-[595px] sm:w-[595px] min-[320px]:w-[340px]
                        justify-start items-start rounded-xl shadow-md">
                            <!-- icon and text-->
                            <div class="flex items-center">
                                <!-- image side -->
                                <div class="mr-2">
                                    <img src="../img/icons/icon-storage.png" alt="" class="w-[35px] mx-3">
                                </div>
                                    <!-- content side -->
                                    <div class="flex flex-col">
                                        <h1>Total Storage</h1>
                                        <div class="flex items-center">             
                                        <h3 class="text-[13px]">Chart View</h3> 
                                        
                                    </div>
                                        
                                </div>
                            </div>
                            

                            <!-- storage chart -->
                            <div class=" flex items-center justify-center mt-1 w-[550px]
                            lg:w-[550px] md:w-[550px] sm:w-[550px] min-[320px]:w-[320px] 
                            lg:h-[300px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">
                                <canvas id="myChart" class="
                                lg:w-[650px] md:w-[650px] sm:w-[650px] min-[320px]:w-[200px] ml-3"></canvas>
                            </div>

                        </div>
                        <!-- end of the file upload flex -->
                    </div>
                    <!-- end of the file upload-->

                    <!-- recent activites  -->
                    <div class="relative my-10">
                        <!-- table of content -->
                        <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                        <h3 class="ml-2 text-[20px]">Recent Activities</h3> 
                    </div>
                    
                    <!--  recent table -->
                    <div class=" w-[100%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-md ">
                        <!-- start of the table -->
                        <table class="table-auto border-separate py-2 w-full rounded-lg">
                            <thead class="">
                                <tr class="">
                                <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">NAME</th>
                                <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">CID</th>
                                <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">STATUS</th>
                                <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">LAST MODIFIED</th>
                                <th class="text-[14px] border p-3 bg-blue-50 min-[320px]:text-[8px] lg:text-[14px] md:text-[12px]">SIZE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] min-[320px]:text-[8px] text-center bg-white border p-3"> file-1</td>
                                <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] min-[320px]:text-[8px] text-center bg-white border p-3">QmchJZ4J2yAS45t</td>
                                <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] min-[320px]:text-[8px] text-center bg-white border p-3">Pinned</td>
                                <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] min-[320px]:text-[8px] text-center bg-white border p-3">2023-10-16 02:10:13-0400</td>
                                <td class="min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] min-[320px]:text-[8px] text-center bg-white border p-3">189 KB</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                </div> 
                <!-- main content end  -->
                
            </div>

        </div>

    </div>

    
    
        
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    name : 'StorageFolder',
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

            
        }
    },

    // methods : {
    //     openAuthModal(){
    //         this.openClose = true;
    //         this.authBlur = 'blur-md'
    //     },

    //     closeAuthModal(){
    //         this.openClose = false;
    //         this.authBlur = '';
    //     },
    //     deleteBucketData(bucket){
    //         this.bucketTableArr = this.bucketTableArr.filter((item) => {
    //             return bucket !== item
    //         });
    //         this.bucketCount = this.bucketCount - 1 ;
    //     }, 
    //     addData(){
    //         this.bucketTableArr.push(this.bucketAuthModalData);
    //         this.openClose = false;
    //         this.authBlur = '';
    //         console.log(this.bucketTableArr);
    //         this.bucketCount = this.bucketCount + 1 ;
    //     },
    //     handleSubmit(values){
    //         console.log(values)
    //     },
    // },
    mounted(){
        const ctx = document.getElementById('myChart');

        const xValues = ["Used space", "Free space"];
                const yValues = [0, 100];
                const barColors = [
                "#f2003c",
                "#5669cc",
        ];
            

        const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
    
    });

    myChart;
    },


}
</script>
