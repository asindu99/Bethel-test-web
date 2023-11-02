import {defineStore} from 'pinia';

export const authUser = defineStore('authUser', {
    state : () => ({
        authUserDetailsArr : [],

    }),

    actions : {
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
        }
    }
})