<template>
  
  <!-- teleport官网：https://cn.vuejs.org/guide/built-ins/teleport.html#teleport  -->
  <div class="second-box">
    <fly :msg="'不使用teleprot，则正常在当前位置引入组件，形成组件树'"></fly>

      <teleport to="body">
        <fly :msg="'使用teleport且不禁用，通过to把Son组件挂载到body上'"></fly>
      </teleport>

      <!-- 
      这个#abc指向VueCliWebpackDemo\cliwebpackdemo\public\index.html里注释的内容
      我把这个to指向VueCliWebpackDemo\cliwebpackdemo\src\36_teleport\App.vue里的defg元素无效，所以这个to我还没有深入理解
      以后遇到再研究，官方对teleport的定义是：<Teleport> 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。
      
        -->
      <teleport to="#abc" :disabled="false">
        <fly :msg="'使用teleport且不禁用，通过to把Son组件挂载到任意某个组件上，可以使用选择器挂载'"></fly>
      </teleport>

      <!-- 这个disabled是我自己的理解，有待验证 -->
      <teleport to="body" :disabled="true">
        <fly :msg="'使用teleport但禁用teleport，则结果相当于没有使用teleport，而是直接引入Son组件'"></fly>
      </teleport>
  </div>
</template>
<script setup>
import fly from './fly.vue';
</script>
  
<style scoped>
  
</style>

