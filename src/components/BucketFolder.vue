<template>
  <div class="relative lg:px-2 md:px-5 sm:px-4 min-[320px]:px-2 mb-10">
  
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
              </div>
              <!-- end of the head section -->
              
            
              <div class="hidden flex flex-col py-20 px-10 mt-10  bg-white rounded-lg shadow-lg">
                  <h1 class="flex items-start lg:text-2xl md:text-2xl sm:text-xl min-[320px]:text-[20px] font-bold text-center mt-[-30px] text-left">You can Upload Files</h1>
                  <div class="flex lg:flex-col md:flex-col sm:flex-col items-center min-[320px]:flex-col  items-center justify-center mt-8 border-4 border-dashed rounded-lg border-blue-100 w-full py-10 min-[320px]:p-8">
                      <div class="flex flex-col">

                             <div  class="flex content-center">
                                <input type="file" @change="handleFileUpload" id="upload" hidden class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border 
                                        border-none border-sidebarBG bg-clip-padding px-3 py-3 text-[14px] file:bg-sidebarBG
                                        text-[white] transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer 
                                        file:overflow-hidden file:rounded-lg file:border-2 file:border-sidebarBG file:border-inherit 
                                        file:px-8 file:py-1 file:text-sidebarBG file:transition file:duration-150 
                                        file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
                                        hover:file:bg-none  hover:file:text-white focus:border-primary focus:text-sidebarBG focus:shadow-te-primary 
                                        dark:text-sidebarBG sidebarBG:file:bg-sidebarBG file:text-white 
                                        sidebarBG:focus:border-primary file:w-[200px] file:px-2 file:py-2 file:font-['Montserrat']"/>
                                
                              </div>
                            <div class="">
                              <button @click="uploadFile" class="border-[2px] px-4 py-2 rounded-xl bg-sidebarBG w-[200px] text-[white] text-center
                                  text-[14px] hover:text-sidebarBG hover:bg-[white] transition-all ease-linear hover:border-sidebarBG cursor-pointer mt-4 drop-shadow-xl">Upload File
                              </button>
                            </div>
                        
                      </div>

                      <div :class="showClass" class="flex mt-8 ">
                     
                        <div id="loader" class="flex items-center"></div>
                        <div class="ml-10"> <p class="text-14px"></p> </div>
                    
                      </div>

                  
                  </div>

              </div>

              <!-- uplaod section -->
              <div class="flex flex-col justify-center w-full bg-white rounded-md mt-5">
                <!-- upload file decorations -->
                <div class="flex flex-col w-full justify-center">
                  <h3>Upload your Files here</h3>
                  <h4>Click to upload</h4>
                </div>

                <!-- file iupload box -->
                <div>
                  <label for="file-uplaod" class="bg-sidebarBG py-2 px-4 rounded-md text-white ">Upload Files</label>
                  <input type="file" id="file-uplaod" @change="handleFileUpload" hidden class="bg-red w-[300px] h-[200px]">

                  <h3>{{ filename }}</h3>

                </div>

              </div>

          </div>
      
      </div>
      <!-- end of the bucket section -->

      <!-- table section -->
      <div>

        <div class="relative mt-10">
                  <div class="w-[2px] h-[20px] bg-bethelBlue absolute top-[5px] "></div>
                  <h3 class="ml-2 text-[20px]">File History</h3> 
        </div>
        <table class="table-auto border-separate py-2 w-full rounded-lg bg-white px-2 mt-8">
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
import {authUser} from '@/stores/AuthUser'

export default {
  data() {
    return { 

      file:null,
      filename : '',
      uploadDetails : null,
      showClass : 'hidden'

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
      this.filename = event.target.files[0].name
    },
    async uploadFile() {
      this.showClass = '';
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
        this.showClass = 'hidden';
        alert('File uploaded successfully');
        
      } catch (error) {
        console.log(error);
        alert('Error uploading file');
      }
    }
  },
};
</script>

<style scoped>
#loader {
border: 8px solid #f3f3f3;
border-radius: 50%;
border-top: 8px solid #5669cc;
border-bottom: 8px solid #5669cc;
width: 40px;
height:40px;
-webkit-animation: spin 2s linear infinite;
animation: spin 2s linear infinite;

}

@-webkit-keyframes spin {
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
</style>
