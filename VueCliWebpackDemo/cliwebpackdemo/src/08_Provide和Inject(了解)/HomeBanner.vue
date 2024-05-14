<template>
  <div class="banner">
    <!-- 教程里取message用了message.value 
    好像是因为computed(() => this.message)的结果包装了一层，但是我看这里并没有，留意一下-->
    <h2>HomeBanner: {{ name }} - {{ age }} - {{dog.color}} - {{ message }}</h2>
  </div>
</template>

<script>
  export default {
    inject: ["name", "age", "dog", "message"]
  }
</script>

<style scoped>
</style>

