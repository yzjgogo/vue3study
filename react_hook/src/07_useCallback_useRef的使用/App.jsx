import React, { memo, useState, useCallback, useRef } from 'react'

/*
  这个案例讨论如何在父组件发生重新渲染时，如何避免某个子组件重新渲染的问题；

  这里就是如何在App重新渲染时，避免HYHome重新渲染的问题；

  看下面一步步演变即可
*/
const HYHome = memo(function(props) {
  const { increment } = props
  console.log("HYHome被渲染")
  return (
    <div>
      <button onClick={increment}>increment+1</button>

      {/* 100个子组件 */}
    </div>
  )
})

const App = memo(function() {
  console.log("App组件被渲染")
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("hello")

  /*
  
  情况1：普通的函数，每次组件重新渲染时，都是一个新的和上次不同的increment函数,而HYHome依赖这个函数，这个函数发生变化会触发HYHome的重新渲染
  因此count和message的改变都会触发App的重新渲染，从而产生新的increment函数，导致HYHome也会被重新渲染；

  这种情况，目的没有达到，会出发HYHome的重新渲染
  */ 
  // const increment = () => {
  //   setCount(count+1)
  // }

  /**
    情况2,使用useCallback,但是不传第2个参数
    这种情况实际上和“情况1”一样，此时，因为没有传第2个参数，任何state,例如count和message发生改变，都会触发App重绘，产生新的foo，从而产生新的increament函数，从而触发HYHome的重新渲染；

    这种情况，目的没有达到，会出发HYHome的重新渲染
   */
  // const increment = useCallback(function foo() {
  //   console.log("increment")
  //   setCount(count+1)
  // })

  /***
   
  情况3: 使用useCallback,且第二个参数传入一个空数组：表示无论任何状态发生改变，例如这里的count和message，foo都是原始的那一个，useCallback都会返回原始的同一个函数
  这种情况虽然不会导致HYHome的重新渲染，但是存在闭包陷阱的问题：第一次时我们点击“+1”按钮，会调用foo使count变为1；且触发App重新渲染，以后每次点击“+1”按钮,因为此时useCallback的第二个参数是空数组
  导致每次调用的increment函数最终都是调用最初始的那个foo函数，而最原始的那个foo里使用的count都是最初初始的count值0，因此每次点击“+1”按钮，count都只是从0增加1，而不是预期的2；
  
  参考下面注释掉的闭包陷阱演示

  这种情况，虽然不会出发HYHome的重新渲染，但是存在闭包陷阱，因此目的没有达到
   
   */
  // const increment = useCallback(function foo() {
  //   console.log("increment")
  //   setCount(count+1)
  // }, [])

  /**
   
  情况4：对比“情况3”，useCallback的第二个参数传入[count]，表示increment函数依赖于count变量，只有当count发生变化时才会在App重绘时产生新的increment函数,否则例如message发生变化即使App重绘了，但是useCallback依然会返回原来的increment函数；

  因此这时候，count改变时会触发HYHome的重新渲染,message改变时不会触发HYHome的重新渲染；
  且这种情况不存在闭包陷阱的问题，因为每次点击“+1”按钮，increment函数都是最新的foo函数，foo函数内部使用的count也是最新的count值；

  这种情况，如果count没有变化则不会触发HYHome的重新渲染，但是count变化了还是会触发HYHome的重新渲染，目的没有最终达到

  */
  // const increment = useCallback(function foo() {
  //   console.log("increment")
  //   setCount(count+1)
  // }, [count])


  /*
  情况5：最终方案；无论任何状态发生改变都不触发HYHome的重新渲染且不存在闭包陷阱，相当于“情况3”的完善版本,解决了“情况3”的闭包陷阱问题
  使用useRef()：useRef()的作用就是无论组件重新渲染多少次，useRef()返回的对象都是同一个，那么我们可以利用对象的原理（对象是同一个，但是对象的某个属性可以改变）
  */
  const countRef = useRef()//每次App重新渲染countRef都是同一个对象
  countRef.current = count//每次App重新渲染时，更新countRef.current的值为最新的count值
  const increment = useCallback(function foo() {
    console.log("increment")
    setCount(countRef.current + 1)//每次修改count都是在最新count值的基础上修改，解决了闭包陷阱
  }, [])//第二个参数是空数组，表示increment函数不依赖于任何变量，因此无论count和message发生变化都不会触发HYHome的重新渲染

  return (
    <div>
      <h2>计数: {count}</h2>
      <button onClick={increment}>+1</button>

      {/* <HYHome increment={increment}/> */}
      <HYHome increment={increment}/>

      <h2>message:{message}</h2>
      <button onClick={e => setMessage(Math.random())}>修改message</button>
    </div>
  )
})

//闭包陷阱演示

// function foo(name) {
//   function bar() {
//     console.log(name)
//   }
//   return bar
// }

// const bar1 = foo("why")
// bar1() // why
// bar1() // why

// const bar2 = foo("kobe")
// bar2() // kobe

// bar1() // why

export default App