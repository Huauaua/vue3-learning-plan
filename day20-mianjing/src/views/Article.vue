<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Article",
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Vue 3 响应式原理',
          description: '请详细解释 Vue 3 的响应式系统是如何工作的，包括 Proxy 的使用...',
          author: '张三',
          date: '2024-01-15',
          likes: 128,
          views: 1024
        },
        {
          id: 2,
          title: 'React 与 Vue 的区别',
          description: '对比 React 和 Vue 框架的设计理念和实际应用场景...',
          author: '李四',
          date: '2024-01-20',
          likes: 256,
          views: 2048
        },
        {
          id: 3,
          title: 'JavaScript 闭包详解',
          description: '什么是闭包？闭包的应用场景有哪些？如何避免内存泄漏？...',
          author: '王五',
          date: '2024-02-01',
          likes: 89,
          views: 756
        },
        {
          id: 4,
          title: '前端性能优化方案',
          description: '列举常见的前端性能优化手段，并说明其原理和效果...',
          author: '赵六',
          date: '2024-02-10',
          likes: 342,
          views: 3200
        },
        {
          id: 5,
          title: 'Webpack 打包优化',
          description: '如何优化 Webpack 的打包速度和打包体积？有哪些配置技巧？...',
          author: '钱七',
          date: '2024-02-15',
          likes: 167,
          views: 1500
        }
      ]
    }
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