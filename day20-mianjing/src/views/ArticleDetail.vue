<script lang="ts">
import {defineComponent} from 'vue'
import { getArticleById } from '@/data/articles'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: "ArticleDetail",
  setup() {
    const route = useRoute()
    const router = useRouter()
    return { route, router }
  },
  data() {
    return {
      article: {
        id: 0,
        title: '',
        content: '',
        description: '',
        author: '',
        date: '',
        likes: 0,
        views: 0
      }
    }
  },
  computed: {
    articleId(): string {
      return this.route.params.id as string
    }
  },
  created() {
    this.fetchArticle()
    console.log(this.articleId)
  },
  methods: {
    fetchArticle() {
      const article = getArticleById(this.articleId)
      if (article) {
        this.article = article
      } else {
        console.error('Article not found')
      }
    },
    formatContent(content: string) {
      // Simple markdown-like formatting
      if (!content) return ''
      
      return content
        // Code blocks
        .replace(/```\w*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Headers
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Line breaks
        .replace(/\n/g, '<br>')
    },
    goBack() {
      this.router.back()
    }
  }
})
</script>

<template>
  <div class="article-detail-page">
    <span @click="goBack()" class="back-link">返回面经列表</span>
    <div class="article-header">
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">
        <span class="meta-item">{{ article.author }}</span>
        <span class="meta-item">{{ article.date }}</span>
        <span class="meta-item">❤ {{ article.likes }}</span>
        <span class="meta-item">👁 {{ article.views }}</span>
      </div>
    </div>
    <div class="article-content">
      <div v-html="formatContent(article.content)"></div>
    </div>
    <div class="article-actions">
      <button class="action-btn">❤ 点赞</button>
      <button class="action-btn">⭐ 收藏</button>
    </div>
  </div>
</template>

<style scoped>
.article-detail-page {
  padding: 20px 0;
}

.article-header {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #000000;
}

.article-title {
  font-size: 24px;
  margin: 0 0 10px 0;
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

.article-content {
  line-height: 1.8;
  margin-bottom: 30px;
}

.article-content :deep(h2) {
  font-size: 20px;
  margin: 25px 0 15px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
}

.article-content :deep(p) {
  margin: 12px 0;
}

.article-content :deep(code) {
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.article-content :deep(pre) {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.article-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.article-content :deep(ul), .article-content :deep(ol) {
  padding-left: 25px;
}

.article-content :deep(li) {
  margin: 8px 0;
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
