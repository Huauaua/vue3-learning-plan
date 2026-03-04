<script setup lang="ts">

</script>

<template>
  <div>
    <a v-bind:href="url">菜鸟</a>
    <a v-bind:href="url2">百度</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.runoob.com',
      url2: 'https://www.baidu.com'
    };
  }
};
</script>
<style scoped>

</style>