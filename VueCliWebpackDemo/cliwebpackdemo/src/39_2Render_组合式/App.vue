<template>
  <h2 class="ddd">渲染不出来？</h2>
  <render />
  <h2 class="ddd">渲染不出来？为什么</h2>
</template>

<script>
import { h, ref } from 'vue'
import Home from './Home.vue'

export default {
  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }

    //返回的函数会被Vue调用，其实就是<render/>,会被渲染到页面上
    return () =>
      h('div', { className: 'app' }, [
        h('h2', null, `组合式-当前计数: ${counter.value}`),
        h('button', { onClick: increment }, '+1'),
        h('button', { onClick: decrement }, '-1'),
        h(Home)
      ])
  }
}
</script>

<style scoped></style>
