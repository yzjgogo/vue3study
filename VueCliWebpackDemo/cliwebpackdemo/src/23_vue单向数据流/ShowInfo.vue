<template>
  <div>
    <h2>ShowInfo: {{ info }}</h2>
    <!-- 代码没有错误, 但是违背规范(单项数据流)，不建议在子组件内部修改父组件的数据 -->
    <button @click="info.name = '姚明'">在子组件内部修改父组件的数据</button>
    <!-- 正确的做法: 符合单项数据流-->
    <button @click="showInfobtnClick">向父组件发送事件修改数据</button>
    <hr>
    <!-- 使用readonly的数据 -->
    <h2>ShowInfo: {{ roInfo }}</h2>
    <!-- 代码就会无效(报警告) -->
    <button @click="roInfo.name = 'james'">尝试修改readonly修饰的数据-结果无法修改</button>
    <!-- 正确的做法 -->
    <button @click="roInfoBtnClick">仍然可以通过发送事件通知父组件修改被readonly修改的原始数据，注意这里是去修改原始的info数据，而不是修改被info被readonly修饰后的roInfo</button>
  </div>
</template>

<script>
  export default {
    props: {
      // reactive数据
      info: {
        type: Object,
        default: () => ({})
      },
      // readonly数据，数据无法被修改，一旦被修改，console会输出警告，阻止你修改
      roInfo: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ["changeInfoName", "changeRoInfoName"],
    setup(props, context) {
      function showInfobtnClick() {
        context.emit("changeInfoName", "kobe")
      }

      function roInfoBtnClick() {
        context.emit("changeRoInfoName", "james")
      }

      return {
        showInfobtnClick,
        roInfoBtnClick
      }
    }
  }
</script>

<style scoped>
</style>

