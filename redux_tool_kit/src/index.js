import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { StoreContext } from './hoc'

const root = ReactDOM.createRoot(document.getElementById('root'))
// connect函数实现步骤5：使用StoreContext提供全局的store
root.render(
  <Provider store={store}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </Provider>
)
