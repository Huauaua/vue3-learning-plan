<script setup>

</script>

<template>
  <Form
    :cityId="cityId"
    @change="handleChange"
  ></Form>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  components: {
    Form
  },
  data() {
    return {
      cityId: 1
    }
  },
  methods: {
    handleChange(e) {
      this.cityId = Number(e.target.value)
    }
  }
}

</script>