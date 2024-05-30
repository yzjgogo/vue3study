<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="changeCounter">改变数字1</button>
    <!-- 这里直接写入counter也没有用counter.value++，也是自动解包的 -->
    <button @click="counter++">改变数字2</button>

    <div>{{ message }}</div>
    <button @click="changeMessage">改变消息</button>

    <div>{{ isDog }}</div>
    <button @click="changeDog">改变狗</button>
  </div>
</template>

<script>
  import { ref } from 'vue'

  /**
    ref用于定义基本数据类型的数据(也可以定义复杂数据类型，参考：21_Setup_ref让复杂数据类型做到响应式)
    在setup()函数中读写响应式数据是需要.value手动解包；
    在template中读写响应式数据时，不需要手动解包(也有例外，看后面)
   */
  export default {
    setup() {
      let counter = ref(100)
      //普通函数可以
      function changeCounter() {
        counter.value++
      }

      let message = ref("我是旧消息")
      //箭头函数也可以
      const changeMessage = ()=>{
        message.value = `${Date.now()}`
      }

      let isDog = ref(false)
      let changeDog = ()=>{
        isDog.value = !isDog.vlaue
      }  

      //只有setup函数return出去的数据才可以被template绑定，包括函数
      return {counter,message,isDog,changeCounter,changeMessage,changeDog}
    }
  }
</script>

<style scoped>
</style>

