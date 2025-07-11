/**
 * redux代码优化:
 * 1：actionCreators.js文件专门用来生成action对象
 * 2：constants.js文件专门用来定义action的type常量，这样所有使用type的地方都可以使用这个常量，避免手动输入错误
 * 3：reducer.js文件专门用来处理action，更新store中的数据
 * 4:store/index.js文件专门用来创建store对象
 */

const store = require("./store")
const { addNumberAction, changeNameAction } = require("./store/actionCreators")

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据的变化:", store.getState())
})

store.dispatch(changeNameAction("kobe"))
store.dispatch(changeNameAction("lilei"))
store.dispatch(changeNameAction("james"))

store.dispatch(addNumberAction(10))
store.dispatch(addNumberAction(20))
store.dispatch(addNumberAction(30))
store.dispatch(addNumberAction(100))

