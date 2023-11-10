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
                    <input type="file" @change="handleFileChange" id="upload"/>
                    <button @click="postFileData" class="border-[2px] px-2 py-2 rounded-xl bg-sidebarBG w-[150px] text-[white] text-center
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
        authUserStore: {
          userID: "1", 
    
        },
        file:null

      };
    },
    methods: { 
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      // async uploadFile() {
      //   try {
      //     await this.postFileData({ file: this.file });
      //   } catch (error) {
      //     console.error("Error uploading file:", error);
      //   }
      // },
      async postFileData(values) {
        try {
          console.log(values);
          console.log(this.authUserStore.userID);
  
          const formData = new FormData();
            formData.append("file", this.file);

            formData.append("userid", this.authUserStore.userID);

            formData.append("bucketName", "public_storage_0");


          const res = await axios.post(
            `https://api.bethel.network/upload`,
            formData,
            {
              withCredentials: true,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
  
          console.log(res);
  
          if (res.data && res.data.error) {
            console.error(res.data.error);
          } else {
            console.log("File uploaded successfully");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      },
    },
  };
  </script>
  

  