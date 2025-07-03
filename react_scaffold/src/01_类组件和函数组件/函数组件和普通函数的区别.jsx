import React, { Component } from 'react'
/**
  定义一个函数组件：
  关键点：
  1：返回的内容是JSX语法，是一个布局，再直白的说返回的是成对的标签；
  2：函数组件的名称必须以大写字母开头，否则会报错；
  3：函数组件可以接收props参数，props参数接收<Htc>这个标签使用处传递的属性，例如这里传递了name属性；
  4：函数名称本身就是要使用这个组件的时候使用的标签名<Htc name={'手机'}></Htc>，而return的内容是其实际渲染的内容
 */
function Htc(props){
  console.log("函数组件执行了", props)
  return <div>Htc函数组件</div>
}

/**
  定义一个普通函数
  这个'MeiZu'就是一个普通的js函数，虽然它是大写字母开头，但是它返回的不是jsx语法布局，而是一个组件(js对象)，因此不可以<MeiZu></MeiZu>这样使用，会报错
  注意：函数组件和普通函数的区别在于，函数组件返回的是JSX语法布局，而普通函数可以返回任何js里的数据任何类型的数据，当然包括组件，这里就是返回Htc组件
  因此执行MeiZu()后，就得到了Htc组件，因此可以<Mz></Mz>这样使用

  function MeiZu() {
    return 'anything' 此时MeiZu这个普通函数返回的是一个字符串
  }
 */
function MeiZu(){
  return Htc
}
const Mz = MeiZu()




/*
  以上Htc和MeiZu的例子足以说明函数式组件和函数的区别了

  下面再多举几个其它场景的例子
*/

//1:函数式组件返回另一个类组件布局
function AnotherCpn(props) {
  class Cpn extends Component {
    render() {
      return <h1>类组件</h1>
    }
  }
  return <Cpn></Cpn>          
}

//2:普通函数返回一个类组件
function NormalFunction(param) {
  class Dpn extends Component {
    render() {
      return <h1>{param}</h1>
    }
  }
  return Dpn
}
const AnotherDpn = NormalFunction('普通函数返回的类组件')
export class App extends Component {
  render() {
    return (
      <div>
        <Htc name={'手机'}></Htc>
        {/* <MeiZu></MeiZu>  不可以这样用,MeiZu不是组件*/}
        <Mz name={'深圳'}></Mz>
        <AnotherCpn></AnotherCpn>
        <AnotherDpn></AnotherDpn>
      </div>
    )
  }
}

export default App