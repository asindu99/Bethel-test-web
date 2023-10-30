<template>
    <div :class="paddingClass" class="lg:w-full md:w-full md:mx-auto min-[320px]:w-[100%] min-[320px]:px-[10px]">

        <!-- head wallet div  -->
        <div class="flex items-center justify-between shadow-sm rounded-lg px-3 py-3 bg-white">
                <!-- left side text -->
                 <div>
                    <!-- storage with arrow -->
                    <div class="flex items-center">
                        <div>
                            <img src="../img/logos/bethellogo.png" alt="" class="w-[40px]">
                        </div>

                        <!-- right arrow -->
                        <div class="ml-2 flex flex-col">
                            <h3 class="font-bethelBlue font-bold text-[16px] ">Future CX</h3>
                        </div>
                        
                    </div>
                    <!-- end of the storage with arrrow -->
                </div>
            </div>
        <!-- end of the head key name -->
        

        <!-- 1st caption section -->
        <div class="relative mt-4">
            <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">OverView</h3> 
        </div>

        <!-- overview content flex -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col items-center mt-4 w-full flex-warp gap-2 justify-center">

            <!-- buckets  -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl 
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
                        <h1 class="text-white">Buckets</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[13px] text-white">Total Buckets</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">2</h1>
                            </div> 
                        </div>
                        
                    </div>
                </div>

            </div>
            <!-- end of the bucket section -->

            <!-- object flex -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl  
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
                        <h1>Objects</h1>
                        <div class="flex items-center ">             
                          <h3 class="text-[13px]">Total Objects</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">2</h1>
                        </div> 
                        </div>
                        
                    </div>
                </div>

            </div>

            <!-- Total strorage Section -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl  
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
                        <h1>Storage</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[13px]">Total Storage</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600 ">2</h1>
                        </div> 
                        </div>
                        
                    </div>
                </div>

            </div>

            <!-- Bandwidth flex -->
            <div class="bg-sidebarBG flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl  
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
                        <h1>Bandwidth</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[13px]">Total Bandwidth</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">2</h1>
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
            <h3 class="ml-2 text-[20px]">Data Usage</h3> 
        </div>



        
        <!-- data usage content flex -->
        <div class="h-full flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col mt-4 justify-center items-center w-full gap-2 
        ">
            <!-- data usage flex 2 -->
            <div class="bg-white flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-[595px] sm:w-[595px] min-[320px]:w-[340px]
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
                        <h1>Trasactions </h1>
                        <div class="flex items-center">             
                          <h3 class="text-[13px]">Chart View</h3> 
                          
                        </div>
                        
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class="mt-2 flex items-center justify-center
                lg:w-full md:w-full sm:w-[550px] min-[320px]:w-[320px] 
                lg:h-[250px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">
                    <canvas id="myChart2" class="
                    lg:w-full md:w-full sm:w-[650px] min-[320px]:w-[200px] ml-3"></canvas>
                </div>

            </div>
            <!-- end of the data usage flex -->

             <!-- data usage flex 1-->
             <div class="bg-white  flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-[595px] sm:w-[595px] min-[320px]:w-[340px]
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
                            <h1>Storage Data Usage</h1>
                            <div class="flex items-center">             
                            <h3 class="text-[13px]">Chart View</h3> 
                            
                        </div>
                            
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class=" flex items-center justify-center mt-2 gap-2
                lg:w-full md:w-full sm:w-[550px] min-[320px]:w-full 
                lg:h-[250px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">

                    <!-- chart view -->
                    <canvas id="myChart" class="lg:w-full md:w-full sm:w-full min-[320px]:[400px]"></canvas>
                    

                </div>

            </div>
            <!-- end of the data usage flex -->

            <!-- storage side exteds -->
            <div class="flex lg:flex-col md:flex sm:flex-row min-[320px]:hidden items-center justify-start h-full
            px-4 py-[19px] gap-4 bg-blue-50 lg:w-[500px] md:w-[595px] sm:w-[595px] min-[320px]:w-[340px] shadow-md rounded-xl">
                
                <!-- total file -->
                <div class="flex items-center justify-start w-full" >
                    <!-- icon -->
                    <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                        <span class="material-symbols-outlined scale-[1.5]">
                        folder
                        </span>
                    </div>
                    <!-- end of icons -->

                    <div class="flex flex-col items-center justify-center mt-[2px]">
                        <h3 class="text-[16px]">Files</h3>
                        <h3 class="text-[#8d8d8d] text-[14px] ml-1">13 files</h3>
                    </div>
                </div>

                <!-- total file -->
                <div class="flex items-center justify-start w-full">
                    <!-- icon -->
                    <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                        <span class="material-symbols-outlined scale-[1.5]">
                        image
                        </span>
                    </div>
                    <!-- end of icons -->

                    <div class="flex flex-col items-center justify-center mt-[2px]">
                        <h3 class="text-[16px]">Images</h3>
                        <h3 class="text-[#8d8d8d] text-[14px] ml-1">13 files</h3>
                    </div>
                </div>

                <!-- total file -->
                <div class="flex items-center justify-start w-full">
                    <!-- icon -->
                    <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                        <span class="material-symbols-outlined scale-[1.5]">
                        image
                        </span>
                    </div>
                    <!-- end of icons -->

                    <div class="flex flex-col items-center justify-center mt-[2px]">
                        <h3 class="text-[16px]">Images</h3>
                        <h3 class="text-[#8d8d8d] text-[14px] ml-1">13 files</h3>
                    </div>
                </div>
                
                
                <!-- total file -->
                <div class="flex items-center justify-start w-full">
                    <!-- icon -->
                    <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                        <span class="material-symbols-outlined scale-[1.5]">
                        movie
                        </span>
                    </div>
                    <!-- end of icons -->

                    <div class="flex flex-col items-center justify-center mt-[2px]">
                        <h3 class="text-[16px]">Videos</h3>
                        <h3 class="text-[#8d8d8d] text-[14px] ml-1">13 files</h3>
                    </div>
                </div>

                <!-- total file -->
                <div class="flex items-center justify-start w-full">
                    <!-- icon -->
                    <div class="text-iconColor2 w-[35px] flex items-center justify-center mr-1">
                        <span class="material-symbols-outlined scale-[1.5]">
                            <span class="material-symbols-outlined">
                            other_admission
                            </span>
                        </span>
                    </div>
                    <!-- end of icons -->

                    <div class="flex flex-col items-center justify-center mt-[2px]">
                        <h3 class="text-[16px]">Other</h3>
                        <h3 class="text-[#8d8d8d] text-[14px] ml-1">13 files</h3>
                    </div>
                </div>
                
            </div>
            <!-- end of the storage status extend --> 
            
            </div>
            <!-- end of the storage side extends -->
      
        

        <!-- 3rd caption section -->
        <div class="relative mt-6">
            <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">Recent Log Activies</h3> 
        </div>

        <!-- log activies table -->
        <div class=" w-full mx-auto mt-4 bg-white rounded-lg px-2 shadow-md mb-10">
            <!-- start of the table -->
            <table class="table-auto border-separate py-2 w-full rounded-lg">
                <thead class="">
                    <tr class="">
                    <th class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] border p-3 bg-blue-50">User's Name</th>
                    <th class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] border p-3 bg-blue-50">Ip Address</th>
                    <th class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] border p-3 bg-blue-50">Log Status</th>
                    <th class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] border p-3 bg-blue-50">Date and time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">User Name </td>
                    <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">Ipv4 / Ipv6</td>
                    <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">Loged In</td>
                    <td class="lg:text-[14px] md:text-[14px] sm:text-[14px] min-[320px]:text-[10px] text-center bg-white border p-3">2023-10-14 14:00</td>
                    </tr>
                </tbody>
            </table>


        </div>
       
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import Page1Nav from '@/components/Page1Nav.vue';

export default {
    name : 'Page3Dashboard',
    data(){
        return{
            paddingClass : ''
        }
    },
    // components : {
    //     Page1Nav,
    // },
    mounted(){
        const ctx = document.getElementById('myChart');
        const ctx1 = document.getElementById('myChart2');

        const myChart = new Chart(ctx, {
        type: 'doughnut',
            data: {
            labels: ['Used', 'Remaining'],
            datasets: [{
                label: 'Storage',
                data: [300, 100],
                backgroundColor: [
            'rgb(0, 71, 171)',
            'rgb(54, 162, 235)',
            ],
            hoverOffset: 10,
            position : 'bottom',
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
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,4,4,6,7,8,20],
        borderWidth: 2
      }]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
    });

    myChart;
    myChart2;
    },
    
    
    
}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 100,
  'GRAD' 0,
  'opsz' 24
}
</style>
