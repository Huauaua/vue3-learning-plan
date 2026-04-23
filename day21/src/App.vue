<script>
import {defineComponent} from "vue";
import Son1 from "@/components/son1.vue";
import Son2 from "@/components/son2.vue";

export default defineComponent({
  components: {Son2, Son1}
})


</script>
<template>
  <div id="app">
    father
    <son1></son1>
    <son2></son2>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
