<script setup lang="ts">
import Counter from "./components/Counter.vue";
import HelloWorld from './components/HelloWorld.vue'
import Mylink from "@/components/Mylink.vue";
import ComputeAmount from "./components/ComputeAmount.vue";
import MyString from "@/components/String.vue";
import { router } from "./router";
</script>

<template>
  <div id="app">
    <!-- 头部区域 -->
    <header>
      <HelloWorld msg="你已成功" />
    </header>

    <!-- 主要内容区域 -->
    <main>
      <Counter>啊实打实大苏打实打实</Counter>
      <Mylink />
      <ComputeAmount />

      <!-- Prop验证示例 -->
      <MyString message="prop验证">String组件A</MyString>
      <MyString :message="1 + 1">String组件B</MyString>
      <router-link to="/about">Go to About</router-link>
      <router-link to="/counter">Go to Counter</router-link>
    </main>
    
    <!-- 路由视图 -->
    <router-view style="width: 500px; height: 350px; margin: 0 auto; border: 1px solid #ccc; padding: 10px; border-radius: 5px;"></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
