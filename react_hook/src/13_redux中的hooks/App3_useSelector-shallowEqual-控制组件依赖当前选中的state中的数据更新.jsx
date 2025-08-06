import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { addNumberAction, changeMessageAction, subNumberAction } from './store/modules/counter'


const Home = memo((props) => {
  //如果使用useSelector时不加第二个参数shallowEqual，则每次redux中的state的任何数据发生变化时，Home组件都会重新渲染。例如改变了App组件中的计数器，Home组件也会重新渲染。使用shallowEqual后，Home组件只会在message数据发生变化时才会重新渲染。但是要配合memo使用?
  const { message } = useSelector((state) => ({
    message: state.counter.message
  }), shallowEqual)

  const dispatch = useDispatch()
  function changeMessageHandle() {
    dispatch(changeMessageAction("你好啊, 师姐!"))
  }

  console.log("Home render")

  return (
    <div>
      <h2>Home: {message}</h2>
      <button onClick={e => changeMessageHandle()}>修改message</button>
    </div>
  )
})


const App = memo((props) => {
  // 1.shallowEqual:只有当state.counter.count数据发生变化时，才会重新渲染App组件,state.counter.message发生变化不会重新渲染
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }), shallowEqual)

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch()
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  console.log("App render")

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(6)}>+6</button>
      <button onClick={e => addNumberHandle(6, false)}>-6</button>

      <Home/>
    </div>
  )
})

export default App
