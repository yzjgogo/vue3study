<template>
  <div>AppContent</div>
</template>

<script>
//记得要导入
  import { onMounted, onUpdated, onUnmounted, onBeforeUnmount } from 'vue'

  /**
    参考图片：
    setup生命周期函数.jpg
   */
  export default {
    // 传统的选项式API
    beforeCreate() {

    },
    // created() {

    // },
    // beforeMount() {

    // },
    // mounted() {

    // },
    // beforeUpdate() {

    // },
    // updated() {

    // }
    // beforeUnmount(){

    // },
    // unmounted(){

    // }

    //vue3新型的组合API，每一个生命周期函数用之前要导入
    setup() {
      onBeforeMount(() => {

      })
      // 在执行setup函数的过程中, 你需要注册别的生命周期函数
      //onMounted传入一个函数，这个函数就被系统用于对应的生命周期函数回调，例如这里就对应mounted的生命周期函数回调
      onMounted(() => {
        console.log("onmounted")
      })
      //可以多次调用onMounted，每次传入的回调函数都会被调用
      // onMounted(() => {
      //   console.log("onmounted")
      // })
    }
  }
</script>

<style scoped>
</style>

