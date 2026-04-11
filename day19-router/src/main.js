import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // ✅ 导入路由配置

// 创建应用并挂载路由
const app = createApp(App)
app.use(router)  // ✅ 现在 router 已定义
app.mount('#app')