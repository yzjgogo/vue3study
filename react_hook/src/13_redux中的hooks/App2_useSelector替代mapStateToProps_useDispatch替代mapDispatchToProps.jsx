import React, { memo } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addNumberAction, subNumberAction } from './store/modules/counter'
/**
  介绍两个hook：
  1. useSelector: 替代connect的mapStateToProps
  2. useDispatch: 替代connect的mapDispatchToProps
  对比react_hook\src\13_redux中的hooks\App1_老的mapStateToProps和mapDispatchToProps用法回顾.jsx
 */
const App = memo((props) => {
  // 1.使用useSelector将redux中store的数据映射到组件内,对比之前的connect的mapStateToProps
  const { count } = useSelector((state) => ({
    count: state.counter.count
  }))

  // 2.使用dispatch直接派发action，对比之前的connect的mapDispatchToProps
  const dispatch = useDispatch()
  function addNumberHandle(num, isAdd = true) {
    if (isAdd) {
      dispatch(addNumberAction(num))
    } else {
      dispatch(subNumberAction(num))
    }
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => addNumberHandle(1)}>+1</button>
      <button onClick={e => addNumberHandle(6)}>+6</button>
      <button onClick={e => addNumberHandle(6, false)}>-6</button>
    </div>
  )
})
//这里也不需要使用connect函数了，因为我们已经使用了useSelector和useDispatch来替代了mapStateToProps和mapDispatchToProps,connect函数的作用是将redux的state和dispatch映射到组件的props中，所以这里不再需要
export default App
