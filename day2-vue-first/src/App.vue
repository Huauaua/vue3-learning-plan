<script setup lang="ts">
import Counter from "./components/Counter.vue";
import Mylink from "@/components/Mylink.vue";
import ComputeAmount from "./components/ComputeAmount.vue";
import MyString from "@/components/String.vue";
import {router} from "./router";
</script>
<style>
/* 1. 全局样式和字体优化 */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin-bottom: 300px;
  padding: 20px;
  background-color: #f4f7f6;
  color: #333;
}

/* 2. 容器样式 */

/* 3. 标题样式 */
h1 {
  color: #2c3e50;
  border-bottom: 2px solid #42b983; /* Vue 绿 */
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* 4. 导航区域样式 */
p {
  margin: 15px 0;
}

/* 5. 链接样式 */
a {
  text-decoration: none;
  color: #2c3e50;
  padding: 8px 15px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  margin-right: 10px;
  border: 1px solid transparent;
}

a:hover {
  background-color: #e8f5e9; /* 浅绿背景 */
  color: #42b983;
}

/* 6. 激活链接的样式 (Vue Router 自动添加的 class) */

/* 7. 路由视图内容样式 */
.router-view-content {
  margin-top: 30px;
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 4px;
  background-color: #fafafa;
  min-height: 100px; /* 确保内容区可见 */
}
</style>
<template>
    <Counter style="background-color: lightgray">啊实打实大苏打实打实</Counter>
    <Mylink style="background-color: lightgray"/>
    <ComputeAmount style="background-color: lightgray"/>
    <!-- Prop验证示例 -->
    <MyString message="prop验证" style="background-color: lightgray">String组件A</MyString>
    <MyString :message="1 + 1" style="background-color: lightgray">String组件B</MyString>
  <!-- 路由视图 -->
  <div style="background-color: lightgray">
    <h1>
      你已成功创建 Vue 3 应用
    </h1>
    <router-link to="/about">Go to About</router-link>
    <router-link to="/counter">Go to Counter</router-link>
    <div class="router-view-content">
      <router-view></router-view>
    </div>
  </div>
</template>
