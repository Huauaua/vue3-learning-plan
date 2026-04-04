<script>
import MyTable from "./components/MyTable.vue";
import MyTag from "./components/MyTag.vue";
import bannerImage from './assets/header.png'

const defaultArr = [
  {
    id: 1,
    name: '火龙果',
    icon: './assets/cole.jpg',
    ischecked: false,
    num: 1,
    price: 13,
    tag: '水果'  // ✅ 改成 tag
  },
  {
    id: 2,
    name: 'luguanluguanlulushijiandaole',
    icon: './assets/luguanluguanlulushijiandaole.png',
    ischecked: false,
    num: 1,
    price: 299,
    tag: '水果'
  },
  {
    id: 3,
    name: '苹果猫',
    icon: './assets/苹果猫.jpg',
    ischecked: false,
    num: 1,
    price: 100,
    tag: '水果'
  },
  {
    id: 4,
    name: '西瓜猫',
    icon: './assets/西瓜猫.jpg',
    ischecked: false,
    num: 1,
    price: 119,
    tag: '水果'
  },
  {
    id: 5,
    name: '桔子',
    icon: './assets/桔子.png',
    ischecked: false,
    num: 1,
    price: 88,
    tag: '水果'
  }
]

export default {
  components: {
    MyTag,
    MyTable
  },
  data() {
    return {
      fruitList: JSON.parse(localStorage.getItem('fruitList')) || defaultArr,
    }
  },
  methods: {
    delItem(id) {
      this.fruitList = this.fruitList.filter(item => item.id !== id)
    },
    increaseNum(item) {  // ✅ 加上
      item.num++
    },
    decreaseNum(item) {  // ✅ 加上
      if (item.num > 1) {
        item.num--
      }
    }
  },
  watch: {
    fruitList: {
      handler(val) {
        localStorage.setItem('fruitList', JSON.stringify(val))
      },
      deep: true
    }
  }
}
</script>

<template>
  <div class="app-container">
    <!-- 图片横幅 -->
    <div class="banner">
<!--      <img :src='bannerImage' alt="水果主题横幅" class="banner-img">-->
      <img src="./assets/header.png" alt="水果主题横幅" class="banner-img">
    </div>
    <!-- 购物车表格 -->
    <div class="cart-container">
      <div class="cart-header">
        <h2 class="cart-title">🛍️ 我的购物车</h2>
        <span class="cart-count">{{ fruitList.length }}件商品</span>
      </div>

      <MyTable :data="fruitList" :column-count="8" @delete-item="delItem">
        <template #head>
          <th style="width: 60px">选中</th>
          <th style="width: 80px">图片</th>
          <th>商品名称</th>
          <th style="width: 100px">单价</th>
          <th style="width: 140px">数量</th>
          <th style="width: 100px">小计</th>
          <th style="width: 100px">操作</th>
          <th style="width: 120px">标签</th>
          <th style="width: 100px">星级</th>
        </template>

        <template #body="{ item }">
          <td class="checkbox-cell">
            <label class="custom-checkbox">
              <input type="checkbox" v-model="item.ischecked">
              <span class="checkmark"></span>
            </label>
          </td>
          <td>
            <div class="product-image">
              <img :src="item.icon" :alt="item.name">
            </div>
          </td>
          <td class="product-name">{{ item.name }}</td>
          <td class="product-price">¥{{ item.price }}</td>
          <td>
            <div class="quantity-control">
              <button class="quantity-btn" @click="decreaseNum(item)" :disabled="item.num <= 1">−</button>
              <span class="quantity-num">{{ item.num }}</span>
              <button class="quantity-btn" @click="increaseNum(item)">+</button>
            </div>
          </td>
          <td class="product-subtotal">¥{{ (item.price * item.num).toFixed(2) }}</td>
          <td>
            <button class="delete-btn" @click="delItem(item.id)">
              <span class="delete-icon">🗑️</span>
            </button>
          </td>
          <td><MyTag v-model="item.tag"></MyTag></td>
          <td class="rating">⭐️⭐️⭐️⭐️⭐️</td>
        </template>
      </MyTable>
    </div>
  </div>
</template>

<style scoped>
body {
  background: linear-gradient(135deg, var(--color-bg) 0%, #fff5eb 100%);
  font-family: var(--font-family),serif;
}

.app-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: var(--spacing-2xl) var(--spacing-lg);
}

/* ========== 图片横幅 ========== */
.banner {
  margin-bottom: var(--spacing-xl);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* ========== 购物车容器 ========== */
.cart-container {
  background: var(--color-bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.cart-header {
  padding: var(--spacing-lg) var(--spacing-2xl);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background: var(--color-bg-card);
}

.cart-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text);
}

.cart-count {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  background: #f0f2f5;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
}

/* ========== 表格内样式 ========== */
.checkbox-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: var(--color-bg-card);
  border: 2px solid #cbd5e1;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.custom-checkbox input:checked + .checkmark {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.custom-checkbox input:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  left: 2px;
  top: -2px;
  color: white;
  font-size: var(--font-size-xs);
}

.product-image {
  width: var(--product-image-size);
  height: var(--product-image-size);
  background: #f8f9fc;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  width: calc(var(--product-image-size) - 8px);
  height: calc(var(--product-image-size) - 8px);
  object-fit: cover;
  border-radius: var(--radius-sm);
}

.product-name {
  font-weight: 500;
  color: var(--color-text);
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price,
.product-subtotal {
  font-weight: 500;
  color: #3a4a6e;
}

.product-subtotal {
  color: var(--color-primary);
  font-weight: 600;
}

/* 数量控制器 */
.quantity-control {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: #f8f9fc;
  border-radius: var(--radius-full);
  padding: var(--spacing-xs);
}

.quantity-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: var(--color-bg-card);
  border-radius: 50%;
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
  color: var(--color-text-light);
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.quantity-btn:hover:not(:disabled) {
  background: var(--color-primary);
  color: white;
}

.quantity-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity-num {
  min-width: 36px;
  text-align: center;
  font-weight: 500;
  color: var(--color-text);
}

/* 删除按钮 */
.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.delete-icon {
  font-size: var(--font-size-lg);
  opacity: 0.6;
}

.delete-btn:hover .delete-icon {
  opacity: 1;
}

.delete-btn:hover {
  background: var(--color-danger-light);
}

.rating {
  font-size: var(--font-size-xs);
  letter-spacing: 2px;
}

/* ========== 响应式 ========== */
@media (max-width: 1000px) {
  .app-container {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  .cart-header {
    padding: var(--spacing-md) var(--spacing-lg);
  }

  .cart-title {
    font-size: var(--font-size-lg);
  }
}
</style>