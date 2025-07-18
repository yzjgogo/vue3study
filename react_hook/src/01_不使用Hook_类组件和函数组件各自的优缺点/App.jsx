import React, { PureComponent } from 'react'
/**
  这个案例用于对比类组件和函数式组件：
  1：类组件可以保存状态，因为类有对象实例的概念，每一个对象都有自己的state.
  2：类组件用起来臃肿麻烦，且因为要用到class的概念，很多开发者对类的概念并不是很理解

  2：函数式组件虽然用起来简答，但是无法保存状态、没有生命周期回调、每次函数式组件的重新渲染其实都是，这个函数的重新执行都是新的且独立的开始

  因此react官方提出了hook的概念，可以让开发者不再使用繁琐的类组件开发，而是用函数式组件开发同时通过hook的useXXX等，辅助函数式组件保存状态，这样就综合了类组件和函数式组件的优点。
 */
class HelloWord extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World"
    }
  }

  changeText() {
    this.setState({ message: "你好啊, 李银河!" })
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h2>内容: {message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }
}

function HelloWorld2(props) {
  // 函数式组件，因为就是js函数，每次渲染都是一个新的且完全独立的开始，不保留任何状态
  let message = "Hello World"

  // 函数式组件存在的最大的缺陷:
  // 1.组件不会被重新渲染: 修改message之后, 组件知道自己要重新进行渲染吗? 
  // 2.如果页面重新渲染: 函数会被重新执行, 第二次重新执行时, 会重新给message赋值为hello world
  // 3.类似于生命周期的回调函数: 也是没有的

  return (
    <div>
      <h2>内容2: {message}</h2>
      {/* 虽然调用了onClick，给message赋值了，但是组件不会重新渲染，所以不会看到变化 */}
      <button onClick={e => message = "你好啊, 李银河!"}>修改文本</button>
    </div>
  )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWord/>
        <hr />
        <HelloWorld2/>
      </div>
    )
  }
}

export default App