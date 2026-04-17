<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LayoutPage"
})
</script>

<template>
  <div class="layout-container">
    <div class="content">
      <router-view></router-view>
    </div>
    <nav class="tabbar">
      <router-link to="/article" class="tab-item">面经</router-link>
      <router-link to="/collect" class="tab-item">收藏</router-link>
      <router-link to="/like" class="tab-item">喜欢</router-link>
      <router-link to="/user" class="tab-item">我的</router-link>
    </nav>
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #000000;
}

.content {
  flex: 1;
  padding: 20px;
  margin-bottom: 60px; /* 为底部导航栏留出空间 */
}

.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #000000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid #ffffff;
}

.tab-item {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab-item:hover {
  background-color: #333333;
}

.tab-item.router-link-active {
  background-color: orange;
  color: #000000;
  font-weight: bold;
}
.tab-item.router-link-active:hover {
  background-color: #ffc125;
  color: #000000;
  font-weight: bold;
}
</style>