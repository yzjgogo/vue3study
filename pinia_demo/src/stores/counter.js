// pinia使用步骤3：根据业务需要，比如有一个计时器的需求，我们要定义一个store用于维护数据
import { defineStore } from "pinia";
import userStoreBuilder from './user'
//defineStore返回的是一个函数，这也符合vue3的setup面向函数编程的思想，第一个参数可以理解为一个id，因为我们可以定义很多个store，第二个参数就是要维护的数据
const userCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ],
    banners: [],
    recommends: []
  }),

  // const userStore = userStoreBuilder()

  //getters里的方法参数默认就是state
  //getters类似vue组件的computed
  getters: {
    //getters基本使用
    doubleCount(state) {
      return state.count * 2
    },
    //getters里的方法内，可以直接通过this访问getters里的别的方法，这个this就是当前store，就是userCounter(),即this == userCounter(),跟外部使用counterStore一个道理
    doubleCountAddone() {
      return this.doubleCount + 1
    },

    //getters里的方法可以返回一个函数
    getFriendById(state) {
      return function (id) {
        for (let i = 0; i < state.friends.length; i++) {
          const friend = state.friends[i]
          if (friend.id === id) {
            return friend
          }
        }
      }
    },
    //getters里的方法，可以使用别的store里的数据
    showMessage(state) {
      const userStore = userStoreBuilder()
      return `name:${userStore.name} - count:${state.count}`
    }
  },

  //pinia的actions可以做异步请求，没有mutations
  actions: {
    //无参
    increment() {
      this.count++
    },
    //参数是调用处传过来的值，不是state
    incrementNum(num) {
      this.count += num
    },
    //异步请求，调用处可以用Promise接收请求完成回调
    async fetchHomeMultidata() {
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()

      this.banners = data.data.banner.list
      this.recommends = data.data.recommend.list
      // 不返回任何值，等价于下面两行
      // return undefined
      // return Promise.resolve(undefined)
    },
    //异步请求，调用处可以用Promise接收请求完成回调
    fetchHomeMultidata2() {
      return new Promise(async (resolve, reject) => {
        const res = await fetch("http://123.207.32.32:8000/home/multidata")
        const data = await res.json()
        this.banners = data.data.banner.list
        this.recommends = data.data.recommend.list
        resolve("bbb")
      })
    }
  }
})
//store有三个核心概念：state、getters、actions,等同于组件的data、computed、methods
//一旦store被实例化，你就可以直接在store上访问state、getters、actions中定义的任何属性
export default userCounter