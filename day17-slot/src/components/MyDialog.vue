<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MyDialog"
})
</script>

<template>
  <div class="dialog">
    <div class="dialog-header">
      <slot name="header"></slot>
      <span class="close"> X </span>
    </div>

    <div class="dialog-content">
      <slot name="content"></slot>
<!--      你确定要删除吗？-->
    </div>
    <div class="dialog-footer">
      <button class="cancel">取消</button>
      <button class="confirm">确定</button>
    </div>
  </div>
</template>

<style scoped>
  .dialog {
    width: 300px;
    height: 200px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
    margin-top: 100px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dialog-header {
    height: 50px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .dialog-content {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .dialog-footer {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
  }
  .dialog-footer button {
    margin-left: 10px;
  }
  .dialog-footer .cancel {
    background-color: #ccc;
    border: 1px solid #ccc;
  }
  .dialog-footer .confirm {
    background-color: #42b983;
    border: 1px solid #42b983;
  }
  .dialog-footer button:hover {
    opacity: 0.8;
  }
  .dialog-footer button:active {
    opacity: 1;
  }
</style>