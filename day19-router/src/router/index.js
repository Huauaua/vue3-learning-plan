// 导入页面组件
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Competitions from '@/views/Competitions.vue'
import Team from '@/views/Team.vue'
import Profile from '@/views/Profile.vue'

// ✅ Vue Router 4 的正确导入方式
import { createRouter, createWebHistory } from 'vue-router'
import Notfind from "@/views/Notfind.vue";

// ✅ 创建路由配置（不需要 Vue.use()）
const router = createRouter({
    mode: 'hash',
    history: createWebHistory(),  // HTML5 模式
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/competitions', name: 'Competitions', component: Competitions },
        { path: '/team', name: 'Team', component: Team },
        { path: '/profile', name: 'Profile', component: Profile },
        // 404 重定向
        { path: '/:pathMatch(.*)*', component: Notfind}
    ]
})

// ✅ 导出路由
export default router