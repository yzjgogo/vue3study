import React, { memo, useEffect } from 'react'
import { useState } from 'react'

/**
  1：可以在函数式组件中使用多次useEffect来处理不同的副作用,相比于类组件的生命周期方法，
  可以更好地分离逻辑，提升代码的可读性和可维护，因为类组件的某个生命周期回调函数，可能要写非常多没关联的逻辑，这样在函数式组件中可以根据不同的逻辑定义多个useEffect，React 将按照 effect 声明的顺序依次调用组件中的每一个 effect；

  2： useEffect的第二个参数可以控制副作用函数的执行时机，第二个参数是数组，表示这个useEffect依赖的变量，只有这个变量发生改变才会触发这个useEffect的回调函数执行；
  如果第二个参数是空数组，则表示这个useEffect不依赖任何变量，那么这个useEffect的第一个函数参数只在组件挂载时执行一次，在组件卸载时执行一次第一个函数参数的返回值函数，类似类组件的componentDidMount和componentWillUnmount；
  如果第二个参数没有传递，则表示这个useEffect依赖于所有变量，那么每次组件更新都会执行这个useEffect的回调函数，类似类组件的componentDidUpdate（参考：03_清除机制-返回回调函数）；
 */
const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello World')

  //这个useEffect会在组件挂载时执行且之后每次count变化都会执行
  useEffect(() => {
    console.log('修改title:', count)
  }, [count])

  //这个useEffect只在组件挂载时执行一次‘位置1’，组件卸载时执行一次‘位置2’，这样就模拟出了
  useEffect(() => {
    //位置1
    console.log('监听redux中的数据')
    return () => {
      //位置2
    }
  }, [])

  useEffect(() => {
    console.log('监听eventBus的why事件')
    return () => {}
  }, [])

  useEffect(() => {
    console.log('发送网络请求, 从服务器获取数据')

    return () => {
      console.log('会在组件被卸载时, 才会执行一次')
    }
  }, [])

  return (
    <div>
      <button onClick={(e) => setCount(count + 1)}>+1({count})</button>
      <button onClick={(e) => setMessage('你好啊')}>
        修改message({message})
      </button>
    </div>
  )
})

export default App
