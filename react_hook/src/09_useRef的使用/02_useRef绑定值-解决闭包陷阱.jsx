import React, { memo, useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
//参考：E:\web\vue3\vue3study\react_hook\src\07_useCallback_useRef的使用
let obj = null

const App = memo(() => {
  const [count, setCount] = useState(0)
  const nameRef = useRef()
  console.log(obj === nameRef)
  obj = nameRef

  // 通过useRef解决闭包陷阱
  const countRef = useRef()
  countRef.current = count

  const increment = useCallback(() => {
    setCount(countRef.current + 1)
  }, [])

  return (
    <div>
      <h2>Hello World: {count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App
