import React, { PureComponent } from 'react'
import { createPortal } from "react-dom"
import Modal from './Modal'
/**
  学到这里(Portals)的时候在react_scaffold\public\index.html中添加了：
    
    <div id="why"></div>
    <div id="modal"></div>

        <style>
      #modal {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    </style>


    我们打算把<h2>App H2</h2>脱离App组件的DOM结构，
    直接放到body下id为"why"的div中去，可以这样：
    createPortal(<h2>App H2</h2>, document.querySelector("#why"))

    createPortal也支持一次性将多个元素脱离原有的DOM结构，挂载到指定元素上去
    参考：Modal

    Portals类似vue的teleport

 */
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>App H1</h1>
        {
          createPortal(<h2>App H2</h2>, document.querySelector("#why"))
        }

        {/* 2.Modal组件，给他指定两个子组件，进入Modal看到，时间在渲染Modal时，直接把其children挂载到body下的#modal上去了 */}
        <Modal>
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </Modal>
      </div>
    )
  }
}

export default App