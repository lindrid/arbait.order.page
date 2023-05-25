import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from '@/router'
import axios from '@bundled-es-modules/axios/axios.js'
import VueSilentbox from 'vue-silentbox'

import App from '@/App.vue'

import '@/styles/index.css'
import '@/styles/app.css'
import 'vue-silentbox/dist/style.css'

const instance = axios.create({
    baseURL: 'https://arbait.in/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App)
    .use(router)
    .use(VueSilentbox)
    .use(pinia);

app.config.globalProperties.$axios = instance;

app.mount('#app');

