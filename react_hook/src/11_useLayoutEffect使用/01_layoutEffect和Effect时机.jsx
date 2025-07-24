import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  //执行顺序2,useLayoutEffect会在组件开始渲染前被调用
  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  })

  //执行顺序3，useEffect会在组件渲染完后(已经显示到界面上)被调用
  useEffect(() => {
    console.log("useEffect")
  })

  //执行顺序1
  console.log("App render")

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
