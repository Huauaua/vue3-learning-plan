<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "father"
})
</script>

<template>
  <div>
    <h1>father</h1>
  </div>
</template>

<style scoped>
  h1{
    color: black;
    border: black 2px solid;
    width: 400px;
    height: 400px;
    //background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>