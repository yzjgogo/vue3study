import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { changeBannersAction, changeRecommendsAction } from "../store/actionCreators"
import axios from "axios"

export class Category extends PureComponent {

  componentDidMount() {
    console.log("Category组件挂载了")
    const banners = [{title:'轮播0'},{title:'轮播1'},{title:'轮播2'}]
    const recommends = [{title:'推荐0'},{title:'推荐1'},{title:'推荐2'}]
    
// react-redux使用步骤6：通过组件的属性方法更新store中的数据
    this.props.changeBanners(banners)
    this.props.changeRecommends(recommends)
  }

  render() {
    return (
      <div>
        
{/* react-redux使用步骤5：通过组件属性访问store中的state中的数据 */}
        <h2>Category Page: {this.props.counter}</h2>
      </div>
    )
  }
}

/**
react-redux使用步骤3：
如下这样后，在组件里就可以通过this.props.counter获取到store中的state中的counter属性
 */
const mapStateToProps = (state) => ({
  counter: state.counter
})


/**
react-redux使用步骤4：
如下这样后，在组件里就可以通过this.props.changeBanners(banners)和this.props.changeRecommends(recommends)来触发dispatch方法，更新stroe中的数据
 */
const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends))
  }
})
/*
react-redux使用步骤2：
使用react-redux提供的connect()方法,第一个参数是一个函数，用于映射state到组件的props中，
第二个参数是一个函数，用于映射dispatch到组件的props中。
这样就可以在组件中通过this.props获取到state中的属性，也可以通过this.props方法来触发dispatch方法。
注意：connect()返回值是一个高阶组件，使用时需要将其包裹在组件外面。
*/ 
export default connect(mapStateToProps, mapDispatchToProps )(Category)