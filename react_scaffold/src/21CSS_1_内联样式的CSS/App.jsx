import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      titleSize: 30
    }
  }

  addTitleSize() {
    this.setState({ titleSize: this.state.titleSize + 2 })
  }

  render() {
    const { titleSize } = this.state

    /**
      内联样式的CSS
      1：style={样式对象}
      2：写法上需要使用驼峰写法，例如font-size需要写成fontSize
      3：编写时很多时候没有代码提示，不友好；
      4：样式写多了代码太混乱了
      5：某些样式无法编写，例如伪类样式、伪元素样式等
      6：内联样式可以使用state中的值也可以动态修改state中的值。
     */
    return (
      <div>
        <button onClick={e => this.addTitleSize()}>增加titleSize</button>
        <h2 style={{color: "red", fontSize: `${titleSize}px`}}>我是标题</h2>
        <p style={{color: "blue", fontSize: "20px"}}>我是内容, 哈哈哈</p>
      </div>
    )
  }
}

export default App
