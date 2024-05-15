<template>
  <div class="app">
    <button ref="btn" @click="getEL">获取只有一个根的组件的$el</button>
    <button ref="btn" @click="getMultiEL">获取有多个根的组件的$el</button>

    <banner ref="banner"/>
    <Myel ref="myel"></Myel>
  </div>
</template>

<script>
  import Banner from "./Banner.vue"
  import Myel from './Myel.vue'

  export default {
    components: {
      Banner,
      Myel
    },  
    data() {
      return {
      }
    },
    /**
     * 这里只介绍和vue2不同的地方
     */
    methods: {
      /**
       * 当一个组件(Banner)只有一个根时，$el获取到的就是这个根元素
       */
      getEL(){
        console.log(this.$refs.banner.$el)
      },
      /**
       * 参考：组件多个根时的情况.jpg
       */
      getMultiEL(){
        console.log(this.$refs.myel.$el)
      },
      /**
       * 
        console.log(this.$parent) // 获取父组件
        console.log(this.$root) // 获取根组件 
        vue3中没有$children
       */
    }
  }
</script>

<style scoped>
</style>

