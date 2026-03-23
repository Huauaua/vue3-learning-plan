<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseDialog",
  props:{
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    },
    handleCancel() {
      this.$emit('update:visible', false)
    },
    handleConfirm() {
      this.$emit('update:visible', false)
    }
  }
})
</script>

<template>
  <div v-show="visible" class="base-dialog-mask">
    <div class="base-dialog">
      <div class="base-dialog-header">
        <h3>温馨提示：</h3>
        <button class="close" @click="handleClose">关闭</button>
      </div>
      <div class="base-dialog-content">
        <p>确定要退出本系统吗？</p>
      </div>
      <div class="base-dialog-footer">
        <button class="cancel" @click="handleCancel">取消</button>
        <button class="confirm" @click="handleConfirm">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .base-dialog-mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  .base-dialog {
    width: 500px;
    height: 300px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    text-align: center;
    position: relative;
  }
  .base-dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .base-dialog-content {
    margin-bottom: 20px;
  }
  .base-dialog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .base-dialog-footer button {
    width: 45%;
    height: 30px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    background: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #f0f0f0;
    }
    &:active {
      background-color: #d0d0d0;
    }
    &.cancel {
      margin-right: 10px;
    }
    &.confirm {
      margin-left: 10px;
    }
  }
</style>