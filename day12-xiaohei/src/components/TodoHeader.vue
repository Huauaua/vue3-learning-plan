<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodoHeader",
  data() {
    return {
      todoName: ''
    }
  },
  methods: {
    handleAdd() {
      if (!this.todoName.trim()) {
        alert('任务不能为空')
        return
      }
      this.$emit('add', this.todoName)
      console.log('添加任务：', this.todoName)
      this.todoName = ''
    }
  }
})
</script>

<template>
  <header class="header">
    <h1>小黑记事本</h1>
    <label>
      <input v-model="todoName" type="text" placeholder="请输入任务" class="new-todo" @keydown.enter="handleAdd">
    </label>
    <button class="add" @click="handleAdd" >添加</button>
  </header>
</template>

<style scoped>
  /* header 区域 — 只用圆润排版 */
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: normal;
    gap: 0.6rem 0.8rem;
    margin-bottom: 2.2rem;
    background: #fef9f2;
    border-radius: 30px;
    padding: 0.5rem 0.5rem 0.5rem 1.8rem;
    box-shadow: 0 4px 0 0 #ffd4cd;
    border: 2px solid #ffb7b2;
  }
  .header h1 {
    width: 100%;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 550;
    color: #5e4b3c;                      /* 可可棕（主色3） */
    letter-spacing: 1px;
    margin-right: 0.2rem;
    display: block;
    background: #fef9f2;
    padding: 0 0.2rem;
    text-shadow: 2px 2px 0 #ffd4cd;
  }
  .new-todo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2 1 200px;
    background: #fff9f5;
    border-radius: 30px;
    padding: 0.8rem 1.4rem;
    font-size: 1rem;
    color: #5e4b3c;
    border: 2px solid #ffb7b2;
    outline: none;
    transition: 0.15s;
  }
  .new-todo:focus {
    border-color: #5e4b3c;
    background: #ffffff;
  }
  .new-todo::placeholder {
    color: #dbb9ae;
    font-weight: 300;
  }
  .add {
    background: #fef9f2;
    border: 3px solid #ffb7b2;
    color: #5e4b3c;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.6rem 1.8rem;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 4px 0 0 #f5a19b;
    transition: 0.08s linear;
    line-height: 1.2;
  }
  .add:hover {
    background: #ffb7b2;
    color: #fef9f2;
    border-color: #faa29b;
    box-shadow: 0 4px 0 0 #c07b74;
  }
  .add:active {
    transform: translateY(4px);
    box-shadow: none;
  }
</style>