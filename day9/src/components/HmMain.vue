<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "HmMain"
})
</script>

<template>
  <div class="hm-main">
    <h1>这是一个Main</h1>
  </div>
</template>

<style scoped>
  .hm-main {
    height: 500px;
    line-height: 500px;
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    margin: 0;
  }

</style>