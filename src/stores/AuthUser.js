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

            console.log(values.country)


            const res = await axios.post('https://mw.bethel.network/auth/register' , 
            {withCredentials : true},
            {
                "email": values.email,
                "username": values.username,
                "password": values.password,
                "firstName": values.FirstName,
                "lastName": values.LastName,
                "country": values.country,
                "code": values.code,
                "mobile": values.mobile
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
            try {
                
            } catch (error) {
                
            }

            const res = await axios.post('https://mw.bethel.network/auth/login' ,
                {
                    email: values.email,
                    password: values.password,  
                },
                {
                    withCredentials: "same-origin",
                    
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

                const res3 = await axios.get('https://mw.bethel.network/storagedetails/' + this.userID ,
                {withCredentials :true});

                // save wallet details
                localStorage.setItem('storageDetails', JSON.stringify(res3.data))

                
            

                router.push('/home');
            }
        },

        // async postFileData(values) {
        //     try {
        //         console.log(values);
        //         console.log(this.authUserStore.userID);

        //         const formData = new FormData();
        //         formData.append("file", values.file);

        //         formData.append("userid", 1);

        //         formData.append("bucket", public_storage_0);


        //         const res = await axios.post(
        //         `https://api.bethel.network/upload`,
        //         formData,
        //         {
        //             withCredentials: true,
        //             headers: {
        //             "Content-Type": "multipart/form-data",
        //             },
        //         }
        //         );

        //         console.log(res);

        //         if (res.data && res.data.error) {
        //         console.error(res.data.error);
        //         } else {
        //         console.log("File uploaded successfully");
        //         }
        //     } catch (error) {
        //         console.error("Error uploading file:", error);
        //     }
        //     }


    }
}
)