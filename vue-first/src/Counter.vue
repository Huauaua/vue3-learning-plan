<template>
  <div class="counter">
    <h2>计数器示例 (Composition API)</h2>
    <p>当前计数: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>

    <div v-if="count > 10" class="warning">
      计数已经超过10了！
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义响应式数据
const count = ref(0)

// 定义方法
const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}
</script>

<style scoped>
.counter {
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  text-align: center;
  font-family: Arial, sans-serif;
}

button {
  margin: 5px;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #3aa876;
}

.warning {
  margin-top: 10px;
  padding: 8px;
  background: #ffd700;
  color: #333;
  border-radius: 4px;
}
</style>