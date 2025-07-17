import React, { PureComponent } from 'react'
import { withRouter } from "../hoc"

export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      songMenus: [
        { id: 111, name: "华语流行" },
        { id: 112, name: "古典音乐" },
        { id: 113, name: "民谣歌曲" },
      ]
    }
  }

  NavigateToDetail(id) {
    // react路由使用步骤8':id'传参-2:跳转处传递的path如下拼上对应的参数值，浏览器地址栏也可以这样拼，也能拿到参数值
    //这里的HomeSongMenu是类组件，也通过withRouter高阶组件包装，所以可以通过this.props.router获取到navigate方法
    const { navigate } = this.props.router
    navigate("/detail/" + id)
  }

  render() {
    const { songMenus } = this.state

    return (
      <div>
        <h1>Home Song Menu</h1>
        <ul>
          {
            songMenus.map(item => {
              return <li key={item.id} onClick={e => this.NavigateToDetail(item.id)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)
