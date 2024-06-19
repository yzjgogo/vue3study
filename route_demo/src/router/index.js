//router-link、to、replace、active-class="active"等的用法参考vue2

// 路由使用步骤1：导入createRouter用于创建路由和组件的映射关系路由配置等、导入createWebHashHistory用于指定路由的模式为hash模式；createWebHistory用于指定路由的模式为history
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 路由使用步骤2：先导入待路由映射的组件，待后续使用
//非懒加载的方式，太多的话可能导致用户第一次访问太慢
// import Home from '../Views/Home.vue'
// import About from '../Views/About.vue'
//懒加载的方式，参考：E:\web\Vue3\VueDemo\VueCliWebpackDemo\cliwebpackdemo\src\14_异步组件-1-webpack的分包、E:\web\Vue3\VueDemo\VueCliWebpackDemo\cliwebpackdemo\src\14_异步组件-2-组件的异步、可以执行‘npm run build’看看打包结果dist/js里的js文件有没有分包，其中import函数里的注释不是普通的注释，是魔法注释，告诉webpack分包时指定分包的名称，方便我们查看分包结果文件来自哪里，这个注释属于webpack的范畴，不属于vue
const Home = () => import(/*webpackChunkName:'home'*/'../Views/Home.vue')
const About = () => import(/*webpackChunkName:'about'*/'../Views/About.vue')

//// 路由使用步骤3：创建路由，主要是创建路由和组件的映射关系、路由的模式hash或history
const router = createRouter({
  history:createWebHashHistory(),
  // history:createWebHistory(),指定路由的模式为history
  routes:[
    //如果不配置默认路径，则console会报警告：No match found for location with path "/"，这里的处里方式是直接将默认路径重定向到home
    {
      path:'/',
      redirect:'/home'
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      meta:{//额外的参数可以放到meta里
        height:14,
        desc:'哈哈哈'
      }
    },
    {
      name:'about',
      path:'/about',
      component:About
    }
  ]
})

// 路由使用步骤4：导出创建的路由，给main.js里的全局vue使用
export default router