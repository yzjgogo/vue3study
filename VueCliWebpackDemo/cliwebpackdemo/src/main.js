import { createApp } from 'vue'
// import App from './App.vue'
// import App from './01_组件的根/App.vue'
// import App from './03_组件通信-子传父-emits/App.vue'
// import App from './05_组件插槽-基本使用(掌握)/App.vue'
// import App from './06_组件插槽-具名插槽(掌握)/App.vue'
// import App from './08_Provide和Inject(了解)/App.vue'
// import App from './09_事件总线的使用(掌握)/App.vue'
// import App from './10_生命周期函数演练(重要)/App.vue'
// import App from './11_ref获取元素组件(掌握)/App.vue'
// import App from './12_动态组件的使用(了解)/App.vue'
// import App from './13_Keep-Alive的使用(理解)/App.vue'
// import App from './14_异步组件-1-webpack的分包/App.vue'
// import App from './14_异步组件-2-组件的异步/App.vue'
// import App from './15_组件的v-model(了解)/App.vue'
// import App from './16_组件的混入Mixin(了解)/App.vue'
// import App from './17_Setup函数的体验1/App.vue'
// import App from './17_Setup函数的体验2/App.vue'
// import App from './18_Setup_ref让基本数据类型做到响应式/App.vue'
// import App from './19_Setup_reactive让复杂数据类型做到响应式/App.vue'
// import App from './20_Setup_关于ref的浅层解包的理解/App.vue'
// import App from './21_Setup_ref让复杂数据类型做到响应式/App.vue'
// import App from './22_习惯上ref和reactive用法的区别/App.vue'
// import App from './23_vue单向数据流/App.vue'
// import App from './24_一系列方法/App.vue'
// import App from './25_Setup中的computed/App.vue'
// import App from './26_Setup_ref获取元素或组件/App.vue'
// import App from './27_Setup的生命周期函数/App.vue'
// import App from './28_Setup的Provide和Inject/App.vue'
// import App from './29_Setup中用watch侦听数据变化/App.vue'
// import App from './30_响应式的追踪依赖watchEffect/App.vue'
// import App from './31_相比vue2选项式API_Setup的好处1_还没好处/App.vue'
// import App from './32_相比vue2选项式API_Setup的好处1_hooks好处/App.vue'
// import App from './33_Setup的语法糖/App.vue'
import App from './34_组合式API和选项式API可以共存/App.vue'
import "./utils/abc/cba/nba/index"
createApp(App).mount('#app')

/*
全局混入mixin的用法
const app = createApp(App)
app.mixin({
  created() {
    console.log("mixin created")
  }
})
app.mount('#app')
*/
