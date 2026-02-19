<!DOCTYPE html>
<html>
<head>
  <title>单文件Vue应用</title>
  <!-- 引入Vue CDN -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <style>
    #app {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin: 10px;
    }
  </style>
</head>
<body>
<div id="app">
  <h1>{{ message }}</h1>
  <p>计数: {{ count }}</p>
  <button @click="increment">增加</button>
  <button @click="decrement">减少</button>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const message = ref('你好，Vue！');
      const count = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      return {
        message,
        count,
        increment,
        decrement
      };
    }
  });

  app.mount('#app');
</script>
</body>
</html>