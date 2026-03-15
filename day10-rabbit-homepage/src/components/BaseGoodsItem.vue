<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BaseGoodsItem"
})
</script>

<template>
  <div class="card-item">
    <div class="card-img"><span>🍃 空气炸锅</span></div>
    <div class="card-info">
      <h4>可视空气炸锅</h4>
      <div class="desc">5L 智能触控</div>
      <div class="price-tag">¥ 329</div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  flex: 1 1 calc(25% - 20px);
  background: #fafafc;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  border: 1px solid #f0f0f0;
  min-width: 200px;
}
/* 好物卡片微调 */
.newgoods-module .card-item .card-img {
  background: linear-gradient(145deg, #e8dfd3, #dacbbd);
}
.newgoods-module .card-item .card-img::after {
  content: "新品";
  background: #b18f6a;
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 20px;
  margin-left: 60px;
}
</style>