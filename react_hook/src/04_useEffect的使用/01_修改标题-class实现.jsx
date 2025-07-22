import React, { PureComponent } from 'react'
/**
 * 本案例为了引出下一个案例useEffect的使用
 */
export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: 100
    }
  }
  /**
   * 组件挂载成功回调
   */
  componentDidMount() {
    console.log('组件挂载成功')
    document.title = this.state.counter
  }

  /**
   * 每次组件更新完成都会回调componentDidUpdate
   */
  componentDidUpdate() {
    console.log('-------')
    document.title = this.state.counter;
  }

  componentWillUnmount() {
    
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>计数: {counter}</h2>
        <button onClick={e => this.setState({ counter: counter+1 })}>+1</button>
      </div>
    )
  }
}

export default App
