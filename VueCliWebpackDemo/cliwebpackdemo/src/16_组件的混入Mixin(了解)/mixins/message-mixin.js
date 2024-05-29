// minxin使用步骤1：定义需要mixin的对象，其实就是组件的export的那个对象；
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  created() {
    console.log("message:", this.message)
  }
}