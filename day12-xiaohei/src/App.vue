<script>
import {createApp, defineComponent} from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default defineComponent({
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      todos: [
        {id: 1, title: 'todo1', completed: true},
        {id: 2, title: 'todo2', completed: false},
        {id: 3, title: 'todo3', completed: true},
      ]
    }
  },
  methods: {

  }
})

</script>

<template>
  <section style="border: 2px solid #aaa; border-radius: 5px; width: 500px; margin: 10px auto 0;box-shadow: 0 0 10px #aaa;">
    <todo-header></todo-header>
    <todo-main></todo-main>
    <todo-footer></todo-footer>
  </section>
</template>
