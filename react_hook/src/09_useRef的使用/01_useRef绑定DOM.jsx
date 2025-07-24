import React, { memo, useRef } from 'react'
/*
  对于一个组件，无论组件渲染多少次，useRef()返回的都是同一个对象
  这个对象有一个current属性，可以用来存储任何值,因此即使current改变了，但是useRef()还是原来的对象。
*/
const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()
  
  function showTitleDom() {
    console.log(titleRef.current)
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input type="text" ref={inputRef} />
      <button onClick={showTitleDom}>查看title的dom</button>
    </div>
  )
})

export default App