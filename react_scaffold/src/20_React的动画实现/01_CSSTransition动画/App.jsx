import React, { createRef, PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }

    this.sectionRef = createRef()
  }

  render() {
    const { isShow } = this.state

    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          切换
        </button>
        {/* 不CSSTransition动画实现显示隐藏过渡动画的情况 */}
        {/* { isShow && <h2>哈哈哈</h2> } */}

        {/* 
        
        我们可以通过原生的CSS来实现这些过渡动画，但是React社区为我们提供了react-transition-group用来完成过渡动画。
◼ React曾为开发者提供过动画插件 react-addons-css-transition-group，后由社区维护，形成了现在的 react-transition-group。
这个库可以帮助我们方便的实现组件的 入场 和 离场 动画，使用时需要进行额外的安装：
◼ react-transition-group本身非常小，不会为我们应用程序增加过多的负担。


          CSSTransition用来处理元素的显示、隐藏两种情况的切换；SwitchTransition用来处理一直显示的元素两种状态的切换，例如登录和退出按钮的切换。

          使用CSSTransition动画实现显示隐藏过渡动画的情况 
          1：in用于指定监听哪个值实现显示隐藏的除法，这里用isShow很合适
          2：如果添加了unmountOnExit={true}，那么该组件会在执行退出动画结束后被移除掉；
          3：classNames用于指定动画的类名前缀，CSSTransition会自动在动画过程中给元素添加，移除对应的类名，这里指定为'why'，而在./style.css中定义了显示动画：.why-enter，.why-enter-active；隐藏动画：.why-exit，.why-exit-active；首次出现动画：.why-appear，.why-appear-active。在‘section’显示隐藏的过程中react就会识别到这些动画类动态添加移除这些类。
          4：timeout用于指定动画的时长，这里设置为2000毫秒，最好定义成和在style.css中定义的动画时长一致，这样可以保证动画的流畅性,
              timeout可以分别指定：{{
              appear: 500,
              enter: 300,
              exit: 500,
            }}
          5：appear用于指定是否在组件首次渲染时也执行动画，这里设置为true，表示首次渲染时也执行动画。默认是false
          6：onEnter、onEntering、onEntered、onExit、onExiting、onExited等回调函数用于监听动画的不同阶段，可以在这些回调函数中执行一些额外的逻辑，比如打印日志等。

          7：nodeRef用于指定需要监听的元素的引用，这里使用了createRef()创建了一个引用，并将其传递给CSSTransition组件的nodeRef属性，这样可以确保动画只作用于该元素。在老版本的react中可以不指定nodeRef，如果不指定，在CSSTransition内部会使用findDOMNode这个api来找到我们这里的<div className="section">元素，但是如果使用<StrictMode>严格模式F12会看到报错，提示findDOMNode过时了；在新版react中(现在使用的这版)无论是否严格模式都不允许使用findDOMNode了，直接会报错：Uncaught TypeError: react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode is not a function。因此必须使用nodeRef来指定
        

          官网：https://reactcommunity.org/react-transition-group/transition  可能要翻墙



        */}
        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          unmountOnExit={true}
          classNames="why"
          timeout={2000}
          appear
          onEnter={(e) => console.log('开始进入动画')}
          onEntering={(e) => console.log('执行进入动画')}
          onEntered={(e) => console.log('执行进入结束')}
          onExit={(e) => console.log('开始离开动画')}
          onExiting={(e) => console.log('执行离开动画')}
          onExited={(e) => console.log('执行离开结束')}
        >
          <div className="section" ref={this.sectionRef}>
            <h2>哈哈哈</h2>
            <p>我是内容, 哈哈哈</p>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default App
