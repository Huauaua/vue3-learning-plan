<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ArticleDetail"
})
</script>

<template>
  <div class="article-detail-page">
    <h1 class="article-title">面试题目详情</h1>
    <div class="article-content">
      <p>这里是面试题目的详细内容...</p>
      <p>问题描述：请解释Vue 3的响应式原理。</p>
      <p>参考答案：Vue 3使用了Proxy来实现响应式系统...</p>
    </div>
    <div class="article-actions">
      <button class="action-btn">收藏</button>
      <button class="action-btn">点赞</button>
    </div>
    <router-link to="/article" class="back-link">返回面经列表</router-link>
  </div>
</template>

<style scoped>
.article-detail-page {
  padding: 20px 0;
}

.article-title {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000000;
}

.article-content {
  line-height: 1.6;
  margin-bottom: 30px;
}

.article-content p {
  margin: 10px 0;
}

.article-actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.action-btn {
  padding: 10px 20px;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.action-btn:hover {
  background-color: #ffffff;
  color: #000000;
}

.back-link {
  display: inline-block;
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}

.back-link:hover {
  color: #666666;
}
</style>