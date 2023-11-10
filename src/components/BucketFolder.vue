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



    </div>

    
    
        
</template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {

          userID: "1", 
  
        file:null,

      };
    },
    methods: { 
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
      async uploadFile() {
        const formData = new FormData();
        formData.append('file', this.file);
        formData.append('userid', '1');
        formData.append('bucket', 'Public_storage_0');
  
        try {
          const response = await axios.post('https://api.bethel.network/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
          alert('File uploaded successfully');
        } catch (error) {
          console.error(error);
          alert('Error uploading file');
        }
      }
    },
  };
  </script>
  

  