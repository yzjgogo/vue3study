import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import "./style.css"
/**
  这个redux_tool_kit项目主要学习两个知识点
1：@reduxjs/toolkit的用法，具体看‘redux_tool_kit\src\store\index.js’中的注释
2：自己实现react-redux的connect函数
搜索“connect函数实现步骤”
 */
export class App extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className='pages'>
          <Home/>
          <Profile/>
          <About/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps)(App)
