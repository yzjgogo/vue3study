import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/features/counter'

export class Profile extends PureComponent {

  subNumber(num) {
    this.props.subNumber(num)
  }

  render() {
    const { counter, banners, recommends } = this.props

    return (
      <div>
        <h2>Page Counter: {counter}</h2>
        <button onClick={e => this.subNumber(5)}>-5</button>
        <button onClick={e => this.subNumber(8)}>-8</button>

        <div className='banner'>
          <h2>轮播图展示</h2>
          {banners && <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>}
        </div>
        <div className='recommend'>
          <h2>推荐的展示</h2>
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

//@reduxjs/toolkit使用步骤8:对store数据的访问和修改，还是通过react-redux的connect函数，对store的state和dispatch进行映射，映射到组件的props中。这些并不是@reduxjs/toolkit的功能，而是react-redux的功能。只是要注意的是，我们要先通过store的sate访问到模块，再访问模块的state数据。例如state.counter.counter
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
})

const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)