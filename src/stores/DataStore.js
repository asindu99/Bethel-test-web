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

        //create bucket data Arr,
        bucketNameArr : [],

        
    }),
    actions :{

        // get data from jason server for the wallet content table --> component --> page4Wallet
        async getData(){
            const ref = await fetch('http://localhost:3000/quotes')
            const data = await ref.json();
            this.walletTableArr = data
        },

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

        // add trasaciton details into the json  --> component --> page4Wallet
        async addTransactionData(values){
            this.transactionArr.push(values)

            const res = await fetch('http://localhost:3000/transactions', {
                method : 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}
            });

            if(res.error){
                console.log(res.error)
            }

        }

    },
})