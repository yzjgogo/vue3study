import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { changeBannersAction, changeRecommendsAction, fetchHomeMultidataAction } from "../store/actionCreators"

export class Category extends PureComponent {

  componentDidMount() {
    this.props.fetchHomeMultidata()
  }

  render() {
    return (
      <div>
        <h2>Category Page: {this.props.counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendsAction(recommends))
  },
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps )(Category)