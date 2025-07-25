import React, { PureComponent } from 'react'
import axios from "axios"
import { connect } from "react-redux"
import { addNumber } from '../store/features/counter'

import store from "../store"
import { changeBanners, changeRecommends } from '../store/features/home'
import { fetchHomeMultidataAction } from '../store/features/home'

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata()

    //常规方式，在这里发起
    // axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    //   const banners = res.data.data.banner.list
    //   const recommends = res.data.data.recommend.list

    //   store.dispatch(changeBanners(banners))
    //   store.dispatch(changeRecommends(recommends))
    // })
  }

  addNumber(num) {
    this.props.addNumber(num)
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(8)}>+8</button>
        <button onClick={e => this.addNumber(18)}>+18</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  fetchHomeMultidata() {
    //@reduxjs/toolkit使用步骤9-2:还是react-redux的connect函数，使用dispatch来调用异步的action函数
    dispatch(fetchHomeMultidataAction({name: "why", age: 18}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
