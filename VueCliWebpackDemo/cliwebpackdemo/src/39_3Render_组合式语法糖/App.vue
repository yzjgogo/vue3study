<template>
  <render/>
  <h2 class="">内容</h2>
</template>

<script setup>

import { ref, h } from 'vue';
import Home from './Home.vue'

const counter = ref(0)

const increment = () => {
  counter.value++
}
const decrement = () => {
  counter.value--
}

//直接定义一个render函数
const render = () => h("div", { className: "app" }, [
  h("h2", null, `组合式语法糖-当前计数: ${counter.value}`),
  h("button", { onClick: increment }, "+1"),
  h("button", { onClick: decrement }, "-1"),
  h(Home)
])

</script>

<style scoped>

</style>
