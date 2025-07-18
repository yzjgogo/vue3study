// import { StrictMode } from "react"
import ReactDOM from 'react-dom/client'
import App from './App'

/**
 回忆提示：
 App.jsx、App函数组件-Routes路由.jsx、App类组件.jsx的区别
 最开始是用的App类组件.jsx，这是个类组件，但是讲到‘订单’、‘分类’的代码跳转路由时，发现类组件无法使用useNavigate，所以把‘App类组件.jsx’改造成了‘App函数组件-Routes路由.jsx’这样就可以使用useNavigate了，‘App类组件.jsx’作为备份放到那里。
 
 ‘App函数组件-Routes路由.jsx’主要讲了通过Routes组件配置路由的方式，回忆的时候要把‘App函数组件-Routes路由.jsx’改成‘App.jsx’进行回忆

 后来讲到配置路由的时候，又把‘App函数组件-Routes路由.jsx’备份起来了，用的现在的App.jsx

 以后回忆的时候还是以‘App函数组件-Routes路由.jsx’为主
  
 */

//react路由使用步骤1：npm install react-router-dom
//BrowserRouter：是history模式的路由
//HashRouter：是hash模式的路由
//这里我们以HashRouter为例
// import { BrowserRouter,HashRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { Suspense } from "react"
const root = ReactDOM.createRoot(document.querySelector('#root'))
////react路由使用步骤2：用HashRouter包裹App组件
root.render(
  <HashRouter>
    {/* react路由使用步骤9路由配置4：因为在E:\web\vue3\vue3study\react_router\src\router\index.js中About和Login使用了懒加载，所以这里用Suspense:
    https://blog.csdn.net/weixin_40629244/article/details/148502371
    */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <App />
    </Suspense>
  </HashRouter>
)
