<script setup>
</script>

<template>
  <div style="border: 3px solid black; width: 800px; height: 500px; display: flex; justify-content: center; align-items: center;">
    <p>father</p>
    <son :msg="mmsg" @CMsg="cmsg"></son>
  </div>
</template>

<script>
import Father from "./components/father.vue";
import Son from "./components/son.vue";
export default {
  data() {
    return {
      mmsg: "Hello, Vue!"
    }
  },
  methods: {
    cmsg(msg) {
      console.log(msg);
      this.mmsg = msg;
    }
  },
  components: {
    Father,
    Son
  }
}
</script>

<style scoped>
</style>