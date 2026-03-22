
<template>
  <div id="app">
    <Form v-model="cityId"></Form>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  components: {
    Form
  },
  data() {
    return {
      cityId: '1'
    }
  },
  methods: {
  }
}

</script>