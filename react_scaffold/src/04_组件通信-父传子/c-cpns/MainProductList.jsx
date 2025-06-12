import React, { Component } from 'react'

export class MainProductList extends Component {
  //写不写这个构造器都一样，都不影响props的存在，当前这种情况构造器中没有其他逻辑，编译器反而会提示不要写
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { productList } = this.props

    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {productList.map((item) => {
            return <li key={item.acm}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default MainProductList
