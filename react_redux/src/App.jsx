import React, { PureComponent } from 'react'
import Home from './pages/home'
import Profile from './pages/profile'
import "./style.css"
import store from "./store"
import About from './pages/about'
import Category from './pages/category'
/**
案例1:  
这个项目的home.jsx和profile.jsx演示了如何用最原始的代码把redux应用到react项目中
  redux不是react特有的，redux可以用于任何JavaScript项目中，甚至可以用到vue中
  参考：E:\web\vue3\vue3study\redux_in_node
  使用方式和在E:\web\vue3\vue3study\redux_in_node中使用完全一样。
  对比Home和Profile可发现有很多一样的代码，导致用起来很繁琐，因此引出了下一个项目用到的：react-redux

  案例2：react中使用redux,需安装react-redux，让我们直接像操作组件一样操作redux。
  以上案例1的逻辑还没有安装react-redux
  现在开始安装 react-redux
  npm install react-redux -S
  然后我们就可以把store中的state中的某个属性映射为组件的属性；把dispatch方法映射为组件的属性方法。
  然后既可以在组件中通过this.props获取到state中的属性，也可以通过this.props方法来触发dispatch方法。
  搜索：react-redux使用步骤

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
          <About/>
          <Category/>
        </div>
      </div>
    )
  }
}

export default App
