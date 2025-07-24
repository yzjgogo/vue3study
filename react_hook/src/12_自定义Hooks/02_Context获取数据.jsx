import React, { memo } from 'react'
import { useUserToken } from "./hooks"

/*
自定义hook：useUserToken()
看：E:\web\vue3\vue3study\react_hook\src\12_自定义Hooks\hooks\useUserToken.js
*/

const Home = memo(() => {
  const [user, token] = useUserToken()

  return <h1>Home Page: {user.name}-{token}</h1>
})

const About = memo(() => {
  const [user, token] = useUserToken()

  return <h1>About Page: {user.name}-{token}</h1>
})

const App = memo(() => {
  return (
    <div>
      <h1>App Root Component</h1>
      <Home/>
      <About/>
    </div>
  )
})

export default App
