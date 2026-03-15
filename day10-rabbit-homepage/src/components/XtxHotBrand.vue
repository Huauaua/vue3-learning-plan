<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "XtxHotBrand"
})
</script>

<template>
  <!-- 热门品牌 XtxHotBrand -->
  <div class="module hotbrand-module">
    <div class="section-header">
      <div class="title">
        <h2>热门品牌</h2>
        <p>你关注的品牌 · 新鲜动态</p>
      </div>
      <div class="more">全部品牌 →</div>
    </div>
    <div class="brand-grid">
      <div class="brand-item">
        <div class="brand-logo">N</div>
        <h4>Nordic</h4>
        <p>北欧家居</p>
      </div>
      <div class="brand-item">
        <div class="brand-logo">M</div>
        <h4>Minimal</h4>
        <p>极简生活</p>
      </div>
      <div class="brand-item">
        <div class="brand-logo">C</div>
        <h4>Concept</h4>
        <p>设计集合</p>
      </div>
      <div class="brand-item">
        <div class="brand-logo">U</div>
        <h4>Urban</h4>
        <p>城市户外</p>
      </div>
      <div class="brand-item">
        <div class="brand-logo">Z</div>
        <h4>ZEN</h4>
        <p>治愈系</p>
      </div>
      <div class="brand-item">
        <div class="brand-logo">E</div>
        <h4>Edition</h4>
        <p>限量联名</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- 热门品牌 (XtxHotBrand) --- */
.hotbrand-module {
  background: #f9f9fc;
}
.brand-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.brand-item {
  flex: 1 1 calc(16.66% - 20px);
  background: white;
  border-radius: 60px 60px 30px 30px;
  text-align: center;
  padding: 24px 12px 18px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.02);
  border: 1px solid #ededed;
  min-width: 140px;
}
.brand-logo {
  width: 80px;
  height: 80px;
  background: #f0f0f0;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #cfdae5, #b7c4d2);
  color: #1e2b3a;
  font-weight: 600;
  font-size: 28px;
}
.brand-item h4 {
  font-size: 18px;
  margin-bottom: 6px;
}
.brand-item p {
  font-size: 13px;
  color: #999;
}
</style>