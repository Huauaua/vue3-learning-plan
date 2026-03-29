<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyDialog from "./components/MyDialog.vue";
</script>

<template>
  <div>
    <MyDialog>
      <p>你确定要关闭吗？</p>
    </MyDialog>
    <MyDialog>
      确定要删除吗？
    </MyDialog>
    <MyDialog>
      <p>你确定要保存吗？</p>
    </MyDialog>
  </div>
</template>
