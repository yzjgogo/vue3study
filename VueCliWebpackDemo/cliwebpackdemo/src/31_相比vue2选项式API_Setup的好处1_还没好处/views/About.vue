<template>
  <div>
  <h2>About计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    function increment() {
      console.log("++++")
      counter.value++
    }
    function decrement() {
      console.log("----")
      counter.value--
    }

    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style scoped>
</style>

