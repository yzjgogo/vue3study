<template>
  <!-- pinia使用步骤5：使用store里的数据，无需.state -->
  <div>哈哈哈:{{ counterStore.count }}</div>
</template>

<script setup>
// pinia使用步骤4：引入我们定义的业务store,其实是个函数
import userCounter from '@/stores/counter'
const counterStore = userCounter()//返回store
</script>

<style scoped>

</style>
