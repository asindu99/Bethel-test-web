<template>
    <div class="relative lg:px-2 md:px-5 sm:px-4 min-[320px]:px-2">
    
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
                            <h4 class="font-bold text-[30px]">Public_storage_0 </h4>
                        </div>
                        <!-- end of the bucket main -->

                    </div>

                    <!-- right side button -->
                    <!-- <div class="flex">
                            <input type="file" id="upload" hidden>
                            <label for="upload" class="border-[2px] px-2 py-2 rounded-xl bg-sidebarBG w-[150px] text-[white] text-center
                            font-medium hover:text-sidebarBG hover:bg-[white] transition-all ease-linear hover:border-sidebarBG cursor-pointer">Upload file</label>
                        
                    </div> -->
                </div>
                <!-- end of the head section -->


                <div class="flex justify-center p-20 mt-10">
                    <input type="file" @change="handleFileUpload" id="upload"/>
                    <button @click="uploadFile" class="border-[2px] px-2 py-2 rounded-xl bg-sidebarBG w-[150px] text-[white] text-center
                            font-medium hover:text-sidebarBG hover:bg-[white] transition-all ease-linear hover:border-sidebarBG cursor-pointer">Upload File</button>
                </div>
                
            </div>
        
        </div>
        <!-- end of the bucket section -->

        <!-- table section -->
        <div>
          <table class="table-auto border-separate py-2 w-full rounded-lg bg-white px-2">
                    <thead class="">
                        <tr class="">
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">File Name</th>
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">CID</th>
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">BECX URL</th>
                        <th class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] border p-3 bg-blue-50">GCS URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="upload in uploadDetails" :key="upload.cid">
                          <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3"> {{upload.filename}}</td>
                          <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3">{{upload.cid}}</td>
                          <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3"><a :href=upload.downurl target="_blank">Download</a></td>
                          <td class="text-[14px] min-[320px]:text-[8px] lg:text-[14px] md:text-[12px] text-center bg-white border p-3"><a :href=upload.gcsurl target="_blank">Download</a></td>
                        
                  
                       
                        </tr>

                        
                        
                    </tbody>
                </table>
        </div>

    </div>

    
    
        
</template>
  
  <script>
  import axios from "axios";
  import {mapStores} from 'pinia'
  import {authUser} from '@/stores/authUser'
  
  export default {
    data() {
      return { 
  
        file:null,
        uploadDetails : null,

      };
    },
    mounted(){
      const uploadDetails2 = JSON.parse(localStorage.getItem('uploadDetails'))
      this.uploadDetails = uploadDetails2
      console.log(this.uploadDetails)
      

    },
    computed : {
      ...mapStores(authUser)
    },
    methods: { 
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      async uploadFile() {
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('userid', this.authUserStore.userID);
        formData.append('bucket', 'Public_storage_0');
  
        try {
          const response = await axios.post('https://api.bethel.network/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            
          },{
            withCredentials : true,
          });
          console.log(response.data);
          alert('File uploaded successfully');
        } catch (error) {
          console.log(error);
          alert('Error uploading file');
        }
      }
    },
  };
  </script>
  

  