<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "User"
})
</script>

<template>
  <div class="user-page">
    <div class="user-profile">
      <div class="avatar">👤</div>
      <h2 class="username">用户名</h2>
      <p class="user-id">ID: 123456</p>
    </div>
    
    <div class="user-stats">
      <div class="stat-item">
        <span class="stat-number">10</span>
        <span class="stat-label">面经</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5</span>
        <span class="stat-label">收藏</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">8</span>
        <span class="stat-label">点赞</span>
      </div>
    </div>
    
    <div class="user-menu">
      <div class="menu-item">
        <span>个人设置</span>
        <span>→</span>
      </div>
      <div class="menu-item">
        <span>帮助中心</span>
        <span>→</span>
      </div>
      <div class="menu-item">
        <span>关于我们</span>
        <span>→</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-page {
  padding: 20px 0;
}

.user-profile {
  text-align: center;
  padding: 30px 0;
  border-bottom: 1px solid #000000;
  margin-bottom: 20px;
}

.avatar {
  font-size: 60px;
  margin-bottom: 10px;
}

.username {
  font-size: 20px;
  margin: 0 0 5px 0;
}

.user-id {
  color: #666666;
  margin: 0;
  font-size: 14px;
}

.user-stats {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #000000;
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666666;
}

.user-menu {
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #000000;
  cursor: pointer;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:hover {
  background-color: #f5f5f5;
}
</style>