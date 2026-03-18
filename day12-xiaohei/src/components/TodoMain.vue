<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodoMain",
})
</script>

<template>
  <ul class="todo-list">
    <li class="todo">
      <div class="view">
        <span class="index"></span>
        <label class="todo-label"></label>
        <button class="del">删除</button>
      </div>
    </li>
  </ul>

</template>

<style scoped>
/* 任务列表 — 纯粹卡片样式 */
.todo-list {
  list-style: none;
  margin: 1.5rem 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  max-height: 360px;
  overflow-y: auto;
  padding-right: 0.3rem;
  padding-left: 0.3rem;
  padding-bottom: 0.3rem;
  scrollbar-width: thin;
  scrollbar-color: #ffb7b2 #fef9f2;
}
.todo-list::-webkit-scrollbar {
  width: 8px;
}
.todo-list::-webkit-scrollbar-track {
  background: #ffeae5;
  border-radius: 12px;
}
.todo-list::-webkit-scrollbar-thumb {
  background: #ffb7b2;
  border-radius: 12px;
  border: 2px solid #fef9f2;
}
.todo {
  background: #fff9f2;
  border-radius: 28px 28px 28px 28px;
  border: 2px solid #ffb7b2;
  box-shadow: 0 5px 0 0 #f3bfb8;
  transition: 0.1s;
}
.todo:hover {
  transform: scale(1.01);
  background: #ffffff;
}
.view {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1rem 0.7rem 1.2rem;
  flex-wrap: wrap;
}
.index {
  color: #ffb7b2;
  font-weight: 600;
  font-size: 1.2rem;
  min-width: 2rem;
  text-shadow: 0 2px 0 #fadcd6;
}
.todo-label {
  flex: 1 1 200px;
  font-size: 1.2rem;
  color: #5e4b3c;
  font-weight: 480;
  word-break: break-word;
  padding: 0.1rem 0;
}
.del {
  background: #fef9f2;
  border: 2.5px solid #ffb7b2;
  color: #5e4b3c;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 3px 0 0 #efb2ab;
  transition: 0.05s linear;
}
.del:hover {
  background: #ffb7b2;
  color: #3f332b;
  border-color: #f7948d;
}
.del:active {
  transform: translateY(4px);
  box-shadow: none;
}
</style>