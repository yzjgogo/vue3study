<template>
  <!-- setup函数return的函数就是jsx，最终会渲染出布局 -->
  <jsx/>
</template>

<script lang="jsx">
  import { ref } from 'vue'
  import About from './About.vue'

  export default {
    setup() {
      const counter = ref(0)

      const increment = () => {
        counter.value++
      }
      const decrement = () => {
        counter.value--
      }

      return () => (
        <div class="app">
          <h2>JSX组合式-当前计数: { counter.value }</h2>
          <button onClick={ increment }>+1</button>
          <button onClick={ decrement }>-1</button>
          <About/>
        </div>
      )
    }
  }
</script>

<style lang="less" scoped>

</style>
