<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheTitle",
  methods: {
    edit() {
      console.log('edit')
    },
    handleClick() {
      this.isShowEdit = true;
      this.$nextTick(() => { this.$refs.inp.focus()})
    },

  },
  data() {
    return {
      isShowEdit: false,
      editValue: 'Day 15 - Sync'
    }
  }
})
</script>

<template>
  <div v-if="isShowEdit" class="title">
    <input ref="inp" v-model="editValue" type="text">
    <button @click="isShowEdit = false">确认</button>
  </div>

  <div v-else class="title">
    <h1>{{ editValue }}</h1>
    <button @click="handleClick">编辑</button>
  </div>
</template>

<style scoped>
  .title {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
    align-items: baseline;
  }
</style>