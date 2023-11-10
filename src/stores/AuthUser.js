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
        token : null,
        
        // axios res details arr
        userDetails : [],

        // auth user details arr
        authUserDetails : []

    }),

    actions : {
        // post signup form data into json --> componet --> signup-third
        async postAuthUserData(values){
            this.authUserDetailsArr.push(values)

            console.log(values.email)

            const res = await axios.post('https://mw.bethel.network/auth/register' , 
            {withCredentials : true},
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
                router.push('/')
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
            // get user data
            // const userData = res.data.details.firstName
            // console.log(userData)
            
            if(res.error){
                console.log(res.error)
            }
            else {
                console.log(res)
                this.userDetails.push(res.data)

                // gettinf user id
                this.userID = this.userDetails[0]._id
                console.log(this.userID)

                // getting user data
                const userData = this.userDetails[0].details
                this.authUserDetails.push(userData);

                console.log(this.authUserDetails[0])

                // console.log(this.userDetails.details)
                router.push('/home');
            }
        }


    }
},{persist: true,})