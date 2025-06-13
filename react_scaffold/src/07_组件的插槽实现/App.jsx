import React, { Component } from 'react'
import NavBar from './nav-bar'
import NavBarTwo from './nav-bar-two'

export class App extends Component {
  render() {
    const btn = <button>按钮2</button>

    return (
      <div>
        {/* 1.使用children实现插槽 
          子组件的props属性中有一个children属性，可通过children[0]、children[1]、children[2]等方式访问子组件传入的内容
          这种方式不好：
          1：当只有一个child时，例如<NavBar><button>按钮</button></NavBar>，children就不是数组，children就是这个唯一的child.
          2：在子组件中，要通过索引访问children的内容，例如children[0]、children[1]、children[2]，如果子组件传入的内容不符合预期，就会报错。
        */}
        <NavBar>
          <button>按钮</button>
          <h2>哈哈哈</h2>
          <i>斜体文本</i>
        </NavBar>

        {/* 2.使用props实现插槽 
          看这还是js代码，还是普通的属性的传递
          推荐用这种方式
        */}
        <NavBarTwo 
          leftSlot={btn}
          centerSlot={<h2>呵呵呵</h2>}
          rightSlot={<i>斜体2</i>}
        />
      </div>
    )
  }
}

export default App