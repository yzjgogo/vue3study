<template>
  <div>ShowInfo: {{ name }}-{{ age }}</div>
  <button @click="showInfoBtnClick">showInfoButton</button>
</template>

<script setup>

// 语法糖4：定义属性
const props = defineProps({
  name: {
    type: String,
    default: "默认值"
  },
  age: {
    type: Number,
    default: 0
  }
})
console.log("看看属性数据",props.name,props.age)

// 语法糖5：定义并发送事件
const emits = defineEmits(["infoBtnClick"])
function showInfoBtnClick() {
  emits("infoBtnClick", "showInfo内部发生了点击")
}

function foo() {
  console.log("foo function")
}

// 语法糖6：使用<script setup>的组件(ShowInfo)默认是关闭的，在<script setup>中定义的任何声明、绑定、属性、变量、方法等默认都不会暴露到组件(ShowInfo)之外，因此你外部通过ref或$parent等获取的组件，访问不到其内部的数据，要想访问到，需在ShowInfo内部将对应数据暴露出去，例如这里的foo
defineExpose({
  foo
})

</script>

<style scoped>
</style>

