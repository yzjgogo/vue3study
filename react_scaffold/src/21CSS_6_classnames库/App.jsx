import React, { PureComponent } from 'react'
import classNames from 'classnames'


/**
  classnames库解决的问题：实现像vue那样动态添加class。<div :class="{'list-box':true}"></div>
  1:安装classnames库
  npm install classnames -S

  2:引入classnames库
  import classNames from 'classnames'
  import _ from 'classnames'
  import xxx from 'classnames'
  引入的名称可以自定义

  3:使用classNames函数来动态添加class
  必须在jsx中通过classNames()、 _()、 xxx()来调用
 */

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isbbb: true,
      isccc: true
    }
  }

  render() {
    const { isbbb, isccc } = this.state

    const classList = ["aaa"]
    if (isbbb) classList.push("bbb")
    if (isccc) classList.push("ccc")
    const classname = classList.join(" ")

    return (
      <div>
        <h2 className={`aaa ${isbbb ? 'bbb': ''} ${isccc ? 'ccc': ''}`}>哈哈哈</h2>
        <h2 className={classname}>呵呵呵</h2>

        <h2 className={classNames("aaa", { bbb:isbbb, ccc:isccc })}>嘿嘿嘿</h2>
        <h2 className={classNames(["aaa", { bbb: isbbb, ccc: isccc }])}>嘻嘻嘻</h2>
      </div>
    )
  }
}

export default App