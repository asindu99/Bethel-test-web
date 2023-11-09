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

        


        
    }),
    actions :{

        // get  data from the bucket names and push into to getarr 
        async getBucketNames(){
            const res = await fetch('')
            const data = await res.json();

            this.bucketNameArr = data; 
           
            if(res.error){
                console.log(res.error)
            }
            this.buck = this.bucketNameArr.length
        },

        // get data from jason server for the wallet content table --> component --> page4Wallet
        async getData(){
            const ref = await fetch('http://localhost:3000/wallets')
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

        },

        // add data into the bucket name json --> component --> storage
        async postBucketNameData(values){
            this.bucketNameArr.push(values)

            const res = await fetch('http://localhost:3000/bucketNames' , {
                method : 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}

            })

            if(res.error){
                console.log(res.error)
            }
        },

        // delete bucket name data
        async deleteBucketName(id){
            this.bucketNameArr = this.bucketNameArr.filter(t => {
                return t.id !== id
            })

            const res = await fetch('http://localhost:3000/bucketNames/'  + id , {
                method : 'DELETE',

            })
            
            if(res.error){
                console.log(res.error)
            }
            
        },

        // post folder names data into the array 
        async postFolderName(values){
            this.folderName.push(values);

            const res = await fetch('http://localhost:3000/folderNames' , {
                method : 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}
            })

            if(res.error){
                console.log(res.error)
            }
        }
    },
})