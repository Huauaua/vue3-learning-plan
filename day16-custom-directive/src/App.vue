<script>
export default {
  name: 'App',
  mounted() {
    this.$refs.inp.focus()
  }
}
</script>

<template>
  <h2>自定义指令</h2>
  <input ref="inp"/>
</template>
