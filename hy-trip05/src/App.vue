<template>
  <div class="app">

    <!-- 

    学习记录1：

    我们本来打算像vue2这样实现路由view的keep-alive的：
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
    但是有两个问题：
    1：在vue3中，不运行这样做，你如果这样做，会在控制台看到提示： 如图：keep-alive提示.jpg
    2：在vue3的组合式API中，没找到给组件设置name的方式，因为include需要组件的name属性，我们只能使用原来的选项式API给组件命名，
    <script>
      export default { name: "home" }
    </script> 
    参考：home.vue注释掉的内容；

    因此我们采用vue3推荐的如下方式：v-slot
    include可以传入组件文件的名字？，例如 home.vue中的home
    
    也可以传入多个，让多个组件保活；include="home,favor"

    其中props.Component就是home,favor等
    -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hideTabBar"/>
    <loading/>
  </div>
</template>

<script setup>

import TabBar from "@/components/tab-bar/tab-bar.vue"
import Loading from "@/components/loading/loading.vue"
import { useRoute } from "vue-router";

const route = useRoute()

</script>

<style scoped>

</style>
