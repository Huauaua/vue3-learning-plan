<script lang="ts">
import { defineComponent } from 'vue'
import MyTag from "./MyTag.vue";

interface Product {
  id: number
  name: string
  icon: string
  ischecked: boolean
  num: number
  price: number
  tag: string
}

export default defineComponent({
  name: "MyTable",
  components: { MyTag },
  props: {
    data: {
      type: Array as () => Product[],
      required: true,
    },
    columnCount: {
      type: Number,
      default: 8
    }
  },
  computed: {
    selectedAll: {
      get() {
        return this.data.every(item => item.ischecked)
      },
      set(value) {
        this.data.forEach(item => item.ischecked = value)
      }
    },
    selectedCount() {
      return this.data.reduce((count, item) =>
          item.ischecked ? count + item.num : count, 0
      )
    },
    totalPrice() {
      return this.data.reduce((total, item) =>
          item.ischecked ? total + item.price * item.num : total, 0
      )
    }
  },
  methods: {
    increaseNum(item: Product) {
      item.num++
    },
    decreaseNum(item: Product) {
      if (item.num > 1) {
        item.num--
      }
    },
    delItem(id: number) {
      this.$emit('delete-item', id)
    },
    checkout() {
      alert('成功结算 ' + this.selectedCount + ' 件商品\n总价：¥' + this.totalPrice.toFixed(2))
    }
  },
  emits: ['delete-item']
})
</script>

<template>
  <div class="table-wrapper">
    <table class="shopping-table">
      <thead>
      <tr class="table-header">
        <slot name="head"></slot>
      </tr>
      </thead>
      <tbody>
      <template v-if="data.length > 0">
        <tr v-for="item in data" :key="item.id" class="table-row" :class="{'row-selected': item.ischecked}">
          <slot name="body" :item="item"></slot>
        </tr>
      </template>

      <tr v-else class="empty-row">
        <td :colspan="columnCount">
          <div class="empty-state">
            <span class="empty-icon">🛒</span>
            <p>购物车空空如也</p>
            <button class="empty-btn">去逛逛</button>
          </div>
        </td>
      </tr>

      <tr class="footer-row" v-if="data.length > 0">
        <td :colspan="columnCount">
          <div class="footer-bar">
            <div class="footer-left">
              <label class="select-all">
                <input type="checkbox" v-model="selectedAll">
                <span>全选</span>
              </label>
            </div>

            <div class="footer-right">
              <div class="total-info">
                <span class="total-label">合计：</span>
                <span class="total-price">¥{{ totalPrice.toFixed(2) }}</span>
                <span class="total-count">(已选{{ selectedCount }}件)</span>
              </div>
              <button class="checkout-btn" @click="checkout">
                去结算
              </button>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* 继承父组件的 CSS 变量 */
.table-wrapper {
  width: 100%;
  overflow-x: auto;
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
}

.shopping-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-base);
  min-width: var(--table-min-width);
}

/* 表头样式 */
.table-header {
  background: #f8f9fc;
  border-bottom: 1px solid var(--color-border);
}

.table-header th {
  padding: var(--spacing-md) var(--spacing-md);
  text-align: left;
  font-weight: 600;
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  letter-spacing: 0.3px;
}

/* 表格行样式 */
.table-row {
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.table-row:hover {
  background-color: var(--color-bg-hover);
}

.row-selected {
  background-color: var(--color-bg-selected);
}

.table-row td {
  padding: var(--spacing-md) var(--spacing-md);
  vertical-align: middle;
}

/* 空状态样式 */
.empty-row td {
  padding: 60px var(--spacing-lg);
}

.empty-state {
  text-align: center;
}

.empty-icon {
  font-size: 64px;
  display: block;
  margin-bottom: var(--spacing-md);
  opacity: 0.5;
}

.empty-state p {
  color: var(--color-text-muted);
  font-size: var(--font-size-base);
}

/* 底部栏样式 */
.footer-row td {
  padding: 0;
  background: var(--color-bg-card);
  border-top: 1px solid var(--color-border);
}

.footer-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: #fafbfc;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.select-all {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.select-all input {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--color-primary);
}

.footer-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.total-info {
  text-align: right;
}

.total-label {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}

.total-price {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-left: var(--spacing-sm);
}

.total-count {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-left: var(--spacing-sm);
}

.checkout-btn {
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border: none;
  border-radius: var(--radius-full);
  color: white;
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.3);
}

.checkout-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
}
</style>