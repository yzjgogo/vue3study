<template>
  <div>
    <!-- 使用以前的computed -->
    <div>{{ myage }}</div>

  <!-- 使用setup的computed -->
  <h2>{{ scoreLevel }}</h2>


  <!-- setup的computed既有getter,又有setter -->
    <h2>{{ fullname }}</h2>
  <button @click="setFullname">设置fullname</button>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'

  export default {
    //以前的computed用法
    computed:{
      myage(){
        return 14
      }
    },

    setup() {
       /**
        setup的computed和以前的一样也是一个有getter和setter方法的对象
        只是一般我们只需要getter方法，所以这里我们给computed传入一个函数即可，这个函数就是getter,有return的
        */
       const score = ref(89)
      const scoreLevel = computed(() => {
        return score.value >= 60 ? "及格": "不及格"
      })


      /**
       完整的computed：既有getter又有setter
       */
      const names = reactive({
        firstName: "kobe",
        lastName: "bryant"
      })
      //只有getter的
      // const fullname = computed(() => {
      //   return names.firstName + " " + names.lastName
      // })

      //既有getter又有setter的,其中fullname同样接收getter的返回值
      const fullname = computed({
        set: function(newValue) {
          const tempNames = newValue.split(" ")
          names.firstName = tempNames[0]
          names.lastName = tempNames[1]
        },
        //这个get就对应fullname的值
        get: function() {
          return names.firstName + " " + names.lastName
        }
      })

      //会看到输出的是ComputedRefImpl类型的对象，可知computed计算属性的getter返回的是一个ref类型的响应式变量
      console.log(fullname)
      function setFullname() {
        //fullname = "coder why" 不可以，fullname是一个ref类型，因此需要fullname.value = ''才会走对应的setter
        fullname.value = "coder why"
        console.log(names)
      }


     

      return {
        names,
        scoreLevel,
        fullname,
        setFullname
      }
    }
  }
</script>

<style scoped>
</style>

