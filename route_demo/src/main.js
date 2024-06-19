import { createApp } from 'vue'
import App from './App.vue'
// 路由使用步骤5：导入步骤4的导出的路由
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
// 路由使用步骤6：让路由生效
app.use(router)
app.mount('#app')
