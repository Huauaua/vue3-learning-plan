<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter()
    return { router }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleClick() {
      // 带着输入框的值跳转
      this.router.push({
        path: '/profile',
        query: { name: this.inputValue }
      })
    }
  }
})
</script>

<template>
  <div>
    <h1>Home</h1>
    <label>
      <input type="text" v-model="inputValue" placeholder="输入搜索内容">
      <button @click="handleClick">跳转</button>
    </label>
  </div>
</template>