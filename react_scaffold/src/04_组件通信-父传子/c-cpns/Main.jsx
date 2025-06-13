import React, { Component } from 'react'
import axios from "axios"

import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor() {
    super()

    this.state = {
      banners: [],
      productList: [],
      info: { name: "kobe", age: 30 }
    }
  }

  //这个钩子函数做接口请求比较合适
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setState({
        banners,
        productList: recommend
      })
    })
  }

  /**
   * 父传子 就是html原生属性的传递，当然html自带的title等也可以，这里给MainBanner传递了banners和title
   * 在MainBanner的props对象中就可以取到
   * 可见react中也没自定义什么，都是js自带的东西
   * @returns 
   */
  render() {
    const { banners, productList, info } = this.state

    return (
      <div className='main'>
        <div>Main</div>
        <MainBanner banners={banners} title="轮播图"/>
        <MainBanner/>
        <MainProductList productList={productList}/>

        {/* react提供了这种便捷写法，可以一次性把info的所有属性都传递过去
        在Son组件的props中就会有name和age两个属性,这和<Son name={info.name} age={info.age}/>是等价的
        */}
        {/* <Son {...info}/> */}
      </div>
    )
  }
}

export default Main