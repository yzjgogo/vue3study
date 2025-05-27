<template>
  <div class="app">
    <button @click="addNumber">添加数字</button>
    <button @click="removeNumber">删除数字</button>
    <button @click="shuffleNumber">打乱数字</button>
    
    <!-- 
    官网：https://cn.vuejs.org/guide/built-ins/transition-group.html#transitiongroup

    1：tag属性：这里指定transition-group最终被渲染为div标签，默认情况下transition-group不会被渲染为任何html标签；transition标签是不是最终不会被渲染为标签？
    2：列表中每一个元素都必须有独一无二的key，template标签也可以设置key
    3：我们设置的每一个v-enter-from、v-leave-to、v-enter-to、v-leave-from、v-enter-active、v-leave-active等只会作用到每一个出入场的item元素上，不是作用到transition-group生成的html标签上
    4:行内元素动画无效果，因此设置为行内块元素,本案例的display: inline-block;
    5：给v-leave-active设置position: absolute;让其离开时不再持有原位置，左边的元素才能随着这个元素的离开逐渐向左移动填充位置
    -->

    <transition-group tag="div" name="why">
      <template v-for="item in nums" :key="item">
        <span>{{ item }}</span>
      </template>
    </transition-group>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { shuffle } from "underscore";

const nums = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

const addNumber = () => {
  nums.value.splice(randomIndex(), 0, nums.value.length)
}

const removeNumber = () => {
  nums.value.splice(randomIndex(), 1)
}

const shuffleNumber = () => {
  nums.value = shuffle(nums.value)
}

const randomIndex = () => {
  return Math.floor(Math.random() * nums.value.length)
}

</script>

<style scoped>

span {
  margin-right: 10px;
  /* 行内元素动画无效果，因此设置为行内块元素 */
  display: inline-block;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.why-enter-active,
.why-leave-active {
  transition: all 2s ease;
}

.why-leave-active {
  position: absolute;
}


/* 针对其他移动的阶段需要的动画 */
.why-move {
  transition: all 2s ease;
}

</style>
