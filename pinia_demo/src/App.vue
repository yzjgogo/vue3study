<template>
  <!-- pinia使用步骤5：使用store里的数据，无需.state -->
  <div>响应式:counterStore.count：{{ counterStore.count }}</div>
  <div>响应式:toRefs(counterStore):{{ rCount }}</div>
  <div>响应式:storeToRefs(counterStore):{{ srCount }}</div>
  <div>非响应式:{{ noResponseCount }}</div>
  <button @click="updateCount">改变count</button>
</template>

<script setup>
import { isProxy, isReactive, toRefs, isRef } from 'vue'
// pinia使用步骤4：引入我们定义的业务store,其实是个函数
import userCounter from '@/stores/counter'
import { storeToRefs } from 'pinia';
const counterStore = userCounter()//返回store,counterStore是reactive类型的响应式对象

//是不是reactive类型：isProxy:true,isReactive:true,isRef:false
console.log(`是不是reactive类型：isProxy:${isProxy(counterStore)},isReactive:${isReactive(counterStore)},isRef:${isRef(counterStore)}`)

//因为counterStore是reactive类型的响应式数据，所以noResponseCount不是响应式的
const {count:noResponseCount} = counterStore
const {count:rCount} = toRefs(counterStore)
const {count:srCount} = storeToRefs(counterStore)//pinia提供的专门用来把reactive数据转为ref类型的响应式数据，与toRefs类似

function updateCount(){
  counterStore.count++
}

</script>

<style scoped></style>
