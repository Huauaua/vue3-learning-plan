<script lang="ts">

export default {
  name: "MyTag",
  emits: ['update:modelValue'],
  methods: {
    handleClick(){
      this.isEdit = true
    },
    handleUpdate(e){
      // 把输入的值通过事件传给父组件
      this.$emit('update:modelValue', e.target.value)
      this.isEdit = false
    }
  },
  mounted() {
    console.log('Component mounted.' + this.value)
  },
  props: {
    modelValue:String,
  },
  directives: {
    focus:{
      mounted(el){
        el.focus()
      }
    }
  },
  data(){
    return {
      isEdit:false,
    }
  },
}
</script>

<template>
  <div class="my-tag">
    <input class="input" :value="modelValue" @keydown.enter="handleUpdate" @blur="isEdit=false" type="text" placeholder="输入标签" v-if="isEdit" v-focus/>
    <div class="tag" @dblclick="handleClick" v-else>
      {{modelValue}}
    </div>
  </div>
</template>

<style scoped>
.my-tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;  /* 固定整个单元格宽度 */
}

.input {
  width: 100%;  /* 占满父容器 */
  box-sizing: border-box;
}

.tag {
  width: 100%;  /* 占满父容器 */
  text-align: center;
  cursor: pointer;
  padding: 4px 8px;
  box-sizing: border-box;
}
</style>