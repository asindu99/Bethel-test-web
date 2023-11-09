import {defineStore} from 'pinia'
import router from '@/router/index'
import axios from 'axios';

export const authUser = defineStore('authUser', {
    state : () => ({
        authUserDetailsArr : [],
        authMobileOTP : [],
        loginDataArr : [],
        userLog : false,
        user : '',
        userID : null,
        

        userDetails : [],

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

        async postLoginData(values){
            // this.loginDataArr.push(values)

            const res = await axios.post('https://mw.bethel.network/auth/login' ,
                {
                    email: values.email,
                    password: values.password,  
                },
            );

            if(res.error){
                console.log(res.error)
            }
            else {
                this.userLog = true;
                this.userDetails.push(res.data)

                this.userID = this.userDetails[0]._id
                console.log(this.userID)
                console.log(this.userDetails)
                router.push('/home');
            }
        }


    }
})