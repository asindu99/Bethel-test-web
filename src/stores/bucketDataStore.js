import {defineStore} from 'pinia';

export const useBucketData = defineStore('bucket' , {
    state : () => ({

        //bucket input data Arr
        bucketTableArr : [],

        //bucket get data arr
        bucketTableArr2 : [],

        //folder input data arr
        folderTableArr:[],

        //folder get data arr
        folderTableArr2 : [],

        // auth modal blur 
        authBlur : '' ,

        // close button 
        openClose : false,
    }),

    actions : {
        //bucket get data from json server and add to the array
        addData(){
            this.bucketTableArr.push(this.bucketAuthModalData);
            this.openClose = false;
            this.authBlur = '',
            console.log(this.bucketTableArr);

        },

        closeAuthModal(){
            this.openClose =false;
            this.authBlur = '';
        },

        //add bucket details info json
         async addBucketData(values){
            this.bucketTableArr.push(values)

            const res = await fetch('http://localhost:3000/bucket', {
                method: 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}
            });
            if(res.error){
                console.log(res.error)
            }
         },

        //bucket get data
        async getData(){
            const ref = await fetch('http://localhost:3000/bucket')
            const data = await ref.json();
            this.bucketTableArr2 = data;
        },

        //folder get data from json server and add to the array
        addFolderData(){
            this.folderTableArr.push(this.folderAuthModalData);
            this.openClose = false;
            this.authBlur = '',
            console.log(this.folderTableArr);

        },

        
        //add folder details info json
        async addFolderData(values){
            this.folderTableArr.push(values)

            const res = await fetch('http://localhost:3000/folder', {
                method: 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}
            });
            if(res.error){
                console.log(res.error)
            }
         },


        //folder get data
        async getFolderData(){
            const ref = await fetch('http://localhost:3000/folder')
            const data = await ref.json();
            this.folderTableArr2 = data;
        },



    }

})

