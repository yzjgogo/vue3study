import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
/**

react-redux使用步骤1：
导入store和react-redux中的Provider
然后如下用Provider包裹App组件，并传入store属性
 */
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
