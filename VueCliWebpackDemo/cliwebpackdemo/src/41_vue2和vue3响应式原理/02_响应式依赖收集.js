
// 思路，我们打算定义一个容器，把所有需要响应的函数都收集起来，这样当依赖的属性发生变化时，我们就可以遍历这个容器，执行所有的函数
//弊端：使用一个容器存放所有对象依赖的响应式函数式不合理的，例如还有对象dog,cat等，当obj的某个属性发生变化时，dog和cat的响应式函数也会被执行，这样就会导致不必要的函数执行，参考下一个课程解决

const obj = {
  name: "why",
  age: 18
}



//1:定义reactiveFns用于存放所有响应式函数
const reactiveFns = []
//2:定义一个专门执行响应式函数的一个函数watchFn,watchFn会将传入的函数fn存放到reactiveFns中，并立即执行一次fn
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()//一般都要求立即执行一次
}

//3,foo依赖obj.name和obj.age,因此可以把foo函数存放到reactiveFns中
watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
  console.log("foo function")
})

//4,bar依赖obj.name和obj.age,因此可以把bar函数存放到reactiveFns中
watchFn(function bar() {
  console.log("bar:", obj.name + " hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

//5,模拟修改obj的属性
console.log("name发生变化-----------------------")
obj.name = "kobe"
//6，属性变化后，手动执行reactiveFns中的所有函数，这里的手动不好，后面有办法监测到属性变化后可以自动触发执行
reactiveFns.forEach(fn => {
  fn()
})

