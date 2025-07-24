import React, { memo } from 'react'
import useScrollPosition from './hooks/useScrollPosition'
import "./style.css"
/*
  自定义hook:useScrollPosition()
  看：E:\web\vue3\vue3study\react_hook\src\12_自定义Hooks\hooks\useScrollPosition.js
  这个useScrollPosition()好好看一下，涉及到添加监听和移除监听，已经
*/
const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()

  return <h1>Home Page: {scrollX}-{scrollY}</h1>
})

const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition()

  return <h1>About Page: {scrollX}-{scrollY}</h1>
})

const App = memo(() => {
  return (
    <div className='app'>
      <h1>App Root Component</h1>
      <Home/>
      <About/>
    </div>
  )
})

export default App
