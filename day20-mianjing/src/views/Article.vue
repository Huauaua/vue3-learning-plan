<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Article"
})
</script>

<template>
  <div class="article-page">
    <h1 class="page-title">面经列表</h1>
    <div class="article-list">
      <div class="article-item" v-for="i in 5" :key="i">
        <h3>面试题目 {{ i }}</h3>
        <p>这是第 {{ i }} 个面试题目的简要描述...</p>
        <router-link :to="`/article/${i}`" class="detail-link">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-page {
  padding: 20px 0;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000000;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-item {
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #ffffff;
}

.article-item h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.article-item p {
  margin: 0 0 10px 0;
  color: #333333;
}

.detail-link {
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}

.detail-link:hover {
  color: #666666;
}
</style>