import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './Counter.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')


const app2 = createApp(Counter)
app2.mount('#counter')
