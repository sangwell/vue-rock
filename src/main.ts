import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'

import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.use(Antd).mount('#app')
