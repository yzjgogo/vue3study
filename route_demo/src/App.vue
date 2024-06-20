<template>
  <div>
    <div>我是APP</div>
      <router-link to="/home">首页&nbsp;&nbsp;</router-link>
      <router-link to="/about">&nbsp;&nbsp;关于</router-link>
      <router-link to="/user/123">&nbsp;&nbsp;用户</router-link>
      <!-- 路由使用步骤7：在浏览器地址栏改变hash或通过router-link等方式改变路由都会让当前路由在router-view中显示 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
