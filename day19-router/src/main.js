import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// 导入页面组件
import Home from './views/Home.vue'
import About from './views/About.vue'
import Competitions from './views/Competitions.vue'
import Team from './views/Team.vue'
import Profile from './views/Profile.vue'

// 创建路由配置
const router = createRouter({
    history: createWebHistory(),  // HTML5 模式
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/competitions', name: 'Competitions', component: Competitions },
        { path: '/team', name: 'Team', component: Team },
        { path: '/profile', name: 'Profile', component: Profile },
        // 404 重定向
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
})

// 创建应用并挂载路由
const app = createApp(App)
app.use(router)
app.mount('#app')