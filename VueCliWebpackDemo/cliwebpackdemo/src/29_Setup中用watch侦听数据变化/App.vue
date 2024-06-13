<template>
  <div>AppContent</div>
  <button @click="message = '你好啊,李银河!'">修改message</button>
  <button @click="info.friend.name = 'james'">修改info</button>
</template>

<script>
import { reactive, ref, watch } from 'vue'

/**
 * 参考选项式API的用法：
 * 10_语法-watch监听1-返回代理对象.html
 * 10_语法-watch监听2-在created中使用$watch监听.html
 */
export default {
  /**
   * 组合式API的setup中使用watch
   */
  setup() {
    // 1.定义数据
    const message = ref("Hello World")
    const info = reactive({
      name: "why",
      age: 18,
      friend: {
        name: "kobe"
      }
    })

    // 2.侦听数据的变化
    //格式watch(要侦听的数据,回调函数，选项(immediate,deep))
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    //发现没有使用deep:true时，修改子对象的friend的name属性页监听到了
    watch(info, (newValue, oldValue) => {
      console.log(newValue, oldValue)//此时修改的是info的属性，info指向的对象的内存地址不变,因此二者的输出完全一样
      console.log(newValue === oldValue)//此时修改的是info的属性，info指向的对象的内存地址不变，因此为true
    }, {
      deep: true
    })

    // 3.监听reactive数据变化后, 获取普通对象，上面的监听获取的都是代理对象，这里是获取普通对象，注意只是获取普通的非代理对象，并不是原始对象，即对象地址并不一样
    // console.log("展开",{...info})只展开了直接属性，没展开子对象即friend没展开
    watch(() => ({ ...info }), (newValue, oldValue) => {
      console.log(newValue, oldValue, info === newValue, info === oldValue, newValue === oldValue)//后面3个都是false
    }, {
      immediate: true,
      deep: true
    })

    return {
      message,
      info
    }
  }
}
</script>

<style scoped></style>

