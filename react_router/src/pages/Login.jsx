import React, { PureComponent } from 'react'
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: false
    }
  }
  
  login() {
    this.setState({ isLogin: true })
  }

  render() {
    const { isLogin } = this.state

    return (
      <div>
        <h1>Login Page</h1>
        {/* react路由使用步骤5：重定向
          react中可以通过Navigate组件实现重定向，Navigate组件的to属性指定重定向的路径，这样，<Navigate to="/home"/>一旦出现(渲染)，立刻会重定向到对应页面
        */}
        {!isLogin ? <button onClick={e => this.login()}>登录</button>: <Navigate to="/home"/>}
      </div>
    )
  }
}

export default Login