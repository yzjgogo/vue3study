// pinia使用步骤3：根据业务需要，比如有一个计时器的需求，我们要定义一个store用于维护数据
import { defineStore } from "pinia";
//defineStore返回的是一个函数，这也符合vue3的setup面向函数编程的思想，第一个参数可以理解为一个id，因为我们可以定义很多个store，第二个参数就是要维护的数据
const userCounter = defineStore("counter", {
  state: () => ({
    count: 99
  })
})
//store有三个核心概念：state、getters、actions,等同于组件的data、computed、methods
//一旦store被实例化，你就可以直接在store上访问state、getters、actions中定义的任何属性
export default userCounter