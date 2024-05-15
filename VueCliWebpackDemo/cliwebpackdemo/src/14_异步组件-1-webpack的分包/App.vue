<template>
  <div class="app">
    我是组件
  </div>
</template>

<script>

/**
 * 注：之前vue2时学路由时，路由的懒加载就是用的这种方式
 */


//正常加载，正常打包，没有分包，参考：正常加载.jpg
// import {mysum} from './my.js'


//异步加载，分包打包，放入独立的js文件里；参考：异步加载.jpg
//异步加载会返回一个Promise对象
  import ('./my.js').then(res => {
    console.log("加载出来了---")
  })

  export default {
    data() {
    },
    created(){
        // console.log("执行create")
        // import ('./my.js').then(res => {
        //   console.log("加载出来了")
        // })
    },
    methods: {
      
    }
  }
</script>

<style scoped>
</style>

