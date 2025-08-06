import React, { memo, useId, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  //useId()生成的id能保证这个代码无论是运行在服务端还是在客户端，还是组件被多次渲染时，生成的id都是唯一且一致的
  //这设计到服务端渲染的概念(SSR),参考：hook_useId.jpg
  //当然你平时开发即使不涉及到服务端渲染，使用useId()生成唯一id也是个好习惯，避免id冲突

  //背景：无论vue还是react都是支持服务端渲染的，都有服务端渲染的api，且vue有框架nuxt，react有框架next

  //以后研究
  const id = useId()
  console.log(id)

  return (
    <div>
      <button onClick={e => setCount(count+1)}>count+1:{count}</button>

      <label htmlFor={id}>
        用户名:<input id={id} type="text" />
      </label>
    </div>
  )
})

export default App
