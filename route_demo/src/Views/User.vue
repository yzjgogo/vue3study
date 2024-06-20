<template>
  <div>
    <!-- 在template中获取params的方式vue3和vue2一样 -->
    User:{{ $route.params.id }}
  </div>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
const route = useRoute()
console.log("组合式API获取params的方式", route.params.id)
</script>

<script>
export default {
  name: 'home',
  components: {
  },
  mounted() {
    console.log("选项式API获取params的方式", this.$route.params.id)

  }
}
</script>

<style></style>
