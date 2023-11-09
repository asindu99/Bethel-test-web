<template>
    <div :class="paddingClass" class="relative lg:w-full md:w-full md:mx-auto min-[320px]:w-[100%] min-[320px]:px-[10px]">
        <div>
            helloooo {{ user.FirstName }}
        </div>
        <!-- head wallet div  -->
        <div class=" hidden">
                <!-- left side text -->
                 <div>
                    <!-- storage with arrow -->
                    <div class="flex items-center fixed lg:top-[-40px] lg:left-[10px]
                    md:top-[25px] md:left-[200px]
                    sm:top-[-75px] sm:left-[180px]
                    z-[100]">
                        <div class="lg:flex md:hidden sm:hidden min-[320px]:hidden">
                            <img src="../img/logos/bethellogo.png" alt="" class="w-[30px]">
                        </div>

                        <!-- right arrow -->
                        <div class="ml-2 flex flex-col lg:flex md:flex sm:hidden min-[320px]:hidden">
                            <h3 class="font-bethelBlue font-medium lg:text-[18px] md:text-[15px] sm:text-[18px] min-[320px]:text-[12px] "><span class="text-sidebarBG ">Weclome to BEHTEL,</span> Craig </h3>
                        </div>
                        
                    </div>
                    <!-- end of the storage with arrrow -->
                </div>
            </div>
        <!-- end of the head key name -->
        

        <!-- 1st caption section -->
        <div class=" mt-2">
            <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
            <h3 class="ml-2 text-[18px]">OverView</h3> 
        </div>

        <!-- overview content flex -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col items-center mt-4 w-full flex-warp gap-2 justify-center">

            <!-- buckets  -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-2 border-2 w-full h-[65px] items-start justify-center rounded-xl 
            ">
                <!-- content inside -->
                <div class="flex items-center gap-3">
                    <!-- image side -->
                    <div class="text-iconColor w-[35px] flex items-center justify-center">
                        <span class="material-symbols-outlined scale-[1.5]">
                        cleaning_bucket
                        </span>
                    </div>
                    <!-- content side -->
                    <div class="flex flex-col">
                        <h1 class="text-white text-[14px]">Buckets</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[10px] text-white">Total Buckets</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">{{ bucketCount1 }}</h1>
                            </div> 
                        </div>
                        
                    </div>
                </div>

            </div>
            <!-- end of the bucket section -->

            <!-- object flex -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-2 border-2 w-full h-[65px] items-start justify-center rounded-xl  
            ">
                <!-- content inside -->
                <div class="flex items-center gap-3">

                    <!-- icon -->
                    <div class="text-iconColor w-[35px] flex items-center justify-center">
                        <span class="material-symbols-outlined scale-[1.5]">
                        description
                        </span>
                    </div>
                    <!-- end of icons -->

                    <!-- content side -->
                    <div class="flex flex-col text-white">
                        <h1 class=" text-[14px]">Objects</h1>
                        <div class="flex items-center ">             
                          <h3 class="text-[10px]">Total Objects</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">0</h1>
                        </div> 
                        </div>
                        
                    </div>
                </div>

            </div>

            <!-- Total strorage Section -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-2 border-2 w-full h-[65px] items-start justify-center rounded-xl  
            ">
                <!-- content inside -->
                <div class="flex items-center gap-3">
                    <!-- icon -->
                    <div class="text-iconColor w-[35px] flex items-center justify-center">
                        <span class="material-symbols-outlined scale-[1.5]">
                        hard_drive
                        </span>
                    </div>
                    <!-- end of icons -->

                    <!-- content side -->
                    <div class="flex flex-col text-white">
                        <h1 class=" text-[14px]">Storage</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[10px]">Total Storage</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600 ">0</h1>
                        </div> 
                        </div>
                        
                    </div>
                </div>

            </div>

            <!-- Bandwidth flex -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-2 border-2 w-full h-[65px] items-start justify-center rounded-xl  
            ">
                <!-- content inside -->
                <div class="flex items-center gap-3 text-white">
                    <!-- icon -->
                    <div class="text-iconColor w-[35px] flex items-center justify-center">
                        <span class="material-symbols-outlined scale-[1.5]">
                        wifi
                        </span>
                    </div>
                    <!-- end of icons -->

                    <!-- content side -->
                    <div class="flex flex-col">
                        <h1 class=" text-[14px]">Bandwidth</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[10px]">Total Bandwidth</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">0</h1>
                        </div> 
                        </div>
                        
                    </div>
                </div>

            </div>

            

        </div>
        <!-- end of the overview content -->



        <!-- 2nd caption section -->
        <div class="relative mt-4">
            <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
            <h3 class="ml-2 text-[18px]">Data Usage</h3> 
        </div>



        
        <!-- data usage content flex -->
        <div class="h-full flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col mt-1 justify-center items-center w-full gap-2 
        ">
            <!-- chart flex 2 -->
            <div class="bg-white flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-full sm:w-full min-[320px]:w-full
             justify-start items-start rounded-xl shadow-md">
                <!-- icon and text-->
                <div class="flex items-center">
                    <!-- image side -->
                    <!-- icon -->
                    <div class="text-iconColor2 w-[45px] flex items-center justify-center mr-1">
                        <span class="material-symbols-outlined scale-[1.5]">
                            <span class="material-symbols-outlined">
                            paid
                            </span>
                        </span>
                    </div>
                    <!-- end of icons -->
                    <!-- content side -->
                    <div class="flex flex-col">
                        <h1 class="text-[14px]">Trasactions </h1>
                        <div class="flex items-center">             
                          <h3 class="text-[12px]">Chart View</h3> 
                          
                        </div>
                        
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class="mt-2 flex items-center justify-center
                lg:w-full md:w-full sm:w-full min-[320px]:w-full 
                lg:h-[220px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">
                    <canvas id="myChart2" class="
                    lg:w-[280px] md:w-full sm:w-full min-[320px]:w-full"></canvas>
                </div>

            </div>
            <!-- end of the data usage flex 2-->

            <!-- chart flex 3-->
            <div class="bg-white  flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-full sm:w-full min-[320px]:w-full
             justify-start items-start rounded-xl shadow-md ">
                <!-- icon and text-->
                <div class="flex items-center">
                    <!-- image side -->
                    <!-- icon -->
                    <div class="text-iconColor2 w-[55px] flex items-center justify-center">
                        <span class="material-symbols-outlined scale-[1.5]">
                        hard_drive
                        </span>
                    </div>
                    <!-- end of icons -->
                        <!-- content side -->
                        <div class="flex flex-col">
                            <h1 class="text-[14px]">Data Use</h1>
                            <div class="flex items-center">             
                            <h3 class="text-[12px]">Chart View</h3> 
                            
                        </div>
                            
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class=" flex items-center justify-center mt-2 gap-2
                lg:w-full md:w-full sm:w-[550px] min-[320px]:w-full 
                lg:h-[220px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">

                    <!-- chart view -->
                    <canvas id="myChart3" class="lg:w-full md:w-full sm:w-full min-[320px]:[400px]"></canvas>
                    

                </div>

            </div>
            <!-- end of the data usage flex 3 -->

             <!-- chart flex 1-->
             <div class="bg-white  flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-full sm:w-full min-[320px]:w-full
             justify-start items-start rounded-xl shadow-md ">
                <!-- icon and text-->
                <div class="flex items-center">
                    <!-- image side -->
                    <!-- icon -->
                    <div class="text-iconColor2 w-[55px] flex items-center justify-center">
                        <span class="material-symbols-outlined scale-[1.5]">
                        hard_drive
                        </span>
                    </div>
                    <!-- end of icons -->
                        <!-- content side -->
                        <div class="flex flex-col">
                            <h1 class="text-[14px]">Storage Data Usage</h1>
                            <div class="flex items-center">             
                            <h3 class="text-[12px]">Chart View</h3> 
                            
                        </div>
                            
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class=" flex items-center justify-center mt-2 gap-2
                lg:w-full md:w-full sm:w-[550px] min-[320px]:w-full 
                lg:h-[220px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">

                    <!-- chart view -->
                    <canvas id="myChart" class="lg:w-full md:w-full sm:w-full min-[320px]:[400px]"></canvas>

                    <div class="flex flex-col gap-2">
                        <!-- total file -->
                            <div class="flex items-center justify-start w-full" >
                                <!-- icon -->
                                <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                                    <span class="material-symbols-outlined scale-[1]">
                                    folder
                                    </span>
                                </div>
                                <!-- end of icons -->

                                <div class="flex flex-col items-center justify-center mt-[2px]">
                                    <h3 class="text-[14px]">Files</h3>
                                    <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                </div>
                            </div>

                            <!-- total file -->
                            <div class="flex items-center justify-start w-full">
                                <!-- icon -->
                                <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                                    <span class="material-symbols-outlined scale-[1]">
                                    image
                                    </span>
                                </div>
                                <!-- end of icons -->

                                <div class="flex flex-col items-center justify-center mt-[2px]">
                                    <h3 class="text-[14px]">Images</h3>
                                    <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                </div>
                            </div>

                            <!-- total file -->
                            <div class="flex items-center justify-start w-full">
                                <!-- icon -->
                                <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                                    <span class="material-symbols-outlined scale-[1]">
                                    image
                                    </span>
                                </div>
                                <!-- end of icons -->

                                <div class="flex flex-col items-center justify-center mt-[2px]">
                                    <h3 class="text-[14px]">Musics</h3>
                                    <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                </div>
                            </div>
                            
                            
                            <!-- total file -->
                            <div class="flex items-center justify-start w-full">
                                <!-- icon -->
                                <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                                    <span class="material-symbols-outlined scale-[1]">
                                    movie
                                    </span>
                                </div>
                                <!-- end of icons -->

                                <div class="flex flex-col items-center justify-center mt-[2px]">
                                    <h3 class="text-[14px]">Videos</h3>
                                    <h3 class="text-[#8d8d8d] text-[12px] ml-1">0 files</h3>
                                </div>
                            </div>

                    </div>
                    

                </div>

            </div>
            <!-- end of the data usage flex -->

            
            
        </div>
        <!-- end of the storage side extends -->
      
        

        <!-- 3rd caption section -->
        <div class="relative mt-6">
            <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
            <h3 class="ml-2 text-[18px]">Recent Log Activies</h3> 
        </div>

        <!-- log activies table -->
        <div class=" w-full mx-auto mt-4 bg-white rounded-lg px-2 shadow-md mb-10">
            <!-- start of the table -->
            <table class="table-auto border-separate py-2 w-full rounded-lg">
                <thead class="">
                    <tr class="">
                    <th class="lg:text-[12px] md:text-[12px] sm:text-[12px] min-[320px]:text-[10px] border p-3 bg-blue-50">User's Name</th>
                    <th class="lg:text-[12px] md:text-[12px] sm:text-[12px] min-[320px]:text-[10px] border p-3 bg-blue-50">Ip Address</th>
                    <th class="lg:text-[12px] md:text-[12px] sm:text-[12px] min-[320px]:text-[10px] border p-3 bg-blue-50">Log Status</th>
                    <th class="lg:text-[12px] md:text-[12px] sm:text-[12px] min-[320px]:text-[10px] border p-3 bg-blue-50">Date and time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="logs in logActivityArr" :key="logs.user" class="lg:text-[12px] md:text-[12px] sm:text-[12px] min-[320px]:text-[10px] border p-3 bg-blue-50">
                        <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">{{ logs.user }}</td>
                        <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">{{ logs.ip }}</td>
                        <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">{{ logs.logStats }}</td>
                        <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">{{ logs.DT }}</td>
                    </tr>
                </tbody>
            </table>


        </div>

    <!-- sign in sucess msg -->
    <div v-show="elementVisible" class="absolute z-[10] top-0 right-2 animate__animated animate__animated animate__fadeIn">
        <div class="relative flex p-2  rounded-xl  items-center gap-2 bg-green-500 
    lg:w-[320px] md:w-[320px] sm:w-[320px] min-[320px]:w-[200px]
    ">

        <!-- msg div -->
        <div class="flex flex-col text-white lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[11px]">
            <h3>Success!</h3>
            <h4>You successfully loged-in</h4>
        </div>

        <!-- bethel logo -->
        <div class="absolute top-2 right-2 flex gap-1">
            <img src="../img/logos/bethellogo.png" alt="" class="w-[15px]">
            <h3 class="text-[10px] font-bold text-bethelBlue">BETHEL</h3>
        </div>
    </div>
    
</div>
<!-- end of the sign in  sucess msg -->
                
       
    </div>
</template>

<script>
import {mapStores} from 'pinia'
import {useWalletData} from '@/stores/DataStore'
import {authUser} from '@/stores/AuthUser'

import Chart from 'chart.js/auto';
import axios from 'axios';
// import Page1Nav from '@/components/Page1Nav.vue';

export default {
    name : 'Page3Dashboard',
    data(){
        return{
            paddingClass : '',

            // LOG IN SUCESS MSG
            elementVisible : false,

            // log activity array
            logActivityArr : [],

            // bucket counts
            bucketCount1 : 0,

            user : [],

            
        }
    },
    computed : {
        ...mapStores(useWalletData, authUser),
        
    },
    // async created(){
    //     const res = await axios.get('https://mw.bethel.network/users/USERID');
    //     this.user = res.data
    //     console.log(this.user)
    // },
    async mounted(){

        const res = await axios.get('https://mw.bethel.network/users/' + this.authUserStore.userID);
        this.user.push(res.data.details);
        console.log(res.data.details)

        console.log(this.user);
        
        console.log(this.authUserStore.userID);


        this.bucketCount1 = this.walletStore.bucketNameArr.length
        this.walletStore.getBucketNames();
        const ctx = document.getElementById('myChart');
        const ctx1 = document.getElementById('myChart2');
        const ctx2 = document.getElementById('myChart3');

        const myChart = new Chart(ctx, {
        type: 'doughnut',
            data: {
            labels: ['Used', 'Remaining'],
            datasets: [{
                label: 'Storage',
                data: [0,1],
                backgroundColor: [
            'rgb(86, 105, 204)',
            'rgb(233, 152, 60)',
            ],
            hoverOffset: 10,
            position : 'right',
            }]
            },
    options: {
        responsive: true,
        plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Storage'
        }
        }
    }
    });

    const myChart2 = new Chart(ctx1, {
        type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug', 'Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Transactions',
        data: [],
        borderWidth: 2,
        backgroundColor: [
            'rgb(86, 105, 204)'
        ],
      }],
      
    },
    });

    const myChart3 = new Chart(ctx2, {
        type: 'bar',
    data: {
      labels: ['files', 'videos', 'images', 'musics',],
      datasets: [{
        label: 'Used (GB)',
        data: [],
        borderWidth: 2,
        backgroundColor: [
            'rgb(86, 105, 204)'
        ],
      }],
     
    },
    });

    myChart;
    myChart2;
    myChart3;
    },
    
    
    
}
</script>

<style scoped>

</style>
