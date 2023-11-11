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

    actions : {}

})

