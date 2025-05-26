<template>
  <!-- 
   插件：https://cn.vuejs.org/guide/reusability/plugins.html#plugins
   可以直接看官网文档，比较简短
   1：插件可以给vue添加全局的工具代码，例如添加全局的属性、方法等；
      例如：通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。
      通过 app.provide() 使一个资源可被注入进整个应用。
      向 app.config.globalProperties 中添加一些全局实例属性或方法

   2：插件可以是一个包含install方法的对象，也可以是一个函数；


   插件使用步骤：搜索插件使用步骤
    -->
  <div>
  </div>
</template>
<script setup>
import { getCurrentInstance, inject, onMounted } from 'vue';

// Get the current component instance
const instance = getCurrentInstance();

//插件使用步骤3：使用插件中定义的全局方法
onMounted(() => {
  instance.proxy.$doMyLog('App.vue 已挂载');
});

//插件使用步骤4：使用插件中定义的全局数据
const gData = inject('myGlobalData', {});
console.log('插件中注入的全局数据:', gData);
</script>

<style scoped></style>
