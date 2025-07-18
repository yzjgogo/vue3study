import Home from '../pages/Home'
import HomeRecommend from "../pages/HomeRecommend"
import HomeRanking from "../pages/HomeRanking"
import HomeSongMenu from '../pages/HomeSongMenu'
import Category from "../pages/Category"
import Order from "../pages/Order"
import NotFound from '../pages/NotFound'
import Detail from '../pages/Detail'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'
import React from 'react'
// import About from "../pages/About"
// import Login from "../pages/Login"
////react路由使用步骤9路由配置3：也可以使用懒加载来加载路由，这里的import是webpack的特性。和vue一样，懒加载也是，在你'npm run build'打包时，打出的包里，这个组件是一个单独的js文件，在使用时才加载。可以配合Suspense使用，Suspense用于加载过程中的等待过度画面
const About = React.lazy(() => import("../pages/About"))
const Login = React.lazy(() => import("../pages/Login"))
/*
  react路由使用步骤9路由配置1：
  react也支持像vue一样的路由配置方式，
  在react的router5.x中，需要引入依赖react-router-config实现路由配置
  现在在react-router-dom中提供了useRoutes，直接就能实现路由配置
*/
//react路由使用步骤9路由配置2：定义数组配置所有的路由，其中的path就是‘App函数组件-Routes路由.jsx’中Route的path属性，element就是Route的element属性
const routes = [
  {
    path: "/",
    element: <Navigate to="/home"/>
  },
  {
    path: "/home",
    element: <Home/>,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend"/>
      },
      {
        path: "/home/recommend",
        element: <HomeRecommend/>
      },
      {
        path: "/home/ranking",
        element: <HomeRanking/>
      },
      {
        path: "/home/songmenu",
        element: <HomeSongMenu/>
      }
    ]
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/category",
    element: <Category/>
  },
  {
    path: "/order",
    element: <Order/>
  },
  {
    path: "/detail/:id",
    element: <Detail/>
  },
  {
    path: "/user",
    element: <User/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
]


export default routes
