<script>
import MyTable from "./components/MyTable.vue";

const defaultArr = [
  {
    id: 1,
    name: '火龙果',
    icon: './assets/cole.jpg',
    ischecked: false,
    num: 1,
    price: 13,
    taag: '水果'
  },
  {
    id: 2,
    name: 'luguanluguanlulushijiandaole',
    icon: './assets/luguanluguanlulushijiandaole.png',
    ischecked: false,
    num: 1,
    price: 299,
    taag: '水果'
  },
  {
    id: 3,
    name: '苹果猫',
    icon: './assets/苹果猫.jpg',
    ischecked: false,
    num: 1,
    price: 100,
    taag: '水果'
  },
  {
    id: 4,
    name: '西瓜猫',
    icon: './assets/西瓜猫.jpg',
    ischecked: false,
    num: 1,
    price: 119,
    taag: '水果'
  },
  {
    id: 5,
    name: '桔子',
    icon: './assets/桔子.png',
    ischecked: false,
    num: 1,
    price: 88,
    taag: '水果'
  }
]
export default {
  components: {
    MyTable
  },
  data() {
    return {
      fruitList: JSON.parse(localStorage.getItem('fruitList')) || defaultArr,
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

  <MyTable :data="fruitList"></MyTable>
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
</style>