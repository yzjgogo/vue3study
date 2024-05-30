<template>
  <div class="app">

    <!-- 绑定时不需要counter.value，因为template中ref对象自动解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  /**
   props:
   父组件传递过来的属性会放到这里，子组件还是在props:{}里定义属性；
   上面布局里也是和vue2一样访问属性即可；
   如果在setup函数里使用属性，不能通过this.属性名去获取，我们只需直接从它的这个props参数获取
   context:又叫做SetupContext
    它包括
    attrs：所有的非prop的attribute
    slots：父组件传递过来的插槽
    emit：组件里需要发送事件时用到，因为不能用this.$emit()
  */
  setup(props,context) {
  // setup() { 因为用不到setup的参数，所以这里没有写
    // 1.定义counter的内容
    //let counter = 100 这样定义做不到响应式，需要用ref包装一下，上面已经导入了ref
    let counter = ref(100)

    const increment = () => {
      counter.value++ //赋值要用counter.value
      console.log(counter.value)
    }
    const decrement = () => {
      counter.value--
    }

    //只有被setup()函数返回的对象或方法才能被绑定；即上面布局标签里才能访问它，例如{{counter}} @click='increment'
    return {
      counter, increment, decrement 
    }
  }
}
</script>

<style>
</style>
