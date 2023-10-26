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
                            <h3 class="font-bold text-[17px]">Welcome to the Bethel</h3>
                            <h3 class="text-[#293793] font-medium text-[18px] ">Future CX</h3>
                        </div>
                        
                    </div>
                    <!-- end of the storage with arrrow -->
                </div>
            </div>
        <!-- end of the head key name -->
        

        <!-- 1st caption section -->
        <div class="relative mt-2">
            <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">OverView</h3> 
        </div>

        <!-- overview content flex -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col items-center mt-4 w-full flex-warp gap-2 justify-center">

            <!-- buckets  -->
            <div class="bg-white flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl shadow-md 
            hover:shadow-none hover:border-blue-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- content inside -->
                <div class="flex items-center gap-3">
                    <!-- image side -->
                    <div>
                        <img src="../img/icons/icon-bucket.png" alt="" class="w-[35px] mx-3">
                    </div>
                    <!-- content side -->
                    <div class="flex flex-col">
                        <h1>Buckets</h1>
                        <div class="flex items-center">             
                          <h3 class="text-[13px]">Total Buckets</h3> 
                          <div class="ml-3 w-[30px] h-[25px] bg-blue-100 rounded-lg text-center justify-center items-center">
                            <h1 class="text-blue-600">2</h1>
                            </div> 
                        </div>
                        
                    </div>
                </div>

            </div>
            <!-- end of the bucket section -->

            <!-- Total strorage Section -->
            <div class="bg-white flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl shadow-md 
            hover:shadow-none hover:border-blue-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- content inside -->
                <div class="flex items-center gap-3">
                    <!-- image side -->
                    <div>
                        <img src="../img/icons/icon-bucket.png" alt="" class="w-[35px] mx-3">
                    </div>
                    <!-- content side -->
                    <div class="flex flex-col">
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
            <div class="bg-white flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl shadow-md 
            hover:shadow-none hover:border-blue-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- content inside -->
                <div class="flex items-center gap-3">
                    <!-- image side -->
                    <div>
                        <img src="../img/icons/icon-bucket.png" alt="" class="w-[35px] mx-3">
                    </div>
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

            <!-- Bandwidth flex -->
            <div class="bg-white flex flex-col gap-2 p-4 border-2 w-full h-[80px] items-start justify-center rounded-xl shadow-md 
            hover:shadow-none hover:border-blue-100 hover:translate-y-[-10px] transition-all ease-in">
                <!-- content inside -->
                <div class="flex items-center gap-3">
                    <!-- image side -->
                    <div>
                        <img src="../img/icons/icon-bucket.png" alt="" class="w-[35px] mx-3">
                    </div>
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
            <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">Data Usage</h3> 
        </div>



        
        <!-- data usage content flex -->
        <div class="flex lg:flex-row md:flex-col sm:flex-col min-[320px]:flex-col mt-4 justify-center items-center w-full gap-2 
        ">
            <!-- data usage flex 1-->
            <div class="bg-white flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-[595px] sm:w-[595px] min-[320px]:w-[340px]
             justify-start items-start rounded-xl shadow-md">
                <!-- icon and text-->
                <div class="flex items-center">
                    <!-- image side -->
                    <div class="mr-2">
                        <img src="../img/icons/icon-storage.png" alt="" class="w-[35px] mx-3">
                    </div>
                        <!-- content side -->
                        <div class="flex flex-col">
                            <h1>Storage Data Usage</h1>
                            <div class="flex items-center">             
                            <h3 class="text-[13px]">Chart View</h3> 
                            
                        </div>
                            
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class="mt-2
                lg:w-full md:w-full sm:w-[550px] min-[320px]:w-[320px] 
                lg:h-[250px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">
                    <canvas id="myChart2" class="lg:w-full md:w-full sm:w-[650px] min-[320px]:w-[200px] ml-3"></canvas>
                </div>

            </div>
            <!-- end of the data usage flex -->

            <!-- data usage flex 2 -->
            <div class="bg-white flex flex-col gap-2 pl-3 pt-4 pb-2 border-2 
            lg:w-full md:w-[595px] sm:w-[595px] min-[320px]:w-[340px]
             justify-start items-start rounded-xl shadow-md">
                <!-- icon and text-->
                <div class="flex items-center">
                    <!-- image side -->
                <div class="mr-2">
                    <img src="../img/icons/icon-transaction.png" alt="" class="w-[35px] mx-3">
                    </div>
                    <!-- content side -->
                    <div class="flex flex-col">
                        <h1>Trasactions </h1>
                        <div class="flex items-center">             
                          <h3 class="text-[13px]">Chart View</h3> 
                          
                        </div>
                        
                    </div>
                </div>
                

                <!-- storage chart -->
                <div class="mt-2
                lg:w-full md:w-full sm:w-[550px] min-[320px]:w-[320px] 
                lg:h-[250px] md:h-[300px] sm:h-[300px] min-[320px]:h-[200px] ">
                    <canvas id="myChart" class="
                    lg:w-full md:w-full sm:w-[650px] min-[320px]:w-[200px] ml-3"></canvas>
                </div>

            </div>
            <!-- end of the data usage flex -->
        </div>
        <!-- end of the data usage flex -->
        

        <!-- 3rd caption section -->
        <div class="relative mt-6">
            <div class="w-[2px] h-[20px] bg-[#293793] absolute top-[5px] "></div>
            <h3 class="ml-2 text-[20px]">Recent Log Activies</h3> 
        </div>

        <!-- log activies table -->
        <div class=" w-[94%] mx-auto mt-4 bg-white rounded-lg px-2 shadow-md mb-10">
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

export default {
    name : 'Page3Dashboard',
    data(){
        return{
            paddingClass : ''
        }
    },
    mounted(){
        const ctx = document.getElementById('myChart');
        const ctx1 = document.getElementById('myChart2');

        const myChart = new Chart(ctx, {
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
