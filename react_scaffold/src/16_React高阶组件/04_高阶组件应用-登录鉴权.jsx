import React, { PureComponent } from 'react'
import Cart from './pages/Cart'

/**
  整个过程是这样的：
  对Cart组件通过loginAuth增强，如果判断已经登录则在loginAuth中返回原始的Cart组件，
  如果没有登录则返回一个提示信息。

  这样有很好的登录判断的扩展性，别的组件也可以通过loginAuth进行类似的增强
 */
export class App extends PureComponent {
  constructor() {
    super()

    // this.state = {
    //   isLogin: false
    // }
  }

  loginClick() {
    localStorage.setItem("token", "coderwhy")

    // this.setState({ isLogin: true })
    //强制更新，类似vue中的$forceUpdate
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        App
        <button onClick={e => this.loginClick()}>登录</button>
        <Cart/>
      </div>
    )
  }
}

export default App