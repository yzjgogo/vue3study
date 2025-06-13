import React, { Component } from 'react'
import Home from './Home'

import ThemeContext from "./context/theme-context"
import UserContext from './context/user-context'
import Profile from './Profile'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      info: { name: "kobe", age: 30 }
    }
  }

  render() {
    const { info } = this.state

    return (
      <div>
        <h2>App</h2>

        {/* Context使用步骤2： 通过ThemeContext中Provider中value属性为后代提供数据，会覆盖默认数据,且多个Context可以嵌套，后台可以接收这多个Context的数据 */}
        <UserContext.Provider value={{nickname: "kobe", age: 30}}>
          <ThemeContext.Provider value={{color: "red", size: "30"}}>
            <Home/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/* Profile没有被ThemeContext.Provider包裹 ，在Profile里可使用其默认值*/}
        <Profile/>
      </div>
    )
  }
}

export default App