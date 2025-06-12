import React, { Component } from 'react'
import PropTypes from "prop-types"
/**
 * 组件接收到的所有属性都在this.props中
 */
export class MainBanner extends Component {
  //es2022设置属性默认值的方式，如果父组件没传，MainBanner就使用这个默认值
  // static defaultProps = {
  //   banners: [],
  //   title: "默认标题"
  // }

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    // 访问this.props中的属性
    const { title, banners } = this.props

    return (
      <div className='banner'>
        <h2>封装一个轮播图: {title}</h2>
        <ul>
          {
            banners.map(item => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

//https://zh-hans.legacy.reactjs.org/docs/typechecking-with-proptypes.html

//因为js是弱类型语言，可以借助prop-types实现类型效验，要求父组件只能传入array类型的banners和string类型的title,否则报错，如果用ts则ts本身是强类型语言就很方便了
MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string
}

//这是prop-types设置属性默认值的方式
MainBanner.defaultProps = {
  banners: [],
  title: "默认标题"
}

export default MainBanner