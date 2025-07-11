//1：当前项目是node项目，因此用require导入redux的createStore函数
const { createStore } = require("redux")

// 初始化的数据
const initialState = {
  name: "why",
  counter: 100
}


// 3:reducer函数是纯函数;返回值就是最新的state数据，其实reducer函数有两个参数，第一个参数是旧的state数据，第二个参数是action对象。reducer(state,action) { return newState }，reducer函数可以任意命名
function reducer() {    
  return initialState
}


//2:createStore函数接收一个reducer函数作为参数
const store = createStore(reducer)

// 4:node的方式导出store对象
module.exports = store

// 5:在‘01_使用store中的数据.js’中导入并使用store对象，可以调用store.getState()方法获取state数据

