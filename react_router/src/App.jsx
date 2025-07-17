import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomeRecommend from "./pages/HomeRecommend"
import HomeRanking from "./pages/HomeRanking"
import HomeSongMenu from './pages/HomeSongMenu'
import About from "./pages/About"
import Login from "./pages/Login"
// import Category from "./pages/Category"
// import Order from "./pages/Order"
import Detail from './pages/Detail'
import User from './pages/User'
import "./style.css"
import NotFound from './pages/NotFound'

export class App extends PureComponent {

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <span>header</span>
          <div className='nav'>
            {/* react路由使用步骤3-2： 
              1：某个NavLink被选中时，会被添加一个active的className,我们可以给这个.active添加一些样式，例如react_router\src\style.css中就添加了
              */}
            {/* 
            2：某个NavLink被激活时，NavLink的style属性的函数会回调，参数有isActive属性,激活时为true，否则为false
            <NavLink to="/home" style={({isActive}) => ({color: isActive ? "red": ""})}>首页</NavLink>
            <NavLink to="/about" style={({isActive}) => ({color:  isActive ? "red": ""})}>关于</NavLink> */}

            {/* 
            3：把NavLink激活时默认的类名修改为任意别的名字：
            <NavLink to="/home" className={({isActive}) => isActive?"link-active":""}>首页</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive?"link-active":""}>关于</NavLink> */}

            {/* react路由使用步骤3-1：Link用于路由的跳转，最终被渲染为a标签，to属性指定的path会与Routes中的path匹配，匹配上了就跳转
              Link的属性有replace:Boolean,state:any,to:To,reloadDocument:Boolean。
              Link 与 NavLink 的区别是：NavLink可以设置样式，Link不能设置样式
            */}
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Link to="/login">登录</Link>

            {/* 分类和订单是为了演示代码跳转路由，看“App函数组件.jsx”里的“react路由使用步骤7函数式组件代码跳转路由使用hook函数useNavigate” */}
            <button>分类</button>
            <span>订单</span>
            {/* react路由使用步骤8':查询传参-1：在路由跳转处(无论是Link还是代码跳转)，拼上查询参数 */}
            <Link to="/user?name=why&age=18">用户</Link>
          </div>
          <hr />
        </div>
        <div className='content'>
          {/* react路由使用步骤4:Routes(Router5.x是Switch组件)包裹所有的路由，其中某一个路由匹配上了就跳转到这个路由，比如点击上面的首页，就匹配上了path='/home'
          Route用于路径和组件的匹配映射，path属性用于设置匹配的路径，element(Router5.x用component属性)属性用于设置匹配的路径对应的组件
          */}
          <Routes>
            {/* 默认跳转到Home,通过重定向实现 */}
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>}>
              {/* 路由跳转到Home后，Home内的二级路由默认跳转到HomeRecommend，通过重定向实现 */}
              <Route path='/home' element={<Navigate to="/home/recommend"/>}/>
              <Route path='/home/recommend' element={<HomeRecommend/>}/>
              <Route path='/home/ranking' element={<HomeRanking/>}/>
              <Route path='/home/songmenu' element={<HomeSongMenu/>}/>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/category' element={<Category/>}/>
            <Route path='/order' element={<Order/>}/> */}
            {/* react路由使用步骤8':id'传参-1:在路由Route的path拼上:id,:xxx等 */}
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/user' element={<User/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <div className='footer'>
          <hr />
          Footer
        </div>
      </div>
    )
  }
}

export default App