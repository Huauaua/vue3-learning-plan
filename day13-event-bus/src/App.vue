<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <BaseA></BaseA>
    <BaseB></BaseB>
  </div>
</template>

<script>
import BaseA from './components/BaseA.vue'
import BaseB from './components/BaseB.vue'
export default {
  components: {
    BaseA,
    BaseB
  }
}
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: left;
  }
</style>

