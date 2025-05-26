export default function directiveFocus(app) {
  app.directive('gfocus', {
    //在自定义指令中，vue3的生命周期钩子函数与vue2有些不同
    //在vue3中，指令的生命周期钩子函数是：beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted ，应该是与所绑定的元素的生命周期钩子函数对应，
    //在vue2中，指令的生命周期钩子函数是：bind、inserted、update、componentUpdated、unbind
    mounted(el) {
      el?.focus()
    }
  })
}
