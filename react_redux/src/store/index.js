import { createStore, applyMiddleware } from "redux"
// redux-thunk使用步骤2：从redux-thunk中导入thunk，从redux中导入applyMiddleware
import { thunk } from "redux-thunk"
import reducer from "./reducer"

// redux-thunk使用步骤3：使用thunk这个中间件
const store = createStore(reducer, applyMiddleware(thunk))

export default store
