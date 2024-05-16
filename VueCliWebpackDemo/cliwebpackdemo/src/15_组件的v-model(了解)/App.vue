<template>
  <div class="app">
    <!-- 
      1.input v-model的本质：
      :value 用于当message的数值发生变化时，读取message的值，给input的value属性实时赋值
      @input 用于当input的内容发生变化时，实时赋值给message
      从而实现双向绑定，也可以参考之前学习vue2时的代码回顾；
     -->
    <!-- <input v-model="message">
    <input :value="message" @input="message = $event.target.value"> -->



    <!-- 2.组件的v-model: 默认modelValue
          给counter定义modelValue属性， 用于响应外部appCounter的数据变化；
          在counter内部数据发生变化时，发送'update:modelValue'事件，外部接收再赋值给modelValue,赋值方式是直接将$event赋值给appCounter
          这样实现双向绑定
          注意：modelValue是固定的命名，不能乱改；
    -->
    <counter v-model="appCounter"></counter>
    <counter :modelValue="appCounter" @update:modelValue="appCounter = $event"></counter>
    
    <!-- 3.组件的v-model: 当我们使用v-model时同时指定要自定义的名称,格式 v-model:counter  v-model:why v-model:自定义名称
    组件内部就要同样的定义一个同名的属性counter、why；还要发送同名的事件'update:counter'，'update:why'-->
    <counter2 v-model:counter="appCounter" v-model:why="appWhy"></counter2>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Counter2 from './Counter2.vue'

  export default {
    components: {
      Counter,
      Counter2
    },
    data() {
      return {
        message: "Hello World",
        appCounter: 100,
        appWhy: "coderwhy"
      }
    }
  }
</script>

<style scoped>
</style>

