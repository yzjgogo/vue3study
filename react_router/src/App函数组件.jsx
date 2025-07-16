import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes,useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import About from './pages/About'
import Login from './pages/Login'
import Category from "./pages/Category"
import Order from "./pages/Order"
import './style.css'
import NotFound from './pages/NotFound'

export function App(props) {
  /*
  react路由使用步骤7函数式组件代码跳转路由使用hook函数useNavigate-2:
  useNavigate从'react-router-dom'中导入；
  useNavigate必须在函数式组件中使用，因此这个App函数组件.jsx是我把类组件App.jsx复制过来改造成的函数式组件，就是为了使用useNavigate
  useNavigate()必须放在函数式组件的顶层
  */ 
  const navigate = useNavigate()
  
  function navigateTo(path) {
    // const navigate = useNavigate() //useNavigate()必须放在函数式组件的顶层,放这里会报错

    //react路由使用步骤7函数式组件代码跳转路由使用hook函数useNavigate-3:跳转到目标路由
    navigate(path)
  }
  return (
    <div className="app">
      <div className="header">
        <span>header</span>
        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>
          {/* react路由使用步骤7函数式组件代码跳转路由使用hook函数useNavigate-1 */}
          <button onClick={e => navigateTo("/category")}>分类</button>
          <span onClick={e => navigateTo("/order")}>订单</span>
        </div>
        <hr />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path='/category' element={<Category/>}/>
            <Route path='/order' element={<Order/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
  )
}

export default App
