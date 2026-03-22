<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Form",
  props:{
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods:{
    handleChange(e: any){
      this.$emit('update:modelValue', e.target.value)
    }
  }
})
</script>

<template>
<div>
  <select :value="modelValue" @change="handleChange">
    <option value="1">北京</option>
    <option value="2">上海</option>
    <option value="3">天津</option>
    <option value="4">河北</option>
    <option value="5">山西</option>
    <option value="6">内蒙古</option>
  </select>
</div>
</template>

<style scoped>

</style>