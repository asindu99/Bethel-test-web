import {defineStore} from 'pinia'
import router from '@/router/index'

export const authUser = defineStore('authUser', {
    state : () => ({
        authUserDetailsArr : [],
        authMobileOTP : [],

    }),

    actions : {
        // add signup form data into json --> componet --> signup-third
        async postAuthUserData(values){
            this.authUserDetailsArr.push(values)

            const res = await fetch('http://localhost:3000/userDetails' , {
                method : 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}
            })

            if(res.error){
                console.log(res.error)
            }
            else{
                router.push('/mobile-verify')
            }
        },

        // add mobile OTP into the json --> component --> mobileVerify
        async postMobileOTP(values){
            this.authMobileOTP.push(values)

            const res = await fetch('http://localhost:3000/OTP' , {
                method : 'POST',
                body : JSON.stringify(values),
                headers : {'Content-Type' : 'application/json'}

            });

            if(res.error){
                console.log(res.error)
            }
            else{
                router.push('/')
            }
        }
    }
})