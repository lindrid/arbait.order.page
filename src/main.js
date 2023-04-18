import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import axios from '@bundled-es-modules/axios/axios.js'


import '@/styles/index.css'
import '@/styles/app.css'

const instance = axios.create({
    baseURL: 'https://test.arbait.in/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },

})

const app = createApp(App)
.use(router)
.use(createPinia());

app.config.globalProperties.$axios = instance;

app.mount('#app');