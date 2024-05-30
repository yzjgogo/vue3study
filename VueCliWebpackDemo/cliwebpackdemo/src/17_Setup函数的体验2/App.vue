<template>
  <div class="app">

    <!-- template中ref对象自动解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
// 参考17_Setup函数的体验1，其实就是对起的抽离
import useCounter from './hooks/useCounter'
export default {
  setup() {
    // const { counter, increment, decrement } = useCounter()
    // return { counter, increment, decrement }
    return {
      ...useCounter()
    }
  }
}
</script>

<style>
</style>
