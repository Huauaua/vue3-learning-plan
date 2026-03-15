<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "XtxTopic"
})
</script>

<template>
  <!-- 最新专题 XtxTopic -->
  <div class="module topic-module">
    <div class="section-header">
      <div class="title">
        <h2>最新专题</h2>
        <p>每周精选 · 深度好读</p>
      </div>
      <div class="more">更多专题 →</div>
    </div>
    <div class="topic-grid">
      <div class="topic-card">
        <div class="topic-img">
          <span class="topic-tag">🍃 生活方式</span>
          <span>居家灵感</span>
        </div>
        <div class="topic-content">
          <h3>宅家治愈清单</h3>
          <div class="topic-desc">9件提升幸福感的小物，让日常发光。</div>
          <div class="topic-meta">
            <span>🔥 2.1k 阅读</span>
            <span>📌 15 好物</span>
          </div>
        </div>
      </div>
      <div class="topic-card">
        <div class="topic-img">
          <span class="topic-tag">🌿 户外</span>
          <span>春日出走</span>
        </div>
        <div class="topic-content">
          <h3>城市漫游指南</h3>
          <div class="topic-desc">骑行、野餐、咖啡馆… 轻户外装备推荐。</div>
          <div class="topic-meta">
            <span>🔥 1.8k 阅读</span>
            <span>📌 22 好物</span>
          </div>
        </div>
      </div>
      <div class="topic-card">
        <div class="topic-img">
          <span class="topic-tag">🎧 数码</span>
          <span>办公升级</span>
        </div>
        <div class="topic-content">
          <h3>桌面美学企划</h3>
          <div class="topic-desc">从键盘到音箱，打造高效愉悦的工作台。</div>
          <div class="topic-meta">
            <span>🔥 3.4k 阅读</span>
            <span>📌 31 好物</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- 最新专题 (XtxTopic) --- */
.topic-module {
  background: white;
}
.topic-grid {
  display: flex;
  gap: 24px;
}
.topic-card {
  flex: 1;
  background: #f5f3f0;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid #ececec;
}
.topic-img {
  height: 180px;
  background: linear-gradient(145deg, #a4b6c4, #b6c8d9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f4259;
  font-size: 18px;
  font-weight: 600;
  position: relative;
}
.topic-tag {
  position: absolute;
  top: 16px;
  left: 20px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(2px);
  padding: 6px 16px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.topic-content {
  padding: 24px 22px 30px;
}
.topic-content h3 {
  font-size: 22px;
  margin-bottom: 12px;
}
.topic-content .topic-desc {
  color: #6b6b6b;
  margin-bottom: 20px;
  line-height: 1.5;
}
.topic-meta {
  display: flex;
  gap: 18px;
  color: #b18f6a;
  font-weight: 500;
}
</style>