<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
  export default {
    // vue3中选项式API自定义局部指令的用法，用法与vue2类似,但是钩子函数不同
    directives: {
      focus: {
        //在自定义指令中，vue3的生命周期钩子函数与vue2有些不同
        //在vue3中，指令的生命周期钩子函数是：beforeMount、mounted、beforeUpdate、updated、beforeUnmount、unmounted ，应该是与所绑定的元素的生命周期钩子函数对应，
        //在vue2中，指令的生命周期钩子函数是：bind、inserted、update、componentUpdated、unbind
        mounted(el) {
          // console.log("v-focus应用的元素被挂载了", el)
          el?.focus()
        }
      }
    }
  }

</script>
<style scoped></style>
