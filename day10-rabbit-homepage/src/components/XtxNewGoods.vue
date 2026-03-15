<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "XtxNewGoods"
})
</script>

<template>
  <!-- 新鲜好物 XtxNewGoods -->
  <div class="module newgoods-module">
    <div class="section-header">
      <div class="title">
        <h2>新鲜好物</h2>
        <p>每日上新 · 口碑甄选</p>
      </div>
      <div class="more">查看全部 →</div>
    </div>
    <div class="card-grid">
      <div class="card-item">
        <div class="card-img"><span>🍃 空气炸锅</span></div>
        <div class="card-info">
          <h4>可视空气炸锅</h4>
          <div class="desc">5L 智能触控</div>
          <div class="price-tag">¥ 329</div>
        </div>
      </div>
      <div class="card-item">
        <div class="card-img"><span>🧴 香氛礼盒</span></div>
        <div class="card-info">
          <h4>雨后森林香薰</h4>
          <div class="desc">礼盒装 送扩香石</div>
          <div class="price-tag">¥ 189</div>
        </div>
      </div>
      <div class="card-item">
        <div class="card-img"><span>📚 阅读架</span></div>
        <div class="card-info">
          <h4>实木阅读支架</h4>
          <div class="desc">多角度调节</div>
          <div class="price-tag">¥ 159</div>
        </div>
      </div>
      <div class="card-item">
        <div class="card-img"><span>☕ 手冲套装</span></div>
        <div class="card-info">
          <h4>温控手冲壶</h4>
          <div class="desc">600ml 专业版</div>
          <div class="price-tag">¥ 449</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- 新鲜好物 (XtxNewGoods) --- */
.newgoods-module {
  background: #ffffff;
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