<script lang="ts">
import {defineComponent} from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: "Profile",
  setup(){
    const route = useRoute()
    return {route}
  }
})
</script>

<template>
  <h1>
    Profile
  </h1>
<!--  <div>{{ route.query.name}}</div>-->
  <div>{{ route.params.name}}</div>
</template>

<style scoped>

</style>