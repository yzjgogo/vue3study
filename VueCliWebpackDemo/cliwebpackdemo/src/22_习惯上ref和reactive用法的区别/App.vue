<template>
  <div>
    
  </div>
</template>

<script>
  import {onMounted,reactive, ref } from 'vue'

  export default {
    /**
        习惯上对于，
        已知一些有关联得数据，这种情况，我们用reactive去定义；

        单个独立的数据，我们用ref去定义；

        未知的数据（例如接口请求来的数据），我们也用ref去定义
     */
    setup() {
      
      //username和username是有关联且已知的字段，我们用reactive定义
      const account = reactive({
        username: "coderwhy",
        username: "1234567"
      })

      //单个独立的数据
      const mytype = ref('帅哥')

      //接口请求来的数据,先定义出来allDatas，可能[]只是个默认值
      const allDatas = ref([])
      //等接口回来后，再将数据赋值给allDatas.value，仍然能保证allDatas的响应式
      onMounted(() => {
        const serveData = ['1','2','3']
        allDatas.value = serveData
      })
    }
  }
</script>

<style scoped>
</style>

