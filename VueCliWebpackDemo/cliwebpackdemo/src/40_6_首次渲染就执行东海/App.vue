<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- 默认情况下首次渲染是没有动画的，如果我们想首次渲染也指定动画，则可设置appear为true
    例如这里，如果不使用appear，首次显示'哈哈哈='，是直接显示出来的，没有执行入场动画， 设置appear为true后就执行了
    -->

    <transition name="why" appear>
      <h2 v-if="isShow">哈哈哈=</h2>
      <h2 v-else>呵呵呵=</h2>
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
