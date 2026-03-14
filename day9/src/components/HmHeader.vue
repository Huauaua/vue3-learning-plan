<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "HmHeader"
})
</script>

<template>
  <div class="hm-header">
    <h1>这是一个Header</h1>
  </div>
</template>

<style scoped>
  .hm-header {
    height: 100px;
    line-height: 100px;
    background-color: mediumpurple;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    margin-top: 10px;
  }

</style>