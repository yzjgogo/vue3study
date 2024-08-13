<template>
  
  <div style="background-color: aqua;">访问store里的state</div>
  <!-- pinia使用步骤5：使用store里的数据，无需.state -->
  <div>响应式:counterStore.count：{{ counterStore.count }}</div>
  <div>响应式:toRefs(counterStore):{{ rCount }}</div>
  <div>响应式:storeToRefs(counterStore):{{ srCount }}</div>
  <div>非响应式:{{ noResponseCount }}</div>
  <button @click="updateCount">改变count</button>

  <div style="background-color: aqua;margin-top: 20px;">修改stroe里的state</div>
  <button @click="doPatch">使用$patch一次性修改多个状态</button>
  <button @click="doState">使用$state替换state为新的对象</button>
  <button @click="doReset">使用$reset重置state，回到初始状态</button>
  <div>{{ userStore.name }},{{ userStore.age }},{{ userStore.level }},{{ userStore.home }},{{ userStore }}</div>

  

  <div style="background-color: aqua;margin-top: 20px;">getters</div>
  <!-- 无需counterStore.getters.doubleCount -->
  <div>访问getters的dobuleCount:{{ counterStore.doubleCount }}</div>
  <div>访问getters的doubleCountAddone:{{ counterStore.doubleCountAddone }}</div>
  <div>访问getters的getFriendById:{{ counterStore.getFriendById(111) }}</div>
  <div>访问getters的showMessage:{{ counterStore.showMessage }}</div>
</template>

<script setup>
import { isProxy, isReactive, toRefs, isRef } from 'vue'
// pinia使用步骤4：引入我们定义的业务store,其实是个函数
import userCounter from '@/stores/counter'
import { storeToRefs } from 'pinia';
const counterStore = userCounter()//返回store,counterStore是reactive类型的响应式对象

//是不是reactive类型：isProxy:true,isReactive:true,isRef:false
console.log(`是不是reactive类型：isProxy:${isProxy(counterStore)},isReactive:${isReactive(counterStore)},isRef:${isRef(counterStore)}`)

// pinia使用步骤6：结构出store里的state里的某个数据
//因为counterStore是reactive类型的响应式数据，所以noResponseCount不是响应式的
const { count: noResponseCount } = counterStore//noResponseCount不是响应式的
const { count: rCount } = toRefs(counterStore)
const { count: srCount } = storeToRefs(counterStore)//pinia提供的专门用来把reactive数据转为ref类型的响应式数据，与toRefs类似

function updateCount() {
  counterStore.count++
}




// -----------------------------------------------------------------------------------------




import userStoreBuilder from '@/stores/user';
const userStore = userStoreBuilder()

//参考：subscribe_state.jpeg
//https://pinia.vuejs.org/zh/core-concepts/state.html#state
//当state发生变化时，触发监听
userStore.$subscribe((mutation, state) => {
  console.log("监听subscribe：", mutation, state)
})
function doPatch() {
  //因为Vue 的响应系统是在初始化组件状态时跟踪对象的属性，而后续动态添加的属性不会自动变为响应式的，因此这个home是新添加的，无法被响应式系统跟踪到，这也是为什么上面的{{ userStore.home }},{{ userStore }}都没有显示出home
  userStore.$patch({
    age: 12,
    level: 99,
    home: '西航港'
  })
}
function doState() {
  //因为Vue 的响应系统是在初始化组件状态时跟踪对象的属性，而后续动态添加的属性不会自动变为响应式的，因此这个home是新添加的，无法被响应式系统跟踪到，这也是为什么上面的{{ userStore.home }},{{ userStore }}都没有显示出home
  //https://pinia.vuejs.org/zh/core-concepts/state.html#state
  //注意这里的$state是赋值一个对象给它，且实际上state并不会被赋值的对象覆盖，而是如果这个home没有，只是给state添加一个新的状态叫home，如果这个home本来已经在state初始时就存在，而是更新这个home状态且是响应式的
  userStore.$state = {
    home: '成都'
  }
}

function doReset(){
  userStore.$reset()
}

</script>

<style scoped></style>
