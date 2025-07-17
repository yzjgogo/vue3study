import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
  render() {
    const { router } = this.props
    // react路由使用步骤8':查询传参-3：至于为什么这样取，进with_router.js看看就知道了
    const { query } = router

    return (
      <div>
        <h1>User: {query.name}-{query.age}</h1>
      </div>
    )
  }
}
//需要通过withRouter高阶组件包装，才能拿到查询参数
export default withRouter(User)