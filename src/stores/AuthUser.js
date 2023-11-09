import {defineStore} from 'pinia'
import router from '@/router/index'

export const authUser = defineStore('authUser', {
    state : () => ({
        authUserDetailsArr : [],
        authMobileOTP : [],
        loginDataArr : [],
        userLog : false,

    }),

    actions : {
        // post signup form data into json --> componet --> signup-third
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

        // post mobile OTP into the json --> component --> mobileVerify
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
        },

        // post login details into the jason file --> component --> loginContent2

        async postLoginData(values){
            // this.loginDataArr.push(values)

            const res  = await fetch('https://mw.bethel.network/auth/login' , {
                method : 'POST',
                body : JSON.stringify(values),
                credentials : 'include',
                headers : {'Content-Type' : 'application/json'}
            })
            if(res.error){
                console.log(res.error)
            }
            else {
                router.push('/');
                console.log('loged in');
                this.userLog = true;
            }
        }
    }
})