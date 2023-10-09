
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./main.css"
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
// axios.defaults.headers.common['Token'] = authStore.token;  

