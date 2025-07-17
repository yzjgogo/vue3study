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
    //react路由使用步骤8':id'传参-3：因为useParams()是一个hook函数，所以只能在函数式组件中使用，所以需要把类组件包装成一个高阶组件,本传参案例中Detail这个类组件想在其内部拿到参数值，需要用withRouter高阶组件包装，之后就可以在其内部拿到params
    const params = useParams()

    // 3.查询字符串的参数: /user?name=why&age=18
    //react路由使用步骤8':查询传参-2:在函数式组件中可以通过useSearchParams()获取到查询参数,User组件想拿到查询参数需要通过withRouter高阶组件包装，然后传递给User组件。
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)

    //react路由使用步骤7类组件代码跳转路由使用hook函数useNavigate-2:把userNavigate()的返回值传递给被包裹的类组件，则这个类组件就可以使用navigate(path)跳转路由了
    const router = { navigate, params, location, query }

    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter
