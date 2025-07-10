import React, { PureComponent } from 'react'
import "./App.less"
/**
  react中使用less的配置过程：
  参考：https://developer.aliyun.com/article/1339586 中的方式二
  1：npm install @craco/craco craco-less -S
  2：修改package.json中的scripts脚本:
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    我现在还原了，改成了start1、build1、test1,想测的时候切换一下
  3：在项目根目录下创建craco.config.js文件，具体去看这个文件的内容
 */
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <div className='section'>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容, 哈哈哈</p>
        </div>
      </div>
    )
  }
}

export default App
