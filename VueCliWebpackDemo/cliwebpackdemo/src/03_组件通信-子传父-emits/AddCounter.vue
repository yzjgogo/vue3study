<template>
  <div class="add">
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
  export default {
    //不写emits也是可以的，写emits主要是方便外部使用该组件时可以有代码提示，例如输入@就提示该组件有哪些事件了
    // 1.emits数组语法，只列出事件，不进行事件验证
    // emits: ["add"],
    // 2.emmits对象语法，列出事件的同时，可以对事件进行验证，要强调的时，无论，返回true还是false，都不会影响或阻拦事件的发送，只是返回false时，会在F12控制台输出一个警告：“runtime-core.esm-bundler.js:183 [Vue warn]: Invalid event arguments: event validation failed for event "add".”，方便开发者跟踪问题。
    emits: {
      add: function(count) {
        if (count <= 10) {
          return true
        }
        return false
      }
    },
    methods: {
      btnClick(count) {
        console.log("btnClick:", count)
        this.$emit("add", count)
      }
    }
  }
</script>

<style scoped>
</style>


