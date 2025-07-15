import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'

import counterReducer from './counter'
import homeReducer from './home'
import userReducer from './user'

/**
  这个项目(react_redux_modules)相比与(react_redux)项目，没有引入任何别的依赖
  还是：
    "redux": "^5.0.1",
    "react-redux": "^9.2.0",
    "redux-thunk": "^3.1.0",

  这个项目主要是在(react_redux)的基础上，改造为多module的形式，即根据不同的业务模块定义业务store模块
  这里定义了store/counter, store/home, store/user三个模块
  跟(react_redux)项目没有分模块一样，每一个模块都有自己的actionCreators.js、constants.js、index.js、reducer.js 4个文件,其中index.js纯粹是为了导出当前模块的actionCreators和reducer。

  这样定义了多个模块，就会有多个reducer，可以通过combineReducers将多个reducer合并为一个reducer，其中combineReducers来自"redux"自带的

  最终整体的store的state结构如下：
{
  counter:{counter: 0},
  home:{banners: [], recommends: []},
  user:{userInfo: { nickname: "刘军老师", level: 100 }}
}  

搜索：“模块数据访问步骤”
 */

// 将两个reducer合并在一起
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
})

// combineReducers实现原理(了解)
// function reducer(state = {}, action) {
//   // 返回一个对象, store的state
//   return {
//     counter: counterReducer(state.counter, action),
//     home: homeReducer(state.home, action),
//     user: userReducer(state.user, action)
//   }
// }

// redux-devtools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
