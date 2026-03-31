<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyDialog from "./components/MyDialog.vue";
</script>

<template>
  <div>
    <MyDialog>
      <template #header>
        关闭
      </template>
      <template #content>
        你确定要吗？
      </template>
    </MyDialog>
    <MyDialog>
      <template #header>
        删除
      </template>
      <template #content>
        你确定要保存吗？
      </template>
    </MyDialog>
    <MyDialog>
      <template #header>
        删除
      </template>
      <template #content>
        你确定要保存吗？
      </template>
    </MyDialog>
  </div>
</template>
