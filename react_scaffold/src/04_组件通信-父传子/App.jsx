import React, { Component } from 'react'
import Header from './c-cpns/Header'
import Footer from './c-cpns/Footer'
import Main from './c-cpns/Main'
//随便在顶层引入一下就生效了，因为js代码就是自上而下顺序执行的
import "./style.css"

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App