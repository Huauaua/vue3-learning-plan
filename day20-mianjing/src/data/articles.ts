export interface Article {
  id: number
  title: string
  description: string
  content: string
  author: string
  date: string
  likes: number
  views: number
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Vue 3 响应式原理',
    description: '请详细解释 Vue 3 的响应式系统是如何工作的，包括 Proxy 的使用...',
    content: `Vue 3 的响应式系统是其核心特性之一，主要基于 JavaScript 的 Proxy 对象实现。

## 1. Proxy 的优势

相比于 Vue 2 使用的 Object.defineProperty，Proxy 有以下优势：
- 可以监听对象的属性添加和删除
- 可以监听数组的变化
- 性能更好

## 2. 响应式原理

Vue 3 使用 reactive() 函数将普通对象转换为响应式对象：

\`\`\`javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0
})
\`\`\`

## 3. 依赖收集

当访问响应式对象的属性时，Vue 会进行依赖收集，将当前的副作用函数（effect）收集起来。

## 4. 触发更新

当修改响应式对象的属性时，会触发之前收集的依赖，执行相应的更新操作。

## 5. ref 和 reactive

- ref: 用于创建基本类型的响应式数据
- reactive: 用于创建对象类型的响应式数据

这就是 Vue 3 响应式系统的基本原理。`,
    author: '张三',
    date: '2024-01-15',
    likes: 128,
    views: 1024
  },
  {
    id: 2,
    title: 'React 与 Vue 的区别',
    description: '对比 React 和 Vue 框架的设计理念和实际应用场景...',
    content: `React 和 Vue 都是流行的前端框架，但它们在设计理念和使用方式上有很大区别。

## 1. 设计理念

- React: 一切皆 JavaScript，强调函数式编程
- Vue: 渐进式框架，更容易上手

## 2. 数据绑定

- React: 单向数据流
- Vue: 双向数据绑定（v-model）

## 3. 模板语法

- React: JSX
- Vue: 模板语法

## 4. 状态管理

- React: Redux, Context API
- Vue: Vuex, Pinia

## 5. 学习曲线

- React: 较陡峭，需要理解较多概念
- Vue: 平缓，文档友好

## 6. 性能

两者性能差异不大，都使用了虚拟 DOM 技术。

选择哪个框架主要取决于项目需求和个人偏好。`,
    author: '李四',
    date: '2024-01-20',
    likes: 256,
    views: 2048
  },
  {
    id: 3,
    title: 'JavaScript 闭包详解',
    description: '什么是闭包？闭包的应用场景有哪些？如何避免内存泄漏？...',
    content: `闭包是 JavaScript 中的重要概念，理解闭包对于深入掌握 JavaScript 至关重要。

## 1. 什么是闭包？

闭包是指有权访问另一个函数作用域中变量的函数。

\`\`\`javascript
function outer() {
  let count = 0
  return function() {
    count++
    return count
  }
}
\`\`\`

## 2. 闭包的应用场景

- 数据私有化
- 函数工厂
- 防抖和节流
- 模块化

## 3. 闭包的原理

闭包的原理是作用域链。内部函数可以访问外部函数的变量，即使外部函数已经执行完毕。

## 4. 内存泄漏问题

闭包会持有对外部变量的引用，如果不及时释放，可能导致内存泄漏。

## 5. 如何避免内存泄漏

- 及时解除引用
- 避免不必要的闭包
- 使用弱引用（WeakMap）

理解闭包是掌握 JavaScript 的关键一步。`,
    author: '王五',
    date: '2024-02-01',
    likes: 89,
    views: 756
  },
  {
    id: 4,
    title: '前端性能优化方案',
    description: '列举常见的前端性能优化手段，并说明其原理和效果...',
    content: `前端性能优化是提升用户体验的重要手段。

## 1. 资源优化

- 压缩代码（CSS、JavaScript）
- 图片优化（WebP、懒加载）
- CDN 加速

## 2. 加载优化

- 异步加载脚本
- 代码分割
- 预加载和预取

## 3. 渲染优化

- 减少 DOM 操作
- 使用虚拟列表
- 避免重排和重绘

## 4. 缓存优化

- 浏览器缓存
- Service Worker
- 本地存储

## 5. 网络优化

- HTTP/2
- 减少请求数量
- Gzip 压缩

## 6. 性能监控

- Performance API
- 用户标记
- 错误追踪

性能优化是一个持续的过程，需要根据实际情况选择合适的方案。`,
    author: '赵六',
    date: '2024-02-10',
    likes: 342,
    views: 3200
  },
  {
    id: 5,
    title: 'Webpack 打包优化',
    description: '如何优化 Webpack 的打包速度和打包体积？有哪些配置技巧？...',
    content: `Webpack 是前端工程化的核心工具，优化 Webpack 可以显著提升开发体验。

## 1. 打包速度优化

- 使用 cache-loader
- 开启多线程打包（thread-loader）
- 合理使用 externals
- 减少 resolve.modules 搜索范围

## 2. 打包体积优化

- Tree Shaking
- Code Splitting
- 压缩代码（TerserPlugin）
- 图片压缩

## 3. 配置优化

\`\`\`javascript
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
\`\`\`

## 4. 插件优化

- 使用 DllPlugin 提取公共代码
- HappyPack 多线程打包
- CompressionPlugin 压缩资源

## 5. 开发体验优化

- Hot Module Replacement
- 进度条显示
- 错误友好提示

掌握 Webpack 优化技巧，可以大幅提升项目构建效率。`,
    author: '钱七',
    date: '2024-02-15',
    likes: 167,
    views: 1500
  }
]

export function getArticleById(id: string | number): Article | undefined {
  return articles.find(article => article.id === parseInt(String(id)))
}
