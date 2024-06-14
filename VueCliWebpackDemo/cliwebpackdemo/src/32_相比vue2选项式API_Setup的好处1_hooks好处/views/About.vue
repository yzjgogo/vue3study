<template>
  <div>
  <h2>About计数: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  </div>
</template>

<script>
import useCounter from '../hooks/useCounter'
export default {
  setup() {
    return {
      ...useCounter()
    }
  }
}
</script>

<style scoped>
</style>

