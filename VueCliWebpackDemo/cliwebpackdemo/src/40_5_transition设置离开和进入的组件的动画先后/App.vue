<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- 
    mode属性:
    如果不使用mode属性，'哈哈哈'的离开和'呵呵呵'的进入动画是同时进行的
    mode="out-in" 要离开的元素离开动画执行完后，在执行进入元素的进入动画
    mode="in-out" 要进入的元素进入动画执行完后，在执行离开元素的离开动画
    -->
    <transition name="why" mode="out-in">
      <h2 v-if="isShow">哈哈哈</h2>
      <h2 v-else>呵呵呵</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true)

</script>

<style scoped>

h2 {
  display: inline-block;
}

/* transition */
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
}


.why-enter-active {
  animation: whyAnim 2s ease;
  transition: opacity 2s ease;
}

.why-leave-active {
  animation: whyAnim 2s ease reverse;
  transition: opacity 2s ease;
}


@keyframes whyAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

</style>
