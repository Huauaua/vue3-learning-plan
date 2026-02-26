<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Counter from "./components/Counter.vue";
import HelloWorld from './components/HelloWorld.vue'
import Mylink from "@/components/Mylink.vue";
import ComputeAmount from "./components/ComputeAmount.vue";
import MyString from "@/components/String.vue";
</script>

<template>
  <header>
    <div id="app">
      <HelloWorld msg="你已成功" />
    </div>
  </header>
  <Counter>啊实打实大苏打实打实</Counter>
  <Mylink/>
  <ComputeAmount />
  <MyString message="prop验证">String组件A</MyString>
  <MyString message=1+1>String组件A</MyString>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
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

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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
