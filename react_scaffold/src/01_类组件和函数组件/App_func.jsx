/*
  函数式组件，本身就起到类组件中的render函数的作用
  函数式组件没有生命周期回调

  函数组件名称要以大写字母开头，否则报错
*/
function App(props) {
  // 返回值: 和类组件中render函数返回的是一致
  return <h1>App Functional Component</h1>
}

export default App

