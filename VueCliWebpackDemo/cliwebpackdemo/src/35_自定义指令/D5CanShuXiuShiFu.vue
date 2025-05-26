<template>
  <div>
    
    <div v-why:kobe.abc.cba="message">哈哈哈哈</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = '你好啊, 李银河'
//参考：E:\web\baseWeb\vuecli3study\src\directive\dirAll.js
const vWhy = {
  mounted(el, bindings) {
    console.log('参数修饰符',bindings)
    // console.log('name',bindings.name) //vue2有，vue3没有吗？
    console.log('value',bindings.value) //'你好啊, 李银河'
    // console.log('expression',bindings.expression) //'vue2有，vue3没有吗？
    console.log('arg',bindings.arg)//kobe
    console.log('modifiers',bindings.modifiers)//{abc: true, cba: true}
    el.textContent = bindings.value
  }
}

</script>
<style scoped></style>
