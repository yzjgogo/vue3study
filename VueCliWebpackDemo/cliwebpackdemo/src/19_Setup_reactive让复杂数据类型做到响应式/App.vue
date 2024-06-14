<template>
  <div>
    <div>{{ account.username }}</div>
    <div>{{ account.password }}</div>
    <button @click="changeName">修改名字1</button>
    <button @click="account.username = '御前'">修改名字2</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'

  /**
    reactive用于定义复杂的响应式数据，例如对象、数组等
    用法reactivie({...})

    注意reactive牵扯不到.value，.value的说法只有ref才有
   */
  export default {
    setup() {
      const account = reactive({
        username: "刘德华",
        password: "123456"
      })

      const changeName = () => {
        account.username = "郭德纲"
      }

      return {
        account,
        changeName
      }
    }
  }
</script>

<style scoped>
</style>

