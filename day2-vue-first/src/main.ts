import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// PrimeVue 核心
import PrimeVue from 'primevue/config'

// 主题样式 (选择其中一个)
import 'primevue/resources/themes/lara-light-blue/theme.css'  // 亮色主题
// import 'primevue/resources/themes/lara-dark-blue/theme.css' // 暗色主题
import 'primevue/resources/primevue.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'  // 可选，用于 flex 工具类

const app = createApp(App)

app.use(router)
app.use(PrimeVue)


app.mount('#app')


