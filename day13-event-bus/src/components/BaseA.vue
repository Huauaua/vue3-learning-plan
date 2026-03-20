<script lang="ts">
import {defineComponent} from 'vue'
import Bus from '../utils/EventBus'

export default defineComponent({
  name: "BaseA",
  created(): any {
    Bus.on('sendMsg', (msg) => {
      console.log(msg)
    })
  }
})

</script>

<template>
  <div style="width: 200px; height: 200px;border: black solid 1px; padding: 10px; margin: 10px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
    BaseA
  </div>
</template>

<style scoped>

</style>