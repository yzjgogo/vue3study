const store = require("./store")
//订阅步骤1：调用store.subscribe方法，传入一个回调函数,当store中的数据发生变化时会调用这个回调函数;store.subscribe方法返回一个取消订阅的函数,可以在需要的时候取消订阅
const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState())
})


//订阅步骤2：当调用stroe.dispatch方法修改store中的state数据时，会触发步骤1的订阅监听
store.dispatch({ type: "change_name", name: "kobe" })
store.dispatch({ type: "change_name", name: "lilei" })

//订阅步骤3：取消订阅后，无法再监听到store中的数据变化
unsubscribe()

//订阅步骤4：因为上面已经取消订阅了，以后再修改store中的数据就不会触发订阅监听了
store.dispatch({ type: "add_number", num: 10 })
store.dispatch({ type: "add_number", num: 20 })
store.dispatch({ type: "add_number", num: 30 })
store.dispatch({ type: "add_number", num: 100 })

