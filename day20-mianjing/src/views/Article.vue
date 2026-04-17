<script lang="ts">
import axios from 'axios'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Article",
  data() {
    return {
      articles: []
    }
  },
  async created() {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.articles
    console.log(res.data.articles)
  }
})
</script>

<template>
  <div class="article-page">
    <h1 class="page-title">面经列表</h1>
    <div class="article-list">
      <div class="article-item" v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <router-link :to="`/article/${article.id}`" class="detail-link">查看详情</router-link>
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