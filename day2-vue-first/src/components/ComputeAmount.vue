<script setup lang="ts">

</script>
<template>
  <div class="greetings" style="border: 1px solid #42b983; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center;min-height: 200px;width: 300px">
    <h1 >数据绑定示例</h1>
    <div>
      <p>原始金额：{{ amount }}</p>
      <p>税后金额：{{ computedAmount }}</p>
    </div>
    <input type="number" v-model="amount" placeholder="请输入金额" style="width: 160px;margin-top: 10px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0
    };
  },
  computed: {
    computedAmount() {
      return this.amount * 1.1; // 假设税率为10%
    }
  }
};
</script>

<style scoped>

</style>