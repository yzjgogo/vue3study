import React, { PureComponent } from 'react'
import "./App.css"
import Home from './home/Home'
import Profile from './profile/Profile'
/**
 看Home.jsx中的注释：
 总结：这种css写法就是最原始的web前端css的写法，所有的样式都是全局的，无法只在当前组件内生效(类似Vue的scoped)，所以会导致样式冲突的问题。
 */
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是标题</h2>
        <p className='content'>我是内容, 哈哈哈哈</p>

        <Home/>
        <Profile/>
      </div>
    )
  }
}

export default App