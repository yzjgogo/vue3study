import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { withRouter } from "../hoc"

export class Home extends PureComponent {
  navigateTo(path) {
    // react路由使用步骤7类组件代码跳转路由使用hook函数useNavigate-3:因为Home组件经过withRouter高阶组件包装，且已经把navigate放到this.props.router中，所以可以通过this.props.router获取到navigate方法
    const { navigate } = this.props.router
    navigate(path)
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div className='home-nav'>
          <Link to="/home/recommend">推荐</Link>
          <Link to="/home/ranking">排行榜</Link>
          <button onClick={e => this.navigateTo("/home/songmenu")}>歌单</button>
        </div>

        {/*react路由使用步骤6:二级路由， 占位的组件Outlet，二级的路由就显示在这里 */}
        <Outlet/>
      </div>
    )
  }
}

export default withRouter(Home)