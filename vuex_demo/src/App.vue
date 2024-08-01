<template>
  <div class="app">
    <!-- store中的counter -->
    <h2>App当前计数: {{ $store.state.counter }}</h2>
    <h2>组合式API当前计数: {{ counter }}</h2>
    <button @click="increment">增加counter</button>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { isRef, isReactive, toRefs, computed } from 'vue'

  //下面这一堆操作store的代码相比在vue2中复杂太多，可见vuex已经不适合vue3了，因此Pinia出现了

  const store = useStore()//类似vue2或选项式API的this.$store

  //直接使用store.state.counter不是响应式的，我们可以通过toRefs让其变为响应式,因为stonre.state是reactive类型的响应式对象，所以我们可以通过toRefs让其所有的属性都变成ref类型的响应式变量
  console.log('结果呢：',isReactive(store.state),isRef(store.state))//true,false
  // const counter = store.state.counter//不是响应式
  const {counter} = toRefs(store.state)//让store.state的counter变成响应式的
  // const {message} = toRefs(store.getters)//让store.getters的message变成响应式的,这样不行？因为store.getters不是reactive类型的
  // const message = computed(()=>store.getters.message) //引入computed就可以了

  //官方要求修改state只能通过mutations，不能直接store.state.mm = 10


  function increment(){
    // store.state = xxx 不要直接修改state里的值，要通过mutations修改
    store.commit('increment')
  }
</script>

<style scoped>
</style>
