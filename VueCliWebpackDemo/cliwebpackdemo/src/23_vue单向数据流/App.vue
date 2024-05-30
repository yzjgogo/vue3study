<template>
  <h2>App: {{ info }}</h2>
  <show-info :info="info" 
             :roInfo="roInfo" 
             @changeInfoName="changeInfoName"
             @changeRoInfoName="changeRoInfoName">
  </show-info>
</template>

<script>
  import { reactive, readonly } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  export default {
    components: {
      ShowInfo
    },
    setup() {
      const info = reactive({
        name: "why",
        age: 18,
        height: 1.88
      })

      function changeInfoName(payload) {
        info.name = payload
      }

      // 使用readOnly包裹info，readonly会返回info的只读代理，也就是它依然是一个proxy，只是这个proxy的set方法会被劫持，禁止你修改数据
      const roInfo = readonly(info)
      //info并不是readonly的，roInfo才是readonly的
      function changeRoInfoName(payload) {
        info.name = payload
      }

      return {
        info,
        changeInfoName,
        roInfo,
        changeRoInfoName
      }
    }
  }
</script>

<style scoped>
</style>

