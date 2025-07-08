import React, { PureComponent, StrictMode } from 'react'
// import { findDOMNode } from "react-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'
/**
  参考图片：严格模式.png
  看这个图就可以了

  严格模式下react会故意执行执行构造函数和生命周期两次，这是react故意的，让你发现执行多次时代码会不会有问题，例如设置监听，你设置了两次就有问题的

  这里对Home使用了严格模式，Profile没有使用严格模式。
 */
export class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}

export default App