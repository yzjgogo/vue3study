<template>
  <div>ShowInfo: {{ name }}-{{ age }}-{{ height }} </div>

  <!-- 当通过选项式API inject: ["name", "age"]数据时，需要手动解包.value -->
  <!-- <div>ShowInfo: {{ name.value }}-{{ age }}-{{ height }} </div> -->
</template>

<script>
  import { inject } from 'vue'

  /**
    步骤二：
    在要使用provide提供的数据的组件里通过inject使用数据
   */
  export default {
    //a：如果通过选项式API，使用ref或reactive类型的数据，则在template中药手动的解包，即name.value来使用
    // inject的options api注入, 那么依然需要手动来解包
    // inject: ["name", "age"],
    setup() {
      //b：如果通过组合式API，即在setup()中通过inject来使用，则inject("name")得到的name仍然是ref类型，在template中无需手动解包
      const name = inject("name")
      const age = inject("age")
      //c：如果通过inject获取一个provide不一定提供了的数据，可以传入一个默认值
      const height = inject("height", 1.88)//此处provide并没有提供height，则使用默认值1.88

      return {
        name,
        age,
        height
      }
    }
  }
</script>

<style scoped>
</style>

