<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Collect"
})
</script>

<template>
  <div class="collect-page">
    <h1 class="page-title">我的收藏</h1>
    <div class="collect-list">
      <div class="collect-item" v-for="i in 3" :key="i">
        <h3>收藏的面经 {{ i }}</h3>
        <p>收藏时间：2024-01-{{ i }}</p>
        <router-link :to="`/article/${i}`" class="detail-link">查看原文</router-link>
      </div>
    </div>
    <div v-if="false" class="empty-state">
      <p>暂无收藏内容</p>
    </div>
  </div>
</template>

<style scoped>
.collect-page {
  padding: 20px 0;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #000000;
}

.collect-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.collect-item {
  padding: 15px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #ffffff;
}

.collect-item h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
}

.collect-item p {
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