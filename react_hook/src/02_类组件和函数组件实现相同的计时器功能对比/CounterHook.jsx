import { memo, useState } from "react";

// 普通的函数, 里面不能使用hooks
// 在自定义的hooks中, 可以使用react提供的其他hooks: 必须使用use开头
// function useFoo() {
//   const [ message ] = useState("Hello World")
//   return message
// }

/**
 hook使用注意事项：
 1：普通的js函数里不能使用hook，编译时就报错；
 2：react允许自定义hook函数，自定义的hook函数必须以use开头
 3：自定义的hook函数中可以使用别的hook函数。
 */

function CounterHook(props) {
  //hook用法步骤1：以useState为例，const arr = useState(初始值),参数是本次要定义的状态的默认值，返回值是一个有两个元素的数组？第一个元素就是当前的状态值，第二个元素使用于修改这个状态的函数；这里通过结构把arr[0]赋值给counter，arr[1]赋值给setCounter
  const [counter, setCounter] = useState(0)
  const [name] = useState("why")//一样的用法
  console.log(name)

  // const message = useFoo()

  return (
    <div>
      {/* hook用法步骤2：读取状态值 */}
      <h2>当前计数: {counter}</h2>
      
      {/* hook用法步骤2：修改状态值 */}
      <button onClick={e => setCounter(counter+1)}>+1</button>
      <button onClick={e => setCounter(counter-1)}>-1</button>
    </div>
  )
}

export default memo(CounterHook)

