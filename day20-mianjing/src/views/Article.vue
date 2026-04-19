<script lang="ts">
import {defineComponent} from 'vue'
import { articles } from '@/data/articles'

export default defineComponent({
  name: "Article",
  data() {
    return {
      articles: articles
    }
  },
  activated() {
    console.log('✅ Article 页面被激活（从缓存恢复）')
  },
  deactivated() {
    console.log('💾 Article 页面被停用（进入缓存）')
  },
  created() {
    console.log('🆕 Article 页面被创建（首次加载）')
  }
})

</script>

<template>
  <div class="article-page">
    <h1 class="page-title">面经列表</h1>
    <div class="article-list">
      <div class="article-item" v-for="article in articles" :key="article.id">
        <div class="article-header">
          <h3 class="article-title">{{ article.title }}</h3>
          <div class="article-meta">
            <span class="meta-item">{{ article.author }}</span>
            <span class="meta-item">{{ article.date }}</span>
            <span class="meta-item">❤ {{ article.likes }}</span>
            <span class="meta-item">👁 {{ article.views }}</span>
          </div>
        </div>
        <p class="article-desc">{{ article.description }}</p>
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

.article-header {
  margin-bottom: 10px;
}

.article-title {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: bold;
}

.article-meta {
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #666666;
}

.meta-item {
  display: inline-block;
}

.article-desc {
  margin: 0 0 10px 0;
  color: #333333;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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