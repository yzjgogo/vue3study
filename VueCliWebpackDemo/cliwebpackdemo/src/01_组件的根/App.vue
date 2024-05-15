<template>
  <div class="app">
    <app-header></app-header>
  </div>
</template>
<!-- 
  去看AppHeader.vue
  vue2只允许一个组件有一个根，
  vue3允许一个组件有多个根，但是实际开发中强烈不建议弄多个，还是一个比较好。
 -->
<script>
  import AppHeader from './components/AppHeader.vue'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style scoped>
</style>

