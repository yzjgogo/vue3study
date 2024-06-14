<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <!-- 会触发watchEffect执行 -->
    <button @click="counter++">+1</button>
    <!-- 会触发watchEffect执行 -->
    <button @click="name = 'kobe'">修改name</button>
  </div>
</template>

<script>
  import { watchEffect, watch, ref } from 'vue'

  export default {
    setup() {
      const counter = ref(0)
      const name = ref("why")
      /**
        参考：
        watchEffect用法.md
        https://cn.vuejs.org/api/reactivity-core.html#watcheffect
       * /
      
      /**
        1：watchEffect会默认首先执行一次，然后会检测其函数内部依赖了哪些响应式数据，例如这里检测到依赖了counter、name；然后当这些数据发生变化时又会触发watchEffect的重新执行。

        2：watchEffect函数执行后会返回一个停止监听的函数，调用这个函数可以停止对响应式状态的追踪
       */
      const stopWatch = watchEffect(() => {
        console.log("-------", counter.value, name.value)

        // 判断counter.value > 10
        if (counter.value >= 10) {
          stopWatch()
        }
      })

      /**
        3：watchEffect接受的回调函数的参数是一个清理函数，该函数会在回调函数重新执行之前以及组件卸载之前执行。这对于取消异步操作或清理资源非常有用
       */
    // watchEffect((onInvalidate) => {
    //   const timer = setTimeout(() => {
    //     // 做些异步操作
    //   }, 1000)

    //   onInvalidate(() => {
    //     clearTimeout(timer)
    //   })
    // })

    /**
      4：watchEffect函数其实有两个参数，上面的例子中只是没传第二个参数
    watchEffect(() => {
      // 响应式状态变化时的操作
    }, { flush: 'post' })
      
    */


      return {
        counter,
        name
      }
    }
  }
</script>

<style scoped>
</style>

