<script lang="ts">
export default {
  name: 'String',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div style="border: 1px solid #42b983; padding: 10px;width: 200px; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <div>String</div>
    <div>{{ message }}</div>
  </div>
</template>

<style scoped>

</style>