import {defineStore } from 'pinia';



export const useWalletData = defineStore('wallet' , {
    state : () => ({
        // wallet GET data arr
        walletTableArr : [],

        // auth model blur
        authBlur : '',

        // close button
        openClose : false,

        // transation POST data arr
        transactionArr : [],

        // bucket name info data Arr,
        bucketNameArr : [],

        // folders array
        folderName : [],

        // bucket
        buck : 0,

        // display user details on
        userDetail : null,
        userData : null,

        


        
    }),
    actions :{

        // get data from the create wallet section and add to the array --> component --> page4Wallet
        addData(){
            this.walletTableArr.push(this.walletAuthModalData);
            this.openClose = false;
            this.authBlur = '';
            console.log(this.walletTableArr)

        },

        closeAuthModal(){
            this.openClose = true;
            this.authBlur = '';
        },

    },
    
},{persist: true,})