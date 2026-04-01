<script>
const defaultArr = [
  {
    id: 1,
    name: '火龙果',
    icon: './assets/cole.jpg',
    ischecked: false,
    num: 1,
    price: 13
  },
  {
    id: 2,
    name: 'luguanluguanlulushijiandaole',
    icon: './assets/luguanluguanlulushijiandaole.png',
    ischecked: false,
    num: 1,
    price: 299
  },
  {
    id: 3,
    name: '苹果猫',
    icon: './assets/苹果猫.jpg',
    ischecked: false,
    num: 1,
    price: 100
  },
  {
    id: 4,
    name: '西瓜猫',
    icon: './assets/西瓜猫.jpg',
    ischecked: false,
    num: 1,
    price: 119
  },
  {
    id: 5,
    name: '桔子',
    icon: './assets/桔子.png',
    ischecked: false,
    num: 1,
    price: 88
  }
]
export default {
  data() {
    return {
      fruitList: JSON.parse(localStorage.getItem('fruitList')) || defaultArr
    }
  },
  computed: {
    selectedAll: {
      get() {
        return this.fruitList.every(item => item.ischecked)
      },
      set(value) {
        this.fruitList.forEach(item => item.ischecked = value)
      }
    },
    selectedCount() {
      return this.fruitList.reduce((count, item) => item.ischecked === true ? count + item.num : count, 0)
    },
    totalPrice() {
      return this.fruitList.reduce((total, item) => {
        return item.ischecked ? total + item.price * item.num : total
      }, 0)
    }
  }
  ,
  methods: {
    increaseNum(item) {
      item.num++
    },
    decreaseNum(item) {
      if (item.num > 1) {
        item.num--
      }
    },
    delItem(id) {
      this.fruitList = this.fruitList.filter(item => item.id !== id)
    },
    checkout() {
      alert('成功结算 ' + this.selectedCount + ' 件商品' + ' \n总价：' + this.totalPrice.toFixed(2) + ' 元')
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
  <!-- 独立横幅，优雅置顶，与下方卡片同宽 -->
  <div class="banner-container">
    <div class="banner-box">
      <!-- 请确保asset/header.png存在；若不存在可替换为占位色块，此处保留img引用，亦可作为纯样式展示 -->
      <img src="./assets/header.png" alt="水果主题横幅" onerror="this.style.backgroundColor='#eab676'; this.src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22400%22%20viewBox%3D%220%200%20800%20400%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23f8b88b%22%2F%3E%3Ctext%20x%3D%22250%22%20y%3D%22220%22%20font-family%3D%22system-ui%22%20font-size%3D%2232%22%20fill%3D%22%235c4b3a%22%20font-weight%3D%22bold%22%3E%F0%9F%8D%8D%20Fresh%20Fruit%20%F0%9F%8D%8C%3C%2Ftext%3E%3C%2Fsvg%3E';">
    </div>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>选中</th>
        <th>图片</th>
        <th>单价</th>
        <th>个数</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <!-- 商品6 -->
      <tr v-for="item in fruitList" :key="item.id" v-if="fruitList.length > 0" :class="{'active':item.ischecked}">
        <td>
          <div class="checkbox-cell">
            <label>
              <input type="checkbox" v-model="item.ischecked">
            </label>
            <span class="item-id">{{ item.id }}</span>
          </div>
        </td>
        <td><img class="image-placeholder" :src="item.icon" alt="商品图片" style="scale: 1.5;"></td>
        <td class="price">{{ item.price }}</td>
        <td>
          <div class="quantity-control">
            <button class="quantity-btn" aria-label="减少" @click="decreaseNum(item)" :disabled="item.num <= 1">−</button>
            <span class="quantity-number">{{ item.num }}</span>
            <button class="quantity-btn" aria-label="增加" @click="increaseNum(item)">+</button>
          </div>
        </td>
        <td class="subtotal">{{ item.price * item.num }}</td>
        <td><button class="delete-btn" @click="delItem(item.id)">删除</button></td>
      </tr>

      <tr v-if="fruitList.length === 0" style="text-align: center;">
        <td >
          💧空空如也
        </td>
      </tr>
      <!-- 底部全选+结算行 -->
      <tr class="footer-row">
        <td colspan="6" style="padding: 22px 8px 10px 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 18px;">
            <!-- 左侧全选 -->
            <div class="footer-checkbox">
              <input type="checkbox" v-model="selectedAll" id="selectAllCheckbox">
              <label for="selectAllCheckbox" style="font-weight: 500; color: #334155; cursor: pointer; font-size: 1rem;">全选</label>
            </div>

            <!-- 右侧总价 + 结算 -->
            <div style="display: flex; align-items: center; gap: 28px; flex-wrap: wrap;">
              <div style="display: flex; align-items: baseline; gap: 8px;">
                <span style="color: #475569; font-weight: 500;">总价：</span>
                <span class="total-price" v-text="totalPrice.toFixed(2)"></span>
              </div>
              <button class="checkout-btn" @click="checkout()">
                结算 <span class="checkout-note">({{ selectedCount }})</span>
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}
body {
  background: #f2f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 30px 20px;
}

/* 横幅图片区 - 放在最上面，居中，与卡片同宽 */
.banner-container {
  width: 1000px;
  max-width: 100%;
  margin-bottom: 28px;
  border-radius: 28px;
  background: #5c4b3a;
  box-shadow: 0 15px 0 0 #f8b88b, 0 10px 25px rgba(0,0,0,0.1);
}
.banner-box {
  width: 100%;
  height: auto;
  aspect-ratio: 800/400;  /* 保持2:1比例，适应宽度变化 */
  border-radius: 24px;
  overflow: hidden;
  border: 4px solid #f8b88b;
  background-color: #5c4b3a;
}
.banner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 购物卡卡片 - 独立白色容器 */
.cart-card {
  margin: 30px 0 208px;
  background: white;
  border-radius: 32px;
  box-shadow: 0 20px 35px -8px rgba(0,0,0,0.1);
  padding: 28px 26px;
  width: 1000px;
  max-width: 100%;
  transition: all 0.2s;
}

/* 表格区域 */
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 15px;
  color: #1e293b;
}
th {
  text-align: left;
  padding: 0 8px 14px 8px;
  font-weight: 500;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.9rem;
}
td {
  padding: 16px 8px;
  border-bottom: 1px solid #edf2f7;
  vertical-align: middle;
}
/* 最后一行 (底部全选行) 不要底部边框，但保留上部边框已经在footer-row定义 */
tr.footer-row td {
  border-bottom: none;
  padding-top: 22px;
  padding-bottom: 8px;
}

/* 选中列 (复选框 + 文本) */
.checkbox-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}
.checkbox-cell input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
  margin: 0;
  cursor: pointer;
}
.item-id {
  font-weight: 500;
  color: #0f172a;
}

/* 图片占位 */
.image-placeholder {
  width: 44px;
  height: 44px;
  background: #f1f5f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #e2e8f0;
}

.price {
  font-weight: 500;
  color: #334155;
}

/* 个数控制 */
.quantity-control {
  display: inline-flex;
  align-items: center;
  border: 1px solid #e2e8f0;
  border-radius: 40px;
  background: white;
}
.quantity-btn {
  width: 32px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #475569;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 40px;
  transition: all 0.1s;
}
.quantity-btn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
}
.quantity-number {
  min-width: 34px;
  text-align: center;
  font-weight: 500;
  color: #1e293b;
  font-size: 16px;
}

.subtotal {
  font-weight: 600;
  color: #0f172a;
}

/* 删除按钮 */
.delete-btn {
  background: none;
  border: 1px solid #f1f5f9;
  color: #94a3b8;
  font-size: 13px;
  padding: 6px 16px;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.15s;
  font-weight: 500;
  background-color: #ffffff;
}
.delete-btn:hover {
  background-color: #fee2e2;
  border-color: #fecaca;
  color: #b91c1c;
}

/* 底部全选/结算栏 */
.footer-row td {
  border-top: 2px solid #f0f4fa;  /* 更明显的分割 */
}
.footer-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer-checkbox input {
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
}
.total-price {
  font-weight: 650;
  font-size: 1.4rem;
  color: #0f172a;
}
.total-price::before {
  content: '¥ ';
  font-weight: 500;
  font-size: 1.1rem;
  color: #475569;
}
.checkout-btn {
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 34px;
  border-radius: 48px;
  cursor: pointer;
  letter-spacing: 0;
  box-shadow: 0 8px 18px rgba(59,130,246,0.25);
  transition: 0.15s;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
}
.checkout-btn:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 12px 22px rgba(59,130,246,0.3);
}
.checkout-note {
  background: rgba(255,255,255,0.2);
  border-radius: 40px;
  padding: 4px 14px;
  font-size: 0.9rem;
  color: white;
  margin-left: 10px;
  border: 1px solid rgba(255,255,255,0.3);
  font-weight: 500;
}

/* 响应式 */
@media (max-width: 700px) {
  .cart-card, .banner-container { width: 95%; }
  table { min-width: 100%; }
  .checkout-btn { padding: 10px 22px; }
}

.active{
  background-color: #f1f5f9;
}
</style>