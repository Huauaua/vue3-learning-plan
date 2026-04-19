import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Article from '@/views/Article.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/article',
    children: [
      {
        path: 'article',
        component: Article
      },
      {
        path: 'collect',
        component: Collect
      },
      {
        path: 'like',
        component: Like
      },
      {
        path: 'user',
        component: User
      }
    ]
  },
  {
    path: '/article/:id',
    component: ArticleDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router