import React, { PureComponent, createRef } from 'react'

class Box extends PureComponent {
  doSomething() {
    console.log('Box组件的doSomething方法被调用')
  }
  render() {
    return (
      <div>
        <h2>Box组件</h2>
      </div>
    )
  }
}

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {}

    this.titleRef = createRef()
    this.boxRef = createRef()
    this.titleEl = null
  }

  getNativeDOM() {
    // 1.方式一: 在React元素上绑定一个ref字符串，这种直接使用字符串作为ref的方式，老版本可以，现在已经报错了
    // console.log(this.refs.why)

    // 2.方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素
    // console.log(this.titleRef.current) //获取dom元素
    // console.log(this.boxRef)
    // console.log(this.boxRef.current)//获取组件实例
    // this.boxRef.current.doSomething()//既然获取到了组件实例(对象实例)，当然可以调用里面的方法

    // 3.方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入，不需要定义ref也不需要创建ref，在组件被渲染之后，通过回调函数给ref的引用赋值
    console.log(this.titleEl)
  }

  render() {
    return (
      <div>
        {/* {<h2 ref="why">Hello World</h2>} ,这种直接使用字符串作为ref的方式，老版本可以，现在已经报错了*/}
        <h2 ref={this.titleRef}>你好啊,李银河</h2>
        <Box ref={this.boxRef} />
        <h2 ref={(el) => (this.titleEl = el)}>你好啊, 师姐</h2>
        <button onClick={(e) => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App
