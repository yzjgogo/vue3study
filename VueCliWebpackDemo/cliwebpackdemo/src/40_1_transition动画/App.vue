<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- 想给某个组件添加入场出场动画，则可使用vue提供的transition标签，使用transition标签可以定义transform动画；如果不指定name，则使用v-xxx，如果指定name为why，则使用why-xxx -->
    <transition name="why">
      <h2 v-if="isShow">哈哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)

</script>

<style scoped>

h2 {
  display: inline-block;
}

/* 
组件入场动画：
v-enter-from：x;进入的开始状态是X
v-enter-to：y;进入的结束状态是Y
v-enter-active:z；触发整个进入过程的过度效果

组件离场动画：
v-leave-from:y； 离开的开始状态
v-leave-to:x；离开的结束状态 
v-leave-active:z；触发整个离开过程的过度效果

如果<transition name="why">中定义了name则使用对应的why-，否则使用默认的v-
  v-'xxxxx' xxxxx是固定写法(-enter-from、-leave-to、-enter-to、-leave-from、-enter-active、-leave-active)，是在vue中定死的类名，vue要求你根据固定的类名定义动画效果，再有vue来根据类名的动态添加移除来触发动画效果

 */

.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
  transform: scale(1);
}

.why-enter-active,
.why-leave-active {
  transition: all 2s ease;
}

</style>
