const store = require("./store")

console.log(store.getState())


// 修改步骤1：调用store.dispatch方法，传入一个action对象
// action对象是一个普通的js对象，必须有type属性，type属性表示本次更新的类型
// 可以有其他属性，表示本次更新的其他数据   
const nameAction = { type: "change_name", name: "kobe" }
store.dispatch(nameAction)

// 修改步骤3：修改后可以立刻获取到最新的state数据
console.log(store.getState())

const nameAction2 = { type: "change_name", name: "lilei" }
store.dispatch(nameAction2)
console.log(store.getState())

// 修改counter
const counterAction = { type: "add_number", num: 10 }
store.dispatch(counterAction)
console.log(store.getState())

