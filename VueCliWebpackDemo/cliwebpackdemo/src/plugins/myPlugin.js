
// 插件使用步骤1:根据需要定义一个插件对象
export default {
  install: (app, options) => {
    // 在这里编写插件代码
    console.log('插件被安装了', app, options)

    //这里我们添加一个全局的方法
    app.config.globalProperties.$doMyLog = function (params) {
      console.log('这是插件的全局方法', params)
    }

    //这里我们通过provide添加数据给整个应用使用
    app.provide('myGlobalData', options)
  }
}
