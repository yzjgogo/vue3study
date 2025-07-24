import React, { memo, useEffect } from 'react'
import { useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  /*
  useEffect负责告知react, 在执行完当前组件渲染之后要执行的副作用代码
  可以在useEffect的第一个函数参数中进行类似事件监听等
  useEffect的第一个函数参数可以返回一个函数，这个函数会在组件被重新渲染或者卸载时执行
  这个返回的函数可以用来清除副作用，比如取消事件监听、清除定时器等
  
  但是本案例有一个问题，每次组件重新开始渲染都会执行'位置2'，每次组件渲染完成都会执行'位置1'，
  这就导致随着组件的重新渲染，会不断地移除监听、添加监听，这样显然是不合理的，“E:\web\vue3\vue3study\react_hook\src\04_useEffect的使用\05_执行时机-控制回调执行.jsx”案例可以解决；
  */
  useEffect(() => {
    //位置1
    // 1.监听事件
    // const unubscribe = store.subscribe(() => {
    // })
    // function foo() {
    // }
    // eventBus.on("why", foo)
    console.log("监听redux中数据变化, 监听eventBus中的why事件")

    // 返回值: 回调函数 => 组件被重新渲染或者组件卸载的时候执行
    return () => {
      //位置2
      console.log("取消监听redux中数据变化, 取消监听eventBus中的why事件")
    }
  })

  return (
    <div>
      <button onClick={e => setCount(count+1)}>+1({count})</button>
    </div>
  )
})

export default App