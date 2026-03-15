<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "XtxHeaderNav"
})
</script>

<template>
  <!-- 顶部导航 XtxHeaderNav -->
  <div class="header-nav">
    <div class="logo-area">
      <div class="logo">X</div>
      <span class="brand">Xtx 设计</span>
    </div>
    <div class="nav-links">
      <span class="active">首页</span>
      <span>好物</span>
      <span>品牌</span>
      <span>专题</span>
      <span>社区</span>
      <span>服务</span>
    </div>
    <div class="search-icon">🔍</div>
  </div>
</template>

<style scoped>
/* --- 顶部导航 (XtxHeaderNav) --- */
.header-nav {
  background: white;
  padding: 18px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}
.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  width: 48px;
  height: 48px;
  background: #1e1e2a;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
}
.brand {
  font-size: 22px;
  font-weight: 600;
  color: #1e1e2a;
}
.nav-links {
  display: flex;
  gap: 38px;
  font-weight: 500;
  color: #2e2e3a;
}
.nav-links span {
  cursor: default;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}
.nav-links span.active {
  border-bottom-color: #b18f6a;
  color: #b18f6a;
}
.search-icon {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a5a6e;
  font-size: 18px;
}
</style>