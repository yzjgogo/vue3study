<template>

<!-- 

  非父子间通信方式：provide和inject
  哪个组件想往外暴露数据，就用provide暴露，不关心谁想使用；
  哪个组件想使用其他组件暴露的数据，就用inject，不关心是谁暴露的数据；

  provide和inject只适用于祖孙组件，没有关联的组件之间不可以，留意下；

 -->
  <div class="app">
    <home></home>
    <h2>App: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import Home from './Home.vue'

  export default {
    components: {
      Home
    },
    created() {

    },
    data() {
      return {
        message: "我是原来的message"
      }
    },
    computed:{
        newMessage(){
          return this.message
        }
    },
    methods:{
      changeMessage(){
        this.message = '修改后的message'
      }
    },
    //对象的形式，一般不用，因为如果你在对象里用this.message访问data里的数据，这个this指向的是当前这个对象而不是当前vue组件
    // provide: {
    //   name:'郭德纲',
    //   age:28,
    //   dog:{
    //     color:'yellow'
    //   }
    // }

    // provide一般都是写成函数，这样this会被映射到当前vue实例
    provide() {
      return {
        name: "why",
        age: 18,
        dog:{
          color:'red'
        },
        // message: this.message //这样message改变后，provide里的message并没有同时改变

        // message: this.newMessage //我以为通过计算属性当message改变后，provide里的message能同时改变改变，结果并没有
        // message: this.newMessage

        //这样可以让provide里的message实时跟着改变，computed来自上面的import { computed } from 'vue'
        message: computed(() => this.message)
      }
    }
  }
</script>

<style scoped>
</style>

