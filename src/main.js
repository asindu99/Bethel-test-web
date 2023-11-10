import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "./assets/base.css"
import './axios'

import VueCookies from 'vue-cookies'

import VeeValidatePlugin from "@/includes/validation"

import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import axios from 'axios'

// async function getAuth(){
//     const res = await axios.post('https://mw.bethel.network/auth/user')
//     console.log(res)
// }

// getAuth();


const app = createApp(App)


const pinia = createPinia();

pinia.use(piniaPluginPersistedState)
app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)
app.use(VueCookies);

app.mount('#app')
