<template>
  <!-- 参考vue2自定义指令：E:\web\baseWeb\vuecli3study\src\views\diy-directive\index.vue -->
  <div>
    <h1>vue3中使用组合式API不使用自定义指令，实现输入框自动获取焦点</h1>
    <!-- <v3AutoFocus></v3AutoFocus> -->
    <h1>vue3中使用选项式API且使用自定义局部指令，实现输入框自动获取焦点</h1>
    <!-- <AutoFocusJubuZhiLingXuanXiang></AutoFocusJubuZhiLingXuanXiang> -->
    <h1>vue3中使用组合式API且使用自定义局部指令，实现输入框自动获取焦点</h1>
    <!-- <AutoFocusQuanjuZhiLingZuHe></AutoFocusQuanjuZhiLingZuHe> -->
    <h1>vue3使用全局部指令，实现输入框自动获取焦点</h1>
    <AutoFocusQuanjuZhiLing></AutoFocusQuanjuZhiLing>
    <h1>vue3自定义指令参数修饰符</h1>
    <!-- 参考：E:\web\baseWeb\vuecli3study\src\directive\dirAll.js -->
    <CanShuXiuShiFu></CanShuXiuShiFu>
  </div>
</template>
<script setup>
  import v3AutoFocus from './D1v3AutoFocus.vue'
  import AutoFocusJubuZhiLingXuanXiang from './D2AutoFocusJubuZhiLingXuanXiang.vue'
  import AutoFocusQuanjuZhiLingZuHe from './D3AutoFocusJubuZhiLingZuHe.vue'
  import AutoFocusQuanjuZhiLing from './D4AutoFocusQuanjuZhiLing.vue'
  import CanShuXiuShiFu from './D5CanShuXiuShiFu.vue'
</script>

<style scoped></style>

