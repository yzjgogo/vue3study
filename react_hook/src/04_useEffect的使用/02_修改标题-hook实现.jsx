import React, { memo } from 'react'
import { useState, useEffect } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(200)

  /**
   * useEffect是一个hook,可以让你来完成一些类似于class中生命周期的功能，用于处理副作用
   * 副作用包括：网络请求、DOM操作、订阅事件等
   * useEffect会在组件渲染完成后执行
   * 可以看作是类组件中的componentDidMount和componentDidUpdate的结合
   * 第一次渲染时会执行一次，类似componentDidMount；
   * 以后每次组件更新完成都会执行一次，类似componentDidUpdate
   */
  useEffect(() => {
    // 网络请求/DOM操作(修改标题)/事件监听
    document.title = count
  })

  return (
    <div>
      <h2>-当前计数: {count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>
    </div>
  )
})

export default App
