import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "element-plus/theme-chalk/src/base.scss";
import "element-plus/theme-chalk/src/notification.scss";
// import Tres from '@tresjs/core'
// import THREE from 'three'
// import ElementPlus from 'element-plus'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).mount('#app')
