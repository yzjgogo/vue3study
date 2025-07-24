import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContext, ThemeContext } from "./05_useContext的使用/context"

// import { UserContext, TokenContext } from "./12_自定义Hooks/context"
// import App from './01_不使用Hook_类组件和函数组件各自的优缺点/App';
// import App from "./02_类组件和函数组件实现相同的计时器功能对比/App"
// import App from "./03_useState的使用/App"
// import App from "./04_useEffect的使用/01_修改标题-class实现"
// import App from "./04_useEffect的使用/02_修改标题-hook实现"
// import App from "./04_useEffect的使用/03_清除机制-返回回调函数"
// import App from "./04_useEffect的使用/05_逻辑分离-多个Effect"
// import App from "./05_useContext的使用/App"
// import App from "./06_useReducer的使用(了解)/App"
// import App from "./07_useCallback_useRef的使用/App"
// import App from "./08_useMemo的使用/App"
// import App from "./09_useRef的使用/01_useRef绑定DOM"
// import App from "./10_useImperativeHandle/App"
// import App from "./11_useLayoutEffect使用/01_layoutEffect和Effect时机"
// import App from "./12_自定义Hooks/01_自定义hook介绍_打印生命周期"
import App from "./12_自定义Hooks/02_Context获取数据"

const root = ReactDOM.createRoot(document.getElementById('root'));
// /*
root.render(
    <App />
);
// */

/*
学习“E:\web\vue3\vue3study\react_hook\src\05_useContext的使用”的时候使用这个
//useContext使用步骤2：通过context的Provider提供全局的数据
root.render(
  <UserContext.Provider value={{name: "why", level: 99}}>
    <ThemeContext.Provider value={{color: "red", size: 30}}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
);
*/

/*
学习“E:\web\vue3\vue3study\react_hook\src\12_自定义Hooks\02_Context获取数据.jsx”时使用
root.render(
  <UserContext.Provider value={{name: "why", level: 99}}>
    <TokenContext.Provider value={'coderwhy'}>
      <App />
    </TokenContext.Provider>
  </UserContext.Provider>
);
*/