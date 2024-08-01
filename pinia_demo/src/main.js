import { createApp } from 'vue'
import App from './App.vue'
// pinia使用步骤2：引入步骤1创建的pinia并全局使用
import pinia from './stores'

createApp(App).use(pinia).mount('#app')
