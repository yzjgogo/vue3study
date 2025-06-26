import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: "coderwhy"
    }
  }

  inputChange(event) {
    console.log("inputChange:", event.target.value)
    this.setState({ username: event.target.value })
  }

  render() {
    const { username } = this.state

    return (
      <div>
        {/* 受控组件,使用value了就必须使用onChange，否则会报错，实现类似vue的双向绑定效果，其它的还有checkbox等等表单组件 */}
        <input type="text" value={username} onChange={e => this.inputChange(e)}/>

        {/* 非受控组件：没有使用value，但是可以使用onChange? */}
        <input type="text" />
        <h2>username: {username}</h2>
      </div>
    )
  }
}

export default App