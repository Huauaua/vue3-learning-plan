<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TodoFooter",
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    clear() {
      this.$emit('clear')
    }
  }
})
</script>
<template>
  <footer class="footer">
    <span class="todo-count">{{ list.length }}条任务</span>
    <button class="clear" @click="clear">清除所有任务</button>
  </footer>
</template>

<style scoped>
/* footer — 保持圆润三色 */
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.8rem;
  background: #ffeae5;
  border-radius: 30px;
  padding: 0.8rem 1.2rem 0.8rem 2rem;
  border: 2px solid #ffb7b2;
  box-shadow: 0 4px 0 0 #f3bfb8;
}
.todo-count {
  color: #5e4b3c;
  font-size: 1.2rem;
  font-weight: 600;
  background: #fef9f2;
  padding: 0.3rem 1.4rem;
  border-radius: 30px;
  border: 2px solid #ffb7b2;
  box-shadow: inset 0 -2px 0 #ffdad2;
}
.clear {
  background: #fef9f2;
  border: 3px solid #ffb7b2;
  color: #5e4b3c;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1.8rem;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 0 0 #efb2ab;
  transition: 0.05s linear;
}
.clear:hover {
  background: #ffb7b2;
  color: #2f2721;
}
.clear:active {
  transform: translateY(4px);
  box-shadow: none;
}
</style>