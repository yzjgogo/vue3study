/**
    redux用于管理数据
    redux不是react特有的，redux可以用于任何JavaScript项目中，甚至可以用到vue中
    
    redux_in_node是一个node项目：
    1：新建redux_in_node文件夹
    2:cd redux_in_node
    3:初始化npm项目：npm init -y
    4:安装redux：npm install redux
    5:新建src1文件夹
    6:cd src1
    7:执行 node 01_使用store中的数据.js 就可以运行了
 */
const store = require("./store")

console.log(store.getState())
