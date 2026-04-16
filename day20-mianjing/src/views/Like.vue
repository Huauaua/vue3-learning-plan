<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Like"
})
</script>

<template>
  <div class="like-page">
    <h1 class="page-title">我喜欢的</h1>
    <div class="like-list">
      <div class="like-item" v-for="i in 4" :key="i">
        <h3>喜欢的内容 {{ i }}</h3>
        <p>点赞时间：2024-02-{{ i }}</p>
        <router-link :to="`/article/${i}`" class="detail-link">查看原文</router-link>
      </div>
    </div>
    <div v-if="false" class="empty-state">
      <p>暂无喜欢的内容</p>
    </div>
  </div>
</template>

<style scoped>
.like-page {
  padding: 20px 0;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000000;
}

.like-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.like-item {
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #ffffff;
}

.like-item h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.like-item p {
  margin: 0 0 10px 0;
  color: #333333;
  font-size: 14px;
}

.detail-link {
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
}

.detail-link:hover {
  color: #666666;
}

.empty-state {
  text-align: center;
  padding: 50px 0;
  color: #666666;
}
</style>