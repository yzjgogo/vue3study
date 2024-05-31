<template>
  <div>
    <!-- 以前的方式获取ref -->
    <button @click="useRef">以前的方式获取ref</button>


  

    <!-- 步骤3：在目标元素或组件上使用ref="titleRef" -->
  <h2 ref="titleRef">我是标题</h2>
  <button ref="btnRef">按钮</button>
  <show-info ref="showInfoRef"></show-info>

  <button @click="getElements">获取元素</button>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },
    methods:{
      /**
       以前使用ref的方式:
       1:在元素或组件上定义ref='titleRef'
       2:在代码中使用this.$refs引用
       */
      useRef(){
        console.log(this.$refs.titleRef)
      }
    },

    /**
      setup中使用ref的方式：
      与以前的方式相比：以前是在template中直接定义ref='titleRef'
      setup中则是需先在setup中定义好才能在组件中引用，注意，组件中引用时不需要:ref="titleRef"，即不需要冒号
     */
    setup() {
      //步骤1：在setup中定义ref,例如titleRef = ref()
      const titleRef = ref()
      const btnRef = ref()
      const showInfoRef = ref()

      //步骤4：从mounted的生命周期函数开始就可以通过之前定义的ref访问对应的元素或组件了
      //需要注意的是我们定义的ref是ref()包装后的响应式类型，因此需要.value才能访问到目标元素，参考：18_Setup_ref让基本数据类型做到响应式，21_Setup_ref让复杂数据类型做到响应式
      onMounted(() => {
        console.log(titleRef.value)
        console.log(btnRef.value)
        console.log(showInfoRef.value)
        showInfoRef.value.showInfoFoo()
      })

      function getElements() {
        console.log(titleRef.value)
      }

      //步骤2：将定义的titleRef从setup中return出去
      return {
        titleRef,
        btnRef,
        showInfoRef,
        getElements
      }
    }
  }
</script>

<style scoped>
</style>

