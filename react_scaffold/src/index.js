import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"

// import App from "./App"
// import App from './01_类组件和函数组件/App_class'
// import App from './01_类组件和函数组件/App_func'
// import App from './01_类组件和函数组件/函数组件和普通函数的区别'
// import App from "./02_组件生命周期函数/App"
// import App from "./03_组件开发嵌套关系/App"
// import App from "./04_组件通信-父传子/App"
// import App from "./05_组件通信-子传父/App"
// import App from "./06_组件通信案例练习/App"
// import App from "./07_组件的插槽实现/App"
// import App from "./08_组件作用域插槽/App"
// import App from "./09_非父子通信-Context/App"
// import App from "./11_setState详细使用/App"
// import App from "./12_1_render函数的优化-未优化的情况/App"
// import App from "./12_2_render函数的优化-PureComponent-memo/App"
// import App from "./13_数据不可变的力量-PureComponent使用时的注意事项/App"
// import App from "./14_1_ref获取dom和类组件/App"
// import App from "./14_2_ref获取函数组件里的dom获组件/App"
// import App from "./15_1_受控和非受控组件/App"
// import App from "./15_2_受控组件-form表单/App"
// import App from "./15_3_受控组件-form表单-checkbox单选多选/App"
// import App from "./15_4_受控组件-form表单-select单选多选/App"
// import App from "./15_5_非受控组件的使用/App"
// import App from "./16_React高阶组件/01_高阶组件的定义和作用"
// import App from "./16_React高阶组件/02_高阶组件应用-props增强"
// import App from "./16_React高阶组件/03_高阶组件应用-Context共享"
// import App from "./16_React高阶组件/04_高阶组件应用-登录鉴权"
// import App from "./16_React高阶组件/05_高阶组件应用-生命周期"
// import App from "./17_React的Portals/App"
// import App from "./18_React的fragment/App"
// import App from "./19_React的严格模式/App"
// import App from "./20_React的动画实现/01_CSSTransition动画/App"
// import App from "./20_React的动画实现/02_SwitchTransition/App"
// import App from "./20_React的动画实现/03_TransitionGroup/App"
// import App from "./21CSS_1_内联样式的CSS/App"
// import App from "./21CSS_2_普通的CSS写法/App"
// import App from "./21CSS_3_CSS_Modules/App"
// import App from "./21CSS_4_Less编写方式/App"
// import App from "./21CSS_5_CSS_in_js写法/App"
import App from "./21CSS_6_classnames库/App"
// import { StrictMode } from "react"

// 编写React代码, 并且通过React渲染出来对应的内容
const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App/>)
// CSS-in-JS使用步骤8:使用ThemeProvider组件来传递css数据，搜索CSS-in-JS使用步骤8-
//CSS-in-JS使用步骤8-1：ThemeProvider通过theme提供数据，ThemeProvider必须用在顶层？
/*
学CSS-in-JS把这里放开，把上面原来的注释掉
root.render(
    <ThemeProvider theme={{ color: "purple", size: "50px" }}>
      <App />
    </ThemeProvider>
);
*/
