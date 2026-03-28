<script>
export default {
  name: 'App',
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

<template>
  <h2>自定义指令</h2>
  <input v-focus/>
<!--  <input ref="inp"/>-->
</template>
