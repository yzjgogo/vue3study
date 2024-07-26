// vuex基本使用步骤1：在终端执行命令'npm install vuex' 或 在package.json -> dependencies -> "vuex": "^4.1.0"配置然后npm install,安装vuex

// vuex基本使用步骤2：导入createStore
import { createStore } from 'vuex'

// vuex基本使用步骤3：使用createStore创建一个最简单的store
const store = createStore({
  state: () => ({
    counter: 112
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  }
})

// vuex基本使用步骤4：导出创建的store
export default store

// vuex基本使用步骤5：在main.js中使用这个store，让其全局生效

// vuex基本使用步骤6：此时我们就可以在任何一个组件里使用这个store了，例如在App.vue的template中使用‘$store.state.counter’访问counter