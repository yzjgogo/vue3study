import React, { PureComponent } from 'react'
import { connect } from "react-redux"
// import store from "../store"
import { addNumberAction, subNumberAction } from '../store/actionCreators'

export class About extends PureComponent {

  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("加", num)
      this.props.addNumber(num)
    } else {
      console.log("减", num)
      this.props.subNumber(num)
    }
  }

  render() {
    const { counter, banners, recommends } = this.props

    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={e => this.calcNumber(6, true)}>+6</button>
          <button onClick={e => this.calcNumber(88, true)}>+88</button>
          <button onClick={e => this.calcNumber(6, false)}>-6</button>
          <button onClick={e => this.calcNumber(88, false)}>-88</button>
        </div>
        <div className='banner'>
          <h2>轮播图数据:</h2>
          {banners && <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>}
        </div>
        <div className='recommend'>
          <h2>推荐数据:</h2>
          {recommends && <ul>
            {
              recommends.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>}
        </div>
      </div>
    )
  }
}

// connect()返回值是一个高阶组件
// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

// function fn2(dispatch) {
//   return {
//     addNumber(num) {
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num) { 
//       dispatch(subNumberAction(num))
//     }
//   }
// }

// 搜索参考：react-redux使用步骤
const mapStateToProps = (state) => {
  console.log("mapStateToProps执行", state)
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  },
  subNumber(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
