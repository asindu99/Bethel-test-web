import {defineStore } from 'pinia';



export const useWalletData = defineStore('wallet' , {
    state : () => ({
        walletTableArr : [],

        walletAuthModalData : {
            publicKeys : 'Publickkey1231413',
            walletAddress : 'ipv4/dsfsdfsdfs',
            Active : 'Online',
            },
            // auth model blur
            authBlur : '',

            // close button
            openClose : false,
        
    }),
    actions :{
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
})