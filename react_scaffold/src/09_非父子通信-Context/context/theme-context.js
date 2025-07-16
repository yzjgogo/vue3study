import React from "react"
import { createContext } from "react";//也可以直接解构出createContext

// Context使用步骤1：创建一个Context,可传入默认值，如果某个组件(Profile)在引用时没有被ThemeContext.Provider包裹，在Profile里又想使用ThemeContext的数据，则Profile会使用这个默认值，参考：Profile.jsx
const ThemeContext = React.createContext({ color: "blue", size: 10 })
// const ThemeContext1 = createContext({ color: "blue", size: 10 })

export default ThemeContext
