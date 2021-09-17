import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import installElementPlus from './plugins/element.js'
import 'element-plus/lib/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import 'moment/locale/zh-cn'
import './utils/rem'

const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
