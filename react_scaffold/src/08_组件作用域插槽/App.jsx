import React, { Component } from 'react'
import TabControl from './TabControl'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      titles: ["流行", "新款", "精选"],
      tabIndex: 0
    }
  }

  tabClick(tabIndex) {
    this.setState({ tabIndex })
  }

  getTabItem(item) {
    if (item === "流行") {
      return <span>{item}</span>
    } else if (item === "新款") {
      return <button>{item}</button>
    } else {
      return <i>{item}</i>
    }
  }

  render() {
    const { titles, tabIndex } = this.state

    return (
      <div className='app'>
        <TabControl 
          titles={titles} 
          tabClick={i => this.tabClick(i)}
          //父组件提供样式：getTabItem返回的样式
          //子组件提供数据：TabControl内部调用itemType(item)时，会把数据item带过来
          itemType={item => this.getTabItem(item)}
        />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App