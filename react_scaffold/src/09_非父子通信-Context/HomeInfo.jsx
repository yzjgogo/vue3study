import React, { Component } from 'react'
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context'

export class HomeInfo extends Component {
  //构造器的第2个参数就是context，里面包含了所有的Context数据
  // constructor(props,context) {
  //   super(props)
  // }
  render() {
    // Context使用步骤4：就可以使用这个context了
    console.log(this.context)

    return (
      <div>
        <h2>HomeInfo: {this.context.color}</h2>
        {/* Context使用步骤5：因为再一个组件中contextType只能定义一个类型，如果你想也接收其它context的数据，可以使用UserContext.Consumer */}
        <UserContext.Consumer>
          {
            value => {
              return <h2>Info User: {value.nickname}</h2>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

// Context使用步骤3： 设置组件的contextType为某一个Context，你也可以不设置，直接在想使用数据的地方使用ThemeContext.Consumer，参考步骤5
HomeInfo.contextType = ThemeContext

export default HomeInfo