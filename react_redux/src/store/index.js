import { createStore, applyMiddleware, compose } from 'redux'
// redux-thunk使用步骤2：从redux-thunk中导入thunk，从redux中导入applyMiddleware
import { thunk } from 'redux-thunk'
import reducer from './reducer'

// redux-thunk使用步骤3：使用thunk这个中间件
// const store = createStore(reducer, applyMiddleware(thunk))

/*
    react-devtools和redux-devtools-extension的使用
    1:在chrome的扩展程序里搜索并安装'React Developer Tools'和'Redux DevTools'
        github地址：
        https://github.com/facebook/react-devtools
        https://github.com/zalmoxisus/redux-devtools-extension
    2：Chrome安装好Redux DevTools后，F12进入Redux DevTools界面，默认看不到任何数据，为了保护数据安全，我们可以在此处如下这样打开Redux DevTools，在https://github.com/zalmoxisus/redux-devtools-extension中可以找到这个解决方案

    3：开启redux-devtools不要在package.json中安装任何依赖
*/ 
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
