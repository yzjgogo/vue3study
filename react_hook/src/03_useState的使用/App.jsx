import React, { memo, useState } from 'react'

const App = memo(() => {
  //useState(()=>{return "Hello World"})
  // useState(() => "Hello World") // 这种方式是懒初始化，对性能优化很重要，因为这个函数只会在组件的初次渲染时执行，而不会在重新渲染时重复执行。
  //参考：E:\web\vue3\vue3study\react_hook\src\12_自定义Hooks\hooks\useLocalStorage.js
  const [message, setMessage] = useState("Hello World")
  const [count, setCount] = useState(100)
  const [banners, setBanners] = useState([])

  function changeMessage() {
    setMessage("你好啊, 李银河!")
  }

  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App