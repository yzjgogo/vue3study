import React, { PureComponent } from 'react'
import "./Home.css"

export class Home extends PureComponent {
  render() {
    return (
      // 在./Home.css中定义了.section的样式有边框，但是因为在Profile.css中也定义了.section的样式无边框，所以这里的样式被覆盖了，可见这种css写法不好，因为定义的样式都是全局的
      <div className='section'>
        {/* 并没有在./Home.css中定义.title的样式，但是使用了App.css中的.title的样式，可见这种css方式不好，因为定义的样式都是全局的 */}
        <div className='title'>Home的标题</div>
      </div>
    )
  }
}

export default Home