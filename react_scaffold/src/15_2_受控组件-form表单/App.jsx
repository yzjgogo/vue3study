import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmitClick(event) {
    // 1.阻止默认的行为
    event.preventDefault()

    // 2.获取到所有的表单数据, 对数据进行组件
    console.log('获取所有的输入内容')
    console.log(this.state.username)

    // 3.以网络请求的方式, 将数据传递给服务器(ajax/fetch/axios)
  }

  handleInputChange(event) {
    console.log('handleUsernameChange-event:', event)
    //username时，event.target 输出 <input id="username" type="text" value="a" name="username">，password时，event.target 输出 <input id="password" type="password" value="f" name="password">
    //event.target本身是一个javascript对象，而id,type,value,name等是这个对象的属性
    //因此可以event.target.name=='username',event.target.type=='text',event.target.id=='username'
    console.log('handleUsernameChange-trget:', event.target)
    console.log('handleUsernameChange-name:', event.target.name)
    console.log('handleUsernameChange-type:', event.target.type)
    console.log('handleUsernameChange-id:', event.target.id)
    // this.setState({ username: event.target.value })
    // this.setState({ password: event.target.value })
    //根据上面的注释，我们就可以动态的根据event.target.name设置state的属性,从而实现用户名和密码的onChange使用同一个回调函数
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, password } = this.state

    //onSubmit:form提交的函数回调
    //htmlFor="username" 什么意思？我去掉也可以呢
    //type='submit',type为submit的按钮会触发表单的提交事件onSubmit?
    //这里的input是受控组件，因为使用了value和onChange,使用了value就必须使用onChange，否则会报错
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {/* 1.用户名和密码 */}
          <label htmlFor="username">
            用户:
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>
          <br />
          <label htmlFor="password">
            密码:
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.handleInputChange(e)}
            />
          </label>

          <button type="submit">注册</button>
        </form>
      </div>
    )
  }
}

export default App
