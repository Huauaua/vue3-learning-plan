<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "HmFooter"
})
</script>

<template>
  <div class="hm-footer">
    <h1>这是一个Main</h1>
  </div>
</template>

<style scoped>
  .hm-footer {
    height: 100px;
    line-height: 100px;
    background-color: darkslateblue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    margin: 10px 0;
  }

</style>