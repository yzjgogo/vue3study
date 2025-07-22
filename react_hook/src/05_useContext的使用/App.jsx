import React, { memo, useContext } from 'react'
import { UserContext, ThemeContext } from "./context"
/**
  参考：E:\web\vue3\vue3study\react_scaffold\src\09_非父子通信-Context
  类组件中使用context的方式

  课件useContext这种方式使用非常简单
 */
const App = memo(() => {
  // //useContext使用步骤3：通过useContext这个hook获取context实例
  const user = useContext(UserContext)
  const theme = useContext(ThemeContext)

  return (
    <div>
      {/* useContext使用步骤4：使用context实例的数据 */}
      <h2>User: {user.name}-{user.level}</h2>
      <h2 style={{color: theme.color, fontSize: theme.size}}>Theme</h2>
    </div>
  )
})

export default App