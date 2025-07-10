import React, { PureComponent } from 'react'
import Home from './home'
import { AppWrapper, SectionWrapper } from "./style"
/**
 
  ◼ 批评声音虽然有，但是在我们看来很多优秀的CSS-in-JS的库依然非常强大、方便：
 CSS-in-JS通过JavaScript来为CSS赋予一些能力，包括类似于CSS预处理器一样的样式嵌套、函数定义、逻辑复用、动态修
改状态等等；
 虽然CSS预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的点；
 所以，目前可以说CSS-in-JS是React编写CSS最为受欢迎的一种解决方案；
◼ 目前比较流行的CSS-in-JS的库有哪些呢？
 styled-components
 emotion
 glamorous
◼ 目前可以说styled-components依然是社区最流行的CSS-in-JS库，所以我们以styled-components的讲解为主；
以上是我复制过来的


  所谓CSS in JS写法, 就是将CSS样式写在JS文件中,就是用js语言编写css代码，可见在react中即用js编写html也用js编写css，所以人们称React为all in JS框架。

  搜索：CSS-in-JS使用步骤

  CSS-in-JS使用步骤1:CSS in JS的使用了js高级中的标签模板字符串（自己去补充学习下）
   // ES6: 标签模板字符串
// const name = "why"
// const age = 18

// 1.模板字符串的基本使用
// const str = `my name is ${name}, age is ${age}`
// console.log(str)

// 2.标签模板字符串的使用
// function foo(...args) {
//   console.log(args)
// }

// // foo("why", 18, 1.88)
// foo`my name is ${name}, age is ${age}`

CSS-in-JS使用步骤2：安装styled-components。npm install styled-components -S
CSS-in-JS使用步骤3：本来AppWrapper是一个div，现在我们想给App.jsx组件编写组件内生效的样式文件，则我么可以定义./style.js文件

 */
export class App extends PureComponent {

  constructor() {
    super()

    this.state = {
      size: 30,
      color: "yellow"
    }
  }

  render() {
    const { size,color } = this.state

    return (
      <AppWrapper>
        {/* CSS-in-JS使用步骤6-1：向styled传递属性，供css样式使用 */}
        <SectionWrapper size={size} color={color}>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容, 哈哈哈</p>
          <button onClick={e => this.setState({color: "skyblue"})}>修改颜色</button>
        </SectionWrapper>

        <Home/>

        <div className='footer'>
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    )
  }
}

export default App