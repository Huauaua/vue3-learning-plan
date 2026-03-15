<script>
import HelloWorld from './components/HelloWorld.vue'
import HmHeader from './components/HmHeader.vue'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'
import {defineComponent} from "vue";
export default defineComponent({
  components: {
    HmHeader,
    HmMain,
    HmFooter
  }
})

</script>

<template>
  <div class="App">
    <HmHeader />
    <HmMain />
    <HmFooter />
  </div>
<!--  <HelloWorld />-->
</template>

<style>
  .App {
    width: 600px;
    height: 770px;
    background-color: lightblue;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }

</style>

