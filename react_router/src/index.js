// import { StrictMode } from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
//react路由使用步骤1：npm install react-router-dom
//BrowserRouter：是history模式的路由
//HashRouter：是hash模式的路由
//这里我们以HashRouter为例
// import { BrowserRouter,HashRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.querySelector('#root'))
////react路由使用步骤2：用HashRouter包裹App组件
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
