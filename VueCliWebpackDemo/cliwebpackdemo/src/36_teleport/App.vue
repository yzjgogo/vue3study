<template>
  <!-- 
   teleport可以在任意组件的任意位置，把某个组件挂载到body上
  teleport官网：https://cn.vuejs.org/guide/built-ins/teleport.html#teleport 
  学习36_teleport时，打开VueCliWebpackDemo\cliwebpackdemo\public\index.html里注释的内容 -->
  <div class="root-box">
    <div class="rootcontent1"></div>
    <div id="defg"></div>
    <Second></Second>
  </div>
</template>
<script setup>
//导入Second组件
import Second from './components/Second.vue';
</script>

<style scoped></style>
