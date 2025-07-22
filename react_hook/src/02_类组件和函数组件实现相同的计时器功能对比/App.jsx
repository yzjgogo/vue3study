import React, { memo } from 'react'
import CounterClass from './CounterClass'
import CounterHook from './CounterHook'
/**
  这个案例主要演示，实现相同的功能
  类组件CounterClass 和 函数组件CounterHook 的代码量，和便捷性对比
  其中CounterHook也介绍了hook的基本用法

  最终对比结果：函数组件配合hook开发更方便，这也是以后得趋势，以后类组件逐渐就被边缘化了
 */
const App = memo(() => {
  return (
    <div>
      <h1>App Component</h1>
      <CounterClass/>
      <CounterHook/>
    </div>
  )
})

export default App
