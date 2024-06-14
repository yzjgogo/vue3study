<template>
  <div>
    <div>{{ message }}</div>
    <button @click="changeMessage">修改message</button>
    <ShowInfo :name="'刘德华'" :age="18" @info-btn-click="infoBtnClick"
             ref="showInfoRef"></ShowInfo>
    <ShowInfo></ShowInfo>
  </div>
</template>

<!-- 
  看，语法糖1、语法糖2、语法糖3、语法糖4、语法糖5
 -->

<!-- 
  语法糖1：给script标签设置setup的attribute
  这样<script setup>中的代码就会被编译成之前学的setup()函数的内容
 -->
<script setup>
// 语法糖2：import引入的内容可直接被使用包括被template使用，即使import别的组件也无需通过components再去定义
import { ref,onMounted } from 'vue'
import ShowInfo from './ShowInfo'

// 语法糖3：变量和函数的声明也可以直接被template使用，无需像以前setup()那样需要return才能使用
const message = ref("hello word")
function changeMessage() {
  message.value = '你好世界'
}

function infoBtnClick(payload) {
  console.log("监听到showInfo内部的点击:", payload)
}

  const showInfoRef = ref()
  onMounted(() => {
    showInfoRef.value.foo()
  })

</script>

<!-- 
  原本的setup用法：
  props，components，emits不用写在setup里，跟vue2一样
-->
<!-- <script>
  export default {
    props:{

    },
    components: {
      
    },
    emits:{},
    emits:[],
    setup() {
      
    }
  }
</script> -->

<style scoped></style>

