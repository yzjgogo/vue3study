<template>
  <div>
    <!-- 
      当ref类型的数据被非reactive的普通对象包裹时，此时info是非响应式的对象，但是info.counter是，因为counter被ref包裹，此时在template中读取info.counter仍然是自动解包，但是在template中写入info.counter则需要手动解包，例如info.counter.value++；这算不算官方的一个bug呢？
     -->
    <div style="background-color:red;color:white">1：当ref类型的数据被非响应式的普通对象包裹时</div>
    <div>{{ info.counter }}</div>
    <button @click="changeInfoCounter">修改info的counter-1</button>
    <button @click="info.counter.value++">修改info的counter-2</button>


    
    <!-- 
      当ref类型的数据被reactive的响应式对象包裹时，此时rtInfo是响应式的对象，rtInfo.counter也是，因为counter被ref包裹，此时在template中读取rtInfo.counter仍然是自动解包，在template中写入rtInfo.counter也是自动解包，无需手动.value解包，例如rtInfo.counter++；
     -->
    <div style="background-color:red;color:white">2：当ref类型的数据被reactive的响应式对象包裹时</div>
    <div>{{ rtInfo.counter }}</div>
    <button @click="changeRtInfoCounter">修改rtInfo的counter-1</button>
    <button @click="rtInfo.counter++">修改rtInfo的counter-2</button>


    
<!-- 
  当ref类型的数据被ref的响应式对象包裹时，此时refinfo是响应式的对象，refinfo.counter也是，因为counter被ref包裹，此时在template中读取refinfo.counter仍然是自动解包，在template中写入refinfo.counter也是自动解包，无需手动.value解包，例如refinfo.counter++；
 -->
    <div style="background-color:red;color:white">4：当ref类型的数据被ref的响应式对象包裹时</div>
    <div>{{ refinfo.counter }}</div>
    <button @click="changeRefInfoCounter">修改rtInfo的counter-1</button>
    <button @click="refinfo.counter++">修改rtInfo的counter-2</button>



  </div>


  
</template>

<script>
import { ref, reactive } from 'vue'

/**
  
 
 */
export default {
  setup() {
    let counter = ref(100)


    //定义一个非响应式的info
    const info = {
      counter
    }
    function changeInfoCounter() {
      info.counter.value++
    }



    //定义一个响应式的rtInfo
    const rtInfo = reactive({
      counter
    })
    function changeRtInfoCounter() {
      rtInfo.counter++ //无需rtInfo.counter.value
    }


    const refinfo = ref({
      counter
    })
    function changeRefInfoCounter(){
      refinfo.value.counter++ //无需rtInfo.counter.value
    }

    return { info, changeInfoCounter ,rtInfo ,changeRtInfoCounter,refinfo,changeRefInfoCounter}
  }
}
</script>

<style scoped></style>

