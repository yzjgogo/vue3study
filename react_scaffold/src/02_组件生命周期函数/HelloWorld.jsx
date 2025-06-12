import React from "react"

/**
 * 这里介绍类组件的生命周期，函数组件没有生命周期回调
 * 参考图片：生命周期.png 和 不常用生命周期.png
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */
class HelloWorld extends React.Component {
  // 1.构造方法: constructor
  constructor() {
    console.log("执行 HelloWorld constructor")
    super()

    this.state = {
      message: "Hello World"
    }
  }

  changeText() {
    this.setState({ message: "你好啊, 李银河" })
  }

  // 2.执行render函数，render只是组装组件的内容，并不是真正的更新组件渲染画面？因此在getSnapshotBeforeUpdate之前执行
  render() {
    console.log("执行 HelloWorld render")
    const { message } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <p>{message}是程序员的第一个代码!</p>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }

  // 3.组件被渲染到DOM: 被挂载到DOM
  componentDidMount() {
    console.log("执行 HelloWorld componentDidMount")
  }

  // 4.组件的DOM被更新完成： DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行 HelloWorld componentDidUpdate:", prevProps, prevState, snapshot)
  }

  // 5.组件从DOM中卸载掉： 从DOM移除掉，例如点击“切换”
  componentWillUnmount() {
    console.log("执行 HelloWorld componentWillUnmount")
  }


  /*
    不常用
    当组件内的数据（state和props?）发生变化时，是否更新组件，例如当我们点击‘修改文本’修改message后，shouldComponentUpdate返回false，则本次不会更新
    默认为true
  */
  shouldComponentUpdate() {
    console.log("执行 HelloWorld shouldComponentUpdate")
    return true
  }

  /*
    在组件更新前保存一些数据
    例如你点击‘修改文本’修改message后，getSnapshotBeforeUpdate会在DOM更新前执行，此时可以获取到一些信息（例如滚动位置等），
    之后组件才开始更新，因此这个方法在componentDidUpdate之前执行，在render之后执行
  */
  getSnapshotBeforeUpdate() {
    console.log("执行 HelloWorld getSnapshotBeforeUpdate")
    return {
      scrollPosition: 1000
    }
  }
}

export default HelloWorld
