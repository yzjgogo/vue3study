<template>
  <div>
    Home
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
    // 选项式API获取params的方式
    console.log("选项式API获取params的方式", this.$route.params.id)

  }
}
</script>

<style></style>
