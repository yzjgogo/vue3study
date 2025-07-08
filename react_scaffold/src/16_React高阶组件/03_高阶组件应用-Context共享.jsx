import React, { PureComponent } from 'react'
import ThemeContext from './context/theme_context'
//这里导入的Product是经过withTheme高阶组件处理过的组件,是已经使用Consumer消费了ThemeContext的组件，且把消费的数据作为属性传给Product组件
import Product from './pages/Product'

//这里通过Provider体统数据，具体看Product里面怎么消费数据的
export class App extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: "red", size: 30}}>
          <Product/>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App