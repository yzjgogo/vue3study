// 路由的官网：https://router.vuejs.org/zh/guide/

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
    },

    // 动态路由参考vue2，在setup中获取params参考：User.vue
    {
      path:'/user/:id',
      component: () => import('../Views/User.vue')
    },

    //错误路径处理：一般如果用户在浏览器地址栏输入了错误的路径，我们应该给一个NotFound页面,即所有在routes中匹配不到的路径都显示我们这里配置的NotFound.vue组件
    // '/:pathMatch(.*)' 匹配到错误路径后，在NotFound.vue中能通过$route.params.pathMatch获取到错误路径，例如地址栏是http://192.168.2.7:8082/#/abc，则返回'abc'；地址栏是http://192.168.2.7:8082/#/abc/def，则返回'abc/def'
    // '/:pathMatch(.*)*' 匹配到错误路径后，在NotFound.vue中能通过$route.params.pathMatch获取到错误路径,获取的方式，如果这个错误路径可以通过'/'分割，则返回分割后的数组，如果错误路径不可以通过'/'分割，则返回这个错误的数组只有一个元素，这个元素就是这个错误路径，例如地址栏是http://192.168.2.7:8082/#/abc，则返回['abc']；地址栏是http://192.168.2.7:8082/#/abc/def，则返回['abc','def']
    {
      // path: "/:pathMatch(.*)",
      path: "/:pathMatch(.*)*",
      component: () => import("../Views/NotFound.vue")
    }
  ]
})

/**

导航守卫，参考vue2，包括：全局导航守卫，路由独享守卫，组件内的守卫
https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%8F%AF%E7%94%A8%E7%9A%84%E9%85%8D%E7%BD%AE-api

vue2是不是不支持return的方式，
vue3也支持next()的方式，但是更推荐return的方式
next() -> 原来的路由跳转
next('/home') -> 改变原来的路由跳转，转而跳转到home，是否支持对象{path:'/home',query:{}}呢
不掉next()则不跳转

导航的完整解析流程：参考 导航的完整解析流程.jpg
 
全局导航守卫
 */
// router.beforeEach(()=>{}) 可以不传参
// router.beforeEach((to,from)=>{}) 可以传这两个参
router.beforeEach((to,from,next) => { //可以传这三个参

  // return false 取消当前导航，即不跳转了

  // retrun undefined 或者 不return任何东西，继续跳转默认的导航

  // return '/home' 跳转到指定的路由

  //跳转到指定的路由，且可带更多的参数，name应该也可以吧？
  // return {
  //   path:'/home',
  //   query:{
  //     age:18
  //   }
  // }
})

// 路由使用步骤4：导出创建的路由，给main.js里的全局vue使用
export default router