import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01_不使用Hook_类组件和函数组件各自的优缺点/App';
import App from "./02_类组件和函数组件实现相同的计时器功能对比/App"
// import App from "./03_useState的使用/App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);