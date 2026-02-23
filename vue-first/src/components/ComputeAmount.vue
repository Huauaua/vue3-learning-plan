<script setup lang="ts">

</script>
<template>
  <div>
    <p>原始金额：{{ amount }}</p>
    <p>税后金额：{{ computedAmount }}</p>
  </div>
  <input type="number" v-model="amount" placeholder="请输入金额">

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