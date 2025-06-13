import React, { Component } from 'react'
import HomeBanner from './HomeBanner'
import HomeInfo from './HomeInfo'

export class Home extends Component {
  render() {

    return (
      <div>
        <h2>Home</h2>
        <HomeInfo/>
        <HomeBanner/>
      </div>
    )
  }
}

export default Home