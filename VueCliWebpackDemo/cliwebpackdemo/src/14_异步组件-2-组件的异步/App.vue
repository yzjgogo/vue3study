<template>
  <div class="app">
    <home></home>
    <AsyncCategory></AsyncCategory>
    <Category></Category>
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'

  import Home from './views/Home.vue'
  //正常的导入方式
  // import Category from './views/Category.vue'

  //想像'14_异步组件-1-webpack的分包'里导入.js那样导入，结果不行；
  // const Category = import("./views/Category.vue")

  //vue提供了异步导入组件的方法，defineAsyncComponent接收一个返回Promise的箭头函数
  //参考图片：组件异步打包.jpg
  const AsyncCategory = defineAsyncComponent(() => import("./views/Category.vue"))
    // const AsyncCategory = defineAsyncComponent({
    //   loader:() => import("./views/Category.vue"),
    //   // loadingComponent: Loading,加载过程中显示的组件
    //   // errorComponent: Error,加载失败时显示的组件
    //   // delay: 2000在现实loadingComponent之前的延迟 | 默认值:200ms
    //   // timeout:0 如果提供了timeout，并且加载组件的时间超过了设定值，将显示错误组件，默认值Infinity即用不超时，单位ms
    //   // suspensible:true 定义组件是否可挂起，默认为true
    // })

    

/**
 * 注：之前vue2时学路由时，路由的懒加载就是用的这种方式
 */

  export default {
    components: {
      Home,
      AsyncCategory,//可以直接使用这个Promise类型的变量
      Category: AsyncCategory//也可以赋值给另一个属性
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>

