import React, { PureComponent } from 'react'
import Home from './pages/home'
import Profile from './pages/profile'
import "./style.css"
import store from "./store"
/**
  这个项目演示了如何用最原始的代码把redux应用到react项目中
  redux不是react特有的，redux可以用于任何JavaScript项目中，甚至可以用到vue中

  参考：E:\web\vue3\vue3study\redux_in_node
  使用方式和在E:\web\vue3\vue3study\redux_in_node中使用完全一样。
  对比Home和Profile可发现有很多一样的代码，导致用起来很繁琐，因此引出了下一个项目用到的：react-redux


 */
export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter })
    })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>App Counter: {counter}</h2>

        <div className='pages'>
          <Home/>
          <Profile/>
        </div>
      </div>
    )
  }
}

export default App
