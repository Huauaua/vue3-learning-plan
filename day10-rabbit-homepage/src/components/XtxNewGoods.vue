<script lang="ts">
import {defineComponent} from 'vue'
import BaseGoodsItem from './BaseGoodsItem.vue'
export default defineComponent({
  name: "XtxNewGoods",
  components: {BaseGoodsItem},
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
      <BaseGoodsItem/>
      <BaseGoodsItem/>
      <BaseGoodsItem/>
      <BaseGoodsItem/>
<!--      <div class="card-item">-->
<!--        <div class="card-img"><span>🧴 香氛礼盒</span></div>-->
<!--        <div class="card-info">-->
<!--          <h4>雨后森林香薰</h4>-->
<!--          <div class="desc">礼盒装 送扩香石</div>-->
<!--          <div class="price-tag">¥ 189</div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card-item">-->
<!--        <div class="card-img"><span>📚 阅读架</span></div>-->
<!--        <div class="card-info">-->
<!--          <h4>实木阅读支架</h4>-->
<!--          <div class="desc">多角度调节</div>-->
<!--          <div class="price-tag">¥ 159</div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card-item">-->
<!--        <div class="card-img"><span>☕ 手冲套装</span></div>-->
<!--        <div class="card-info">-->
<!--          <h4>温控手冲壶</h4>-->
<!--          <div class="desc">600ml 专业版</div>-->
<!--          <div class="price-tag">¥ 449</div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
/* --- 新鲜好物 (XtxNewGoods) --- */
.newgoods-module {
  background: #ffffff;
}
</style>