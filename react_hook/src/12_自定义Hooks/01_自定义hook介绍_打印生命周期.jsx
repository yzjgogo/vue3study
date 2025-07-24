import React, { memo, useEffect, useState } from 'react'
/**
  别把自己定hook想的那么复制，自定义hook就是一个以use开头的函数，就是单纯的代码抽离服用，无他
  例如：useAbc(){} 这就是一个自定义hook

  1：自定义hook以use开头；
  2：自定义hook里可以使用其他的hook；


  下面定义的useLogLife就是一个自定义hook，它的作用是打印组件的创建和销毁信息；
 */
function useLogLife(cName) {
  useEffect(() => {
    console.log(cName + "组件被创建")
    return () => {
      console.log(cName + "组件被销毁")
    }
  }, [cName])
}

const Home = memo(() => {
  useLogLife("home")

  return <h1>Home Page</h1>
})

const About = memo(() => {
  useLogLife("about")

  return <h1>About Page</h1>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  useLogLife("app")

  return (
    <div>
      <h1>App Root Component</h1>
      <button onClick={e => setIsShow(!isShow)}>切换</button>
      { isShow && <Home/> }
      { isShow && <About/> }
    </div>
  )
})

export default App
