<template>
  <section>
    <todo-header
        @add="handleAdd"
    ></todo-header>
    <todo-main
        :list="list"
        @del="handleRemove"
    ></todo-main>
    <todo-footer
        :list="list"
        @clear="handleClear"
    ></todo-footer>
  </section>
</template>

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
    const storedList = JSON.parse(localStorage.getItem("list"));
    return {
      list: storedList && storedList.length ? storedList : [
        {id: 1, name: '打篮球', completed: true},
        {id: 2, name: '打羽毛球', completed: false},
        {id: 3, name: '逛街', completed: true},
      ]
    }
  },
  methods: {
    handleAdd(name) {
      this.list.unshift({id: Math.random(), name, completed: false})
    },
    handleRemove(index) {
      this.list = this.list.filter(item => item.id !== index)
      console.log('dad get it ',index)
    },
    handleClear() {
      this.list = []
    }
  },
  watch: {
    list: {
      deep: true,
      handler (newValue){
        localStorage.setItem('list', JSON.stringify(newValue))
      },
    }
  },
})

</script>