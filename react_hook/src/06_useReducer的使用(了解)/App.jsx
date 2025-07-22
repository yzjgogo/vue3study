import React, { memo, useReducer } from 'react'
// import { useState } from 'react'

//数据比较多时情况2
function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 }
    case "decrement":
      return { ...state, counter: state.counter - 1 }
    case "add_number":
      return { ...state, counter: state.counter + action.num }
    case "sub_number":
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

/*
  当要维护的数据(state)比较简单时，使用useState就可以了
  当要维护的数据(state)比较复杂比较多时，使用useReducer更合适，用法类似之前的redux
*/

const App = memo(() => {
  //数据比较少时情况1
  // const [count, setCount] = useState(0)

  //数据比较多时情况1，useReducer的第二个参数是初始值；如果还使用useState的话，代码会变得很复杂
  const [state, dispatch] = useReducer(reducer, { counter: 0, friends: [], user: {} })
  // const [counter, setCounter] = useState()
  // const [friends, setFriends] = useState()
  // const [user, setUser] = useState()

  return (
    <div>
      {/* 数据比较少时情况2 */}
      {/* <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count+1)}>+1</button>
      <button onClick={e => setCount(count-1)}>-1</button>
      <button onClick={e => setCount(count+5)}>+5</button>
      <button onClick={e => setCount(count-5)}>-5</button>
      <button onClick={e => setCount(count+100)}>+100</button> */}

      {/* 数据比较多时情况3 */}
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({type: "increment"})}>+1</button>
      <button onClick={e => dispatch({type: "decrement"})}>-1</button>
      <button onClick={e => dispatch({type: "add_number", num: 5})}>+5</button>
      <button onClick={e => dispatch({type: "sub_number", num: 5})}>-5</button>
      <button onClick={e => dispatch({type: "add_number", num: 100})}>+100</button>
    </div>
  )
})

export default App