import {defineStore} from 'pinia'
import router from '@/router/index'
import axios from 'axios';

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

            console.log(values.email)

            const res = await axios.post('https://mw.bethel.network/auth/register' , 
            {
                email: values.email,
                username: values.username,
                password: values.password,
                firstName: values.FirstName,
                lastName: values.LastName,
                country: values.country,
                code: values.code,
                mobile: values.mobile
            })
            console.log(res)

            if(res.error){
                console.log(res.error)
            }
            else{
                router.push('/login')
            }
        },

        // post login details into the jason file --> component --> loginContent2

        // async postLoginData(values){
        //     this.loginDataArr.push(values)

        //     const res  = await fetch('https://mw.bethel.network/auth/login' , {
        //         method : 'POST',
        //         body : JSON.stringify(values),
        //         credentials : 'include',
        //         headers : {'Content-Type' : 'application/json'}
        //     })
        //     if(res.error){
        //         console.log(res.error)
        //     }
        //     else {
        //         router.push('/');
        //         console.log('loged in');
        //         this.userLog = true;
        //     }
        // }

        async postLoginData(values){
            // this.loginDataArr.push(values)

            const res  = await axios.post('https://mw.bethel.network/auth/login' ,
                {
                    email: values.email,
                    password: values.password
                }
            )

            console.log(res)
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