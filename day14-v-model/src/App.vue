
<template>
  <div id="app">
    <Form
      :cityId="cityId"
      @change="handleChange"
    ></Form>
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
    handleChange(e) {
      this.cityId = e.target.value
    }
  }
}

</script>