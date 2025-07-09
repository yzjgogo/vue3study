import React, { createRef, PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isLogin: true
    }
    this.sectionRef = createRef()
  }

  render() {
    const { isLogin } = this.state

    /**
     CSSTransition用来处理元素的显示、隐藏两种情况的切换；SwitchTransition用来处理一直显示的元素两种状态的切换，例如登录和退出按钮的切换。

     1：mode属性用于指定切换模式，'out-in'表示先执行退出动画，再执行进入动画；'in-out'表示先执行进入动画，再执行退出动画。
     2：SwitchTransition还是要包裹CSSTransition实现状态切换动画
     3：nodeRef，参考react_scaffold\src\20_React的动画实现\01_CSSTransition动画\App.jsx
     4：key属性用于指定切换的唯一标识，这里使用isLogin的值来区分登录和退出状态。两种状态可以是任意值
     5：classNames,指定动画类的前缀。react根据这个前缀匹配./style.css中的几个类。参考react_scaffold\src\20_React的动画实现\01_CSSTransition动画\App.jsx
     6：timeout：参考react_scaffold\src\20_React的动画实现\01_CSSTransition动画\App.jsx


     可见SwitchTransition使用起来很简单，因为最终是交给CSSTransition来处理动画的，所以我们只需要关注切换的状态和动画的类名即可。

     */
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            nodeRef={this.sectionRef}
            key={isLogin ? 'exit' : 'login'}
            classNames="login"
            timeout={1000}
          >
            <button
              ref={this.sectionRef}
              onClick={(e) => this.setState({ isLogin: !isLogin })}
            >
              {isLogin ? '退出' : '登录'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

export default App
