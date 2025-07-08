import React, { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  constructor() {
    super() 

    this.state = {
      sections: [
        { title: "哈哈哈", content: "我是内容, 哈哈哈" },
        { title: "呵呵呵", content: "我是内容, 呵呵呵" },
        { title: "嘿嘿嘿", content: "我是内容, 嘿嘿嘿" },
        { title: "嘻嘻嘻", content: "我是内容, 嘻嘻嘻" },
      ]
    }
  }

  /**

     react要求组件（类组件和函数式组件）的render函数返回的内容必须有一个根元素，我们一般都用div包裹，但是如果你认为不应该用div包裹徒增一层组件，react官方提供了Fragment，你可以用Fragment来包裹多个元素，这样实际渲染时Fragment不会渲染成任何元素，你可以F12看看。

     而<Fragmeng></Fragment>和<></>是等价的，后者是React 16.2版本之后新增的语法糖。

     但是当你需要对Fragment使用key时，不可以使用语法糖写法< key={xxx}></>，必须使用<Fragment key="xxx"></Fragment>的形式。

   */
  render() {
    const { sections } = this.state

    return (
      <>
        <h2>我是App的标题</h2>
        <p>我是App的内容, 哈哈哈哈</p>
        <hr />

        {
          sections.map(item => {
            return (
              <Fragment key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </Fragment>
            )
          })
        }
      </>
    )
  }
}

export default App