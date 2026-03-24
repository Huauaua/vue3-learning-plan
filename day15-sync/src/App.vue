<script setup>
import HelloWorld from './components/HelloWorld.vue'
import EchartOne from "./components/EchartOne.vue";
</script>

<template>
  <div id="app">
    <button class="logout" @click="dialogVisible = true">退出按钮</button>
    <BaseDialog v-model:visible="dialogVisible"></BaseDialog>
    <EchartOne></EchartOne>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue";

export default {
  name: 'App',
  data() {
    return {
      dialogVisible: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    greet() {
      alert('Hello, ' + this.msg)
    }
  },
  components: {
    BaseDialog
  }
}

</script>