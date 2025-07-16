import { useState } from "react"
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"

/*
react路由使用步骤7类组件代码跳转路由使用hook函数useNavigate-1:
因为在类组件中不能使用useNavigate，所以需要把类组件包装成一个高阶组件，在这个高阶组件中我们可以把useNavigate()的返回值传给给类组件，这样就可以在类组件中使用navigate(path)跳转路由了
*/
function withRouter(WrapperComponent) {
  return function(props) {
    //react路由使用步骤7类组件代码跳转路由使用hook函数useNavigate-2:此时已经是函数式组件所以可以调用userNavigate()
    // 1.导航
    const navigate = useNavigate()

    // 2.动态路由的参数: /detail/:id
    const params = useParams()

    // 3.查询字符串的参数: /user?name=why&age=18
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    //react路由使用步骤7类组件代码跳转路由使用hook函数useNavigate-2:把userNavigate()的返回值传递给被包裹的类组件，则这个类组件就可以使用navigate(path)跳转路由了
    const router = { navigate, params, location, query }

    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter
