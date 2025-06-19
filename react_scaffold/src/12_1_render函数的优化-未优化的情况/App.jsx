import React, { Component } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

/**
 * 这个课程为了引出PureComponent和函数式组件的memo
 */
export class App extends Component {
  constructor() {
    super()

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  /**
   * 
   * 频繁的调用render函数会导致性能问题，因此我们可以通过类组件生命周期的shouldComponentUpdate来判断有没有必要触发render函数更新，从而大大降低render函数的调用频率。
   * shouldComponentUpdate有两个参数：
   * 1. nextProps: 组件即将接收到的新的props
   * 2. newState: 组件即将接收到的新的state
   * 
   * 可跟上次的props和state进行对比，判断是否需要更新组件。
   * 
   * 但是这样对程序员来说，太麻烦了，因此React提供了一个优化的组件：PureComponent。
   * 而函数式组件没有生命周期回调函数更没有shouldComponentUpdate方法，因此React提供了一个优化的函数式组件：memo。
   * 
   * 
   */

  shouldComponentUpdate(nextProps, newState) {
    // App进行性能优化的点
    if (this.state.message !== newState.message || this.state.counter !== newState.counter) {
      return true
    }
    return false
  }

  changeText() {
    this.setState({ message: "你好啊,李银河!" })
    // this.setState({ message: "Hello World" })
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    console.log("App render")
    const { message, counter } = this.state

    return (
      <div>
        <h2>App-{message}-{counter}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <button onClick={e => this.increment()}>counter+1</button>
        <Home message={message}/>
        <Recommend counter={counter}/>
        <Profile message={message}/>
      </div>
    )
  }
}

export default App
