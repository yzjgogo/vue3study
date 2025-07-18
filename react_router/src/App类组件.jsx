import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import About from './pages/About'
import Login from './pages/Login'
import Category from './pages/Category'
import Order from './pages/Order'
import './style.css'
import NotFound from './pages/NotFound'

export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录</Link>
            {/* <button onClick={e => navigateTo("/category")}>分类</button>
          <span onClick={e => navigateTo("/order")}>订单</span> */}
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
            <Route path="/category" element={<Category />} />
            <Route path="/order" element={<Order />} />
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
}

export default App
