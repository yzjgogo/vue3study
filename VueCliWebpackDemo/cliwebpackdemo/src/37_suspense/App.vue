<template>
  <div>
    <!-- 
    官网：https://cn.vuejs.org/guide/built-ins/suspense.html#suspense
    参考：VueCliWebpackDemo\cliwebpackdemo\src\14_异步组件-2-组件的异步

    由于AsyncHome是本地加载，速度很快，所以loading一闪而过，我搞长一点，别眨眼仔细观察，还是看得到的
    -->

    <suspense @pending="pending" @resolve="resolve" @fallback="fallback">
      <template #default>
        <async-home />
      </template>
      <template #fallback>
        <h2>
          LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading
        </h2>
      </template>
    </suspense>
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncHome = defineAsyncComponent(() => import('./AsyncHome.vue'))
function pending() {
  console.log('pending执行---')
}
function resolve() {
  console.log('resolve执行---')
}
function fallback() {
  console.log('fallback执行---')
}
</script>

<style scoped></style>
