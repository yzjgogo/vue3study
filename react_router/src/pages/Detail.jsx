import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class Detail extends PureComponent {
  render() {
    const { router } = this.props
    //react路由使用步骤8':id'传参-4:去withRouter看看怎么拿到的params
    const { params } = router

    return (
      <div>
        <h1>Detail Page</h1>
        <h2>id: {params.id}</h2>
      </div>
    )
  }
}

export default withRouter(Detail)