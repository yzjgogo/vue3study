<template>
  <div class="app">
    <h2>当前计数: {{ counter }}</h2>

    <add-counter  @add="addBtnClick"></add-counter>
  </div>
</template>

<script>
import AddCounter from './AddCounter.vue'

export default {
  components: {
    AddCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addBtnClick(count) {
      this.counter += count
    }
  }
}
</script>

<style scoped></style>

