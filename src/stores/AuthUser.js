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
        authUserDetails : [],

        // user data arr
        userDataArr : [],


    }),

    actions : {
        // post signup form data into json --> componet --> signup-third
        async postAuthUserData(values){
            this.authUserDetailsArr.push(values)

            console.log(values.email)

            const res = await axios.post('https://mw.bethel.network/auth/register', {
                email: values.email,
                username: values.username,
                password: values.password,
                firstName: values.FirstName,
                lastName: values.LastName,
                country: values.country,
                code: values.code,
                mobile: values.mobile
            }, {
                withCredentials: true
            });

            if(res.error){
                console.log(res.error)
            }
            else{
                router.push('/')
            }
        },

        async postLoginData(values){
            try {
                
            } catch (error) {
                
            }

            const res = await axios.post('https://mw.bethel.network/auth/login' ,
                {
                    email: values.email,
                    password: values.password,  
                },
                {
                    withCredentials: "true",
                    
                }
            );
            
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

                const userData2 = res.data.details
                this.userDataArr.push(userData2);

                // Save the updated data to localStorage whenever it changes

                // save user details
                localStorage.setItem('userDetails', JSON.stringify(res.data.details))

                // save user data
                localStorage.setItem('userData', JSON.stringify(res.data))


                //get storage details
                const res3 = await axios.get('https://mw.bethel.network/storagedetails/' + this.userID,
                {withCredentials : true})
                localStorage.setItem('storageDetails', JSON.stringify(res3.data))


                

                router.push('/home');
            }
        },

    }
}
)