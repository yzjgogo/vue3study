<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- <transition name="why"> -->
    <transition name="why" type="animation">
      <h2 v-if="isShow">
        要是有些事我没说，地坛，你别以为是我忘了，我什么也没忘，但是有些事只适合收藏。不能说，也不能想，却又不能忘。它们不能变成语言，它们无法变成语言，一旦变成语言就不再是它们了。它们是一片朦胧的温馨与寂寥，是一片成熟的希望与绝望，它们的领地只有两处：心与坟墓。比如说邮票，有些是用于寄信的，有些仅仅是为了收藏。
      </h2>
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
transition标签可以同时使用transition动画和animation帧动画
本案例中，opacity的透明度动画用的transition动画，缩放动画用的animation帧动画

但是要注意两个动画的执行时长问题，一般要求两个动画执行时长相同。

如果transition动画和animation帧动画的执行时长不一致，我们可以通过给transition标签设置type属性来告知vue，监听哪个动画的结束作为出入场动画的结束(结束时，无论是transition动画还是animation帧动画即使还没结束，属性值也都直接变为最终的状态值)，

type="animation" 以animation帧动画的结束作为出入场动画的结束
type="transition" 以transition动画的结束作为出入场动画的结束

你可以修改两个动画的时长看看效果

*/
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
}


.why-enter-active {
  animation: whyAnim 10s ease;
  transition: opacity 10s ease;
}

.why-leave-active {
  animation: whyAnim 10s ease reverse;
  transition: opacity 10s ease;
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
