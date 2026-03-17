<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "son",
  props: {
    msg: String
  },
  methods: {
    CMsg(msg: string) {
      this.$emit('CMsg', msg);
    }
  }
})
</script>

<template>
  <div>
    <h1>
      son
      {{msg}}
      <button @click="CMsg('Hello, Father!')">Click Me</button>
    </h1>
  </div>
</template>

<style scoped>
  h1{
    color: black;
    border: black solid 2px;

    width: 500px;
    height: 200px;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>