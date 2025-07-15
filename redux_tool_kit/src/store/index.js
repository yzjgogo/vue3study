import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./features/counter"
import homeReducer from "./features/home"
/**
  @reduxjs/toolkit的主要作用是用于简化Redux(store)的创建和配置过程。

  至于对store的访问和修改，还是通过react-redux的connect函数，对store的state和dispatch进行映射，映射到组件的props中。

  因此使用 @reduxjs/toolkit需要安装： @reduxjs/toolkit 和 react-redux
  安装命令：npm install @reduxjs/toolkit react-redux

  注意：使用了@reduxjs/toolkit默认开启了redux-devtools-extension，因此不需要再手动配置。且也有了redux-thunk中间件。
  但如果需要使用redux-thunk中间件，则需要手动配置。

  搜索：“@reduxjs/toolkit使用步骤”

  @reduxjs/toolkit使用步骤1:npm install @reduxjs/toolkit react-redux
 */

  /**
    @reduxjs/toolkit使用步骤7:通过configureStore将多个模块的reducer函数合并到一个store中
   */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
})

export default store
