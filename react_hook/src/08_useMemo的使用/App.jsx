import React, { memo, useCallback } from 'react'
import { useMemo, useState } from 'react'


const HelloWorld = memo(function(props) {
  console.log("HelloWorld被渲染~")
  return <h2>Hello World</h2>
})


function calcNumTotal(num) {
  console.log("calcNumTotal的计算过程被调用~")
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}
/**
  useMemo的用法
  
 */
const App = memo(() => {
  const [count, setCount] = useState(0)

  /*
    1:直接调用组件外部的函数，当组件配重新渲染时，每次渲染都会执行一次calcNumTotal
    对于calcNumTotal(50)这种每次执行结果都相同的情况，每次渲染都执行一次calcNumTotal显然是不合理的
  */
  // const result = calcNumTotal(50)

  /*
    2：使用useMemo来缓存计算结果，只有当依赖项发生变化时才会重新计算
    useMemo的第二个参数和useEffect、useCallback的第二个参数类似，都是一个依赖数组
    当不传第一个参数时，表示任意一个状态发生变化都会触发useMemo重新计算
    当传入一个空数组时，表示只在组件第一次渲染时执行，任何状态的改变都不会触发useMemo重新计算
  */
  // const result = useMemo(() => {
  //   return calcNumTotal(50)
  // }, [])

  /*
    3:残酷，这里useMemo依赖count，当count发生变化时，useMemo会重新计算
  */
  const result = useMemo(() => {
    return calcNumTotal(count*2)
  }, [count])

  /*
    4：useMemo和useCallback的对比
    useCallback返回一个有记忆(跟上次一样)的函数fn，useMemo返回一个有记忆(跟上次一样)的值；
    即useCallback记忆的是第一个函数类型的参数，useMemo记忆的是第一个函数类型的参数返回的值。
    如下increment和increment2等价。
  */ 
  function fn() {}
  // const increment = useCallback(fn, [])
  // const increment2 = useMemo(() => fn, [])


  /*
  5:使用useMemo对子组件渲染进行优化，每次App组件重新渲染时，如果HelloWorld依赖的info是没有变化，则不会触发HelloWorld的重新渲染
  参考：E:\web\vue3\vue3study\react_hook\src\07_useCallback_useRef的使用 
        使用useCallback对子组件渲染进行优化
  */
  const info = useMemo(() => ({name: "why", age: 18}), [])

  return (
    <div>
      <h2>计算结果: {result}</h2>
      <h2>计数器: {count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>

      <HelloWorld result={result} info={info} />
    </div>
  )
})

export default App