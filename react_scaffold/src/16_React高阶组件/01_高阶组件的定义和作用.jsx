import React, { PureComponent } from 'react'

/*
  对比高阶函数：一个函数最终返回另一个函数就是高阶函数，例如数组的map、filter、reduce等方法
  高阶组件：一个函数最终返回一个组件就是高阶组件
  高阶组件的作用：可以对组件进行增强，添加一些额外的功能
  高阶组件的使用场景：当我们需要对多个组件进行相同的功能增强时，可以使用高阶组件来实现代码复用
  注意：高阶组件不能修改原有组件的props和state，只能通过props传递数据给原有组件
  高阶组件的命名规范：以with开头，例如withRouter、withStore等
  高阶组件的使用方式：将高阶组件作为函数调用，传入需要增强的组件，返回一个新的组件
  高阶组件的特点：高阶组件是一个函数，接受一个组件作为参数    
  以上内容由AI生成

  注意这里的hoc是普通的函数，不是函数式组件，参考：react_scaffold\src\01_类组件和函数组件\函数组件和普通函数的区别.jsx

  我们这里想在App中使用HelloWorld，但是我们又想给HelloWorld附加一些额外的功能，例如传递一个name属性，因此通过hoc这个函数来实现，使用函数来实现还有一个好处，
  如果还有别的HelloWorld1，HelloWorld2，HelloWorld3等也需要附加一些功能，我们可以实现代码的复用，都通过这个方法来实现。

  注意此时真个App的组件树是 <App/> -> <NewCpn/> -> <HelloWorld name="why"/>,并没有HelloWorldHOC和hoc组件。（参考：React开发调试工具，F12 Components看看）
  注意这里为了附加HelloWorld的功能，多引入了NewCpn组件

  对于高阶组件函数(hoc)，其参数应该是一个组件，例如这里的参数是Cpn，Cpn接收一个组件。（我自己总结的）

  签名学到的momo和forwardRef都是高阶组件：
  react_scaffold\src\12_2_render函数的优化-PureComponent-memo
  react_scaffold\src\14_2_ref获取函数组件里的dom获组件\App.jsx
*/
function hoc(Cpn) {
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="why"/>
    }
  }
  return NewCpn
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

//hoc这个普通函数接收了HelloWorld组件作为参数，然后返回了附加了额外功能的HelloWorld组件HelloWorldHOC（NewCpn组件）
const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC/>
      </div>
    )
  }
}

export default App