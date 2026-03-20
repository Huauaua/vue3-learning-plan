<script lang="ts">
import {defineComponent} from 'vue'
import Bus from '../utils/EventBus'
export default defineComponent({
  name: "BaseB",
  methods: {
    sendMessage() {
      Bus.emit('sendMsg', '发起总进攻！')
    }
  }
})
</script>

<template>
  <div style="width: 200px; height: 200px;border: black solid 1px; padding: 10px; margin: 10px;display: flex;flex-direction: column;align-items: center;justify-content: center;">
    BaseB
    <br>
    <button @click="sendMessage">发送消息到BaseA</button>
  </div>
</template>

<style scoped>

</style>