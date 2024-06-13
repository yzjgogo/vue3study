<template>
  <div>AppContent: {{ name }}</div>
  <button @click="name = 'kobe'">app btn</button>
  <show-info></show-info>
</template>

<script>
  import { provide, ref } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },
    /**
      setup()中provide和inject的用法：
      步骤1：在提供数据的组件的setup()函数中使用provide(...)
            可以提供普通类型，也可以提供ref或reactive的响应式类型，
            提供响应式类型时使用inject的组件使用该数据也是响应式的。


     */
    setup() {
      const name = ref("why")
      provide("name", name)
      provide("age", 18)

      return {
        name
      }
    }
  }
</script>

<style scoped>
</style>

