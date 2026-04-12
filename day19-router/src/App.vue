<template>
  <div>
    <Navbar
        title="竞赛智能通"
        logo="/logo.png"
        :menuItems="menuItems"
        :showAuth="true"
        :isLoggedIn="isLoggedIn"
        @login="handleLogin"
        @logout="handleLogout"
    />

    <!-- 占位元素，防止内容被固定导航栏遮挡 -->
    <div style="height: 70px;"></div>

    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      isLoggedIn: false,
      menuItems: [
        { name: '首页', path: '/', icon: '🏠' },
        { name: '竞赛', path: '/competitions', icon: '🏆' },
        { name: '组队', path: '/team', icon: '👥' },
        { name: '资讯', path: '/about', icon: '📰' },
        { name: '个人中心', path: '/profile/小明', icon: '👤' }
      ]
    }
  },
  methods: {
    handleLogin() {
      // 跳转登录页或弹窗
      this.isLoggedIn = true
    },
    handleLogout() {
      this.isLoggedIn = false
    }
  }
}
</script>

<style scoped>
</style>