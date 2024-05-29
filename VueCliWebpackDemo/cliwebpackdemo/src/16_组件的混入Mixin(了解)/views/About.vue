<template>
  <h2>About组件</h2>
</template>

<script>
// minxin使用步骤2：哪个组件想用，就导入这个mixin对象
  import messageMixin from '../mixins/message-mixin'

  export default {
    mixins: [messageMixin]
  }
</script>

<style scoped>
</style>

