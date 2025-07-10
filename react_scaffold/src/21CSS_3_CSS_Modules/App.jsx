import React, { PureComponent } from 'react'
import Home from './home/Home'
import Profile from './profile/Profile'

import appStyle from "./App.module.css"
/**
 课程的pdf里的总结我复制过来的：
  ◼ css modules并不是React特有的解决方案，而是所有使用了类似于webpack配置的环境下都可以使用的。
 如果在其他项目中使用它，那么我们需要自己来进行配置，比如配置webpack.config.js中的modules: true等。
◼ React的脚手架已经内置了css modules的配置：
 .css/.less/.scss 等样式文件都需要修改成 .module.css/.module.less/.module.scss 等；
 之后就可以引用并且进行使用了；
◼ css modules确实解决了局部作用域的问题，也是很多人喜欢在React中使用的一种方案。
◼ 但是这种方案也有自己的缺陷：
 引用的类名，不能使用连接符(.home-title)，在JavaScript中是不识别的；
 所有的className都必须使用{style.className} 的形式来编写；
 不方便动态来修改某些样式，依然需要使用内联样式的方式；
◼ 如果你觉得上面的缺陷还算OK，那么你在开发中完全可以选择使用css modules来编写，并且也是在React中很受欢迎的一种方式。

我的总结：
1：要把你编写的xxx.css文件改成xxx.module.css
2：在引入的时候，使用import xxxStyle from './xxx.module.css'的方式来引入
3：在使用的时候，使用className={xxxStyle.className}的方式来使用

css modules解决了‘react_scaffold\src\21CSS_2_普通的CSS写法’中全局层叠性的问题，使用css modules后所定义的样式只在导入了该样式的组件内生效。类似vue中的scoped样式。

但是css modules缺点也很明显：
 引用的类名，不能使用连接符(.home-title)，在JavaScript中是不识别的；
 所有的className都必须使用{style.className} 的形式来编写；
 不方便动态来修改某些样式，依然需要使用内联样式的方式；


 */
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>我是标题</h2>
        <p className={appStyle.content}>我是内容, 哈哈哈哈</p>

        <Home/>
        <Profile/>
      </div>
    )
  }
}

export default App