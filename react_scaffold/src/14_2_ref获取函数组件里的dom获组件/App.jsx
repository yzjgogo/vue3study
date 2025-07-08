import React, { PureComponent, createRef, forwardRef } from 'react'

class AnimBox extends PureComponent {
  render() {
    return (
      <div>
        <h2>AnimBox组件</h2>
      </div>
    )
  }
}

/**
 * forwardRef只能接收函数式组件
 */
const HelloWorld = forwardRef(function(props, ref) {
  console.log("看看",ref) // 这里可以获取到传入的ref对象
  //3，函数组件里面某个dom或组件使用这个ref
  return (
    <div>
      <h1> ref={ref}Hello World</h1>
      <p>哈哈哈</p>
      {/* {<AnimBox ref={ref} />} 组件也可以*/}
    </div>
  )
})


export class App extends PureComponent {
  constructor() {
    super()

    //1，先创建一个ref待使用
    this.hwRef = createRef()
  }

  //4，现在可以通过ref访问函数组件里的某个组件或dom了
  getComponent() {
    console.log(this.hwRef.current)
  }

  //2，把ref传递给函数式组件
  render() {
    return (
      <div>
        <HelloWorld ref={this.hwRef}/>
        <button onClick={e => this.getComponent()}>获取组件实例</button>
      </div>
    )
  }
}

export default App