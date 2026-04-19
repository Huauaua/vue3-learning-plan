<script>
  export default {
    name:"h5-wrapper",
    data() {
      return {

      }
    }
  }
</script>

<template>
  <div class="h5-wrapper">
      <router-view></router-view>
  </div>
</template>
<style scoped>
.h5-wrapper{
  max-width: 750px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #ffffff;
  color: #000000;
  font-family: Arial, sans-serif;
}
</style>
