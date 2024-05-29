<template>
  <div>
    <home></home>
    <about></about>
    <category></category>
  </div>
</template>
<!-- 
  回忆看：
 minxin使用步骤1
 minxin使用使用步骤2

 全局混入mixin:
 参考：VueCliWebpackDemo\cliwebpackdemo\src\main.js里的 全局混入mixin的用法

-->
<script>
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import Category from './views/Category.vue'

  export default {
    components: {
      Home,
      About,
      Category
    }
  }
</script>

<style scoped>
</style>

