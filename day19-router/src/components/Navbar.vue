<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Logo 区域 -->
      <div class="nav-logo" @click="goHome">
        <img v-if="logo" :src="logo" alt="Logo" class="logo-img">
        <span class="logo-text">{{ title }}</span>
      </div>

      <!-- 桌面端导航菜单 -->
      <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
        <li v-for="item in menuItems" :key="item.path" class="nav-item">
          <router-link
              :to="item.path"
              class="nav-link"
              @click="closeMenu"
          >
            <i v-if="item.icon" :class="item.icon"></i>
            {{ item.name }}
          </router-link>
        </li>

        <!-- 可选：右侧按钮区域 -->
        <li class="nav-item nav-btn-item" v-if="showAuth">
          <button class="btn-login" @click="handleLogin" v-if="!isLoggedIn">登录</button>
          <button class="btn-logout" @click="handleLogout" v-else>退出</button>
        </li>
      </ul>

      <!-- 移动端汉堡菜单按钮 -->
      <div class="hamburger" @click="toggleMenu">
        <span class="bar" :class="{ 'active': isMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMenuOpen }"></span>
        <span class="bar" :class="{ 'active': isMenuOpen }"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    // 网站标题
    title: {
      type: String,
      default: 'MyApp'
    },
    // Logo 图片地址
    logo: {
      type: String,
      default: ''
    },
    // 菜单项数组 [{ name: '首页', path: '/', icon: 'fa fa-home' }]
    menuItems: {
      type: Array,
      default: () => [
        { name: '首页', path: '/', icon: '🏠' },
        { name: '竞赛', path: '/competitions', icon: '🏆' },
        { name: '组队', path: '/team', icon: '👥' },
        { name: '资讯', path: '/about', icon: '📰' },
        { name: '个人中心', path: '/profile', icon: '👤' }
      ]
    },
    // 是否显示登录/退出按钮
    showAuth: {
      type: Boolean,
      default: false
    },
    // 登录状态（由父组件控制）
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 切换移动端菜单
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      // 菜单打开时禁止 body 滚动
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    // 关闭移动端菜单
    closeMenu() {
      this.isMenuOpen = false
      document.body.style.overflow = ''
    },
    // 返回首页
    goHome() {
      this.$router.push('/')
      this.closeMenu()
    },
    // 滚动时改变导航栏样式
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    handleLogin() {
      this.$emit('login')
      this.closeMenu()
    },
    handleLogout() {
      this.$emit('logout')
      this.closeMenu()
    }
  }
}
</script>

<style scoped>
/* ========== CSS 变量 ========== */
.navbar {
  --nav-bg: #ffffff;
  --nav-bg-scrolled: rgba(255, 255, 255, 0.95);
  --nav-text: #333333;
  --nav-text-hover: #f97316;
  --nav-border: #e5e7eb;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s ease;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--nav-bg);
  z-index: 1000;
  transition: var(--transition);
  border-bottom: 1px solid transparent;
}

/* 滚动时样式 */
.navbar.scrolled {
  background: var(--nav-bg-scrolled);
  backdrop-filter: blur(10px);
  border-bottom-color: var(--nav-border);
  box-shadow: var(--shadow);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

/* ========== Logo 样式 ========== */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.logo-img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #f97316, #f59e0b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* ========== 桌面端菜单 ========== */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  color: var(--nav-text);
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--nav-text-hover);
  background: rgba(249, 115, 22, 0.08);
}

/* 激活状态 */
.router-link-active,
.router-link-exact-active {
  color: var(--nav-text-hover);
  background: rgba(249, 115, 22, 0.08);
}

/* 按钮样式 */
.btn-login,
.btn-logout {
  padding: 8px 20px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: var(--transition);
}

.btn-login {
  background: linear-gradient(135deg, #f97316, #f59e0b);
  color: white;
}

.btn-login:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
}

.btn-logout {
  background: #f3f4f6;
  color: #4b5563;
}

.btn-logout:hover {
  background: #e5e7eb;
}

/* ========== 移动端汉堡菜单 ========== */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
}

.bar {
  width: 25px;
  height: 3px;
  background: var(--nav-text);
  margin: 3px 0;
  transition: var(--transition);
  border-radius: 3px;
}

.bar.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* ========== 响应式 ========== */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 70px);
    background: white;
    padding: 24px 0;
    transition: var(--transition);
    gap: 0;
    overflow-y: auto;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    width: 100%;
  }

  .nav-link {
    padding: 16px 24px;
    justify-content: center;
  }

  .nav-btn-item {
    margin-top: 16px;
  }

  .btn-login,
  .btn-logout {
    width: calc(100% - 48px);
    margin: 0 24px;
  }
}
</style>