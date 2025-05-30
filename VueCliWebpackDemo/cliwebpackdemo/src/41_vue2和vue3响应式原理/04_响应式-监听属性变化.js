
/*
本课程主要是解决上一个课程中，需要手动触发所有响应式函数的问题
解决思路：Object.defineProperty()监听对象属性的set函数，自动触发；其实vue2就是这么做的
*/

class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}


const obj = {
  name: "why",
  age: 18
}



// 设置一个专门执行响应式函数的一个函数
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

//通过变量所有key，实现监听所有属性的set函数，在set函数中执行dep.notify(),也就实现自动触发了
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})


// 方式二: new Proxy() -> Vue3


watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
  console.log("foo function")
})


watchFn(function bar() {
  console.log("bar:", obj.name + " hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

//name的set函数会执行，会自动触发notify方法，执行所有收集的响应式函数
console.log("name发生变化-----------------------")
obj.name = "kobe"

//age的set函数会执行，会自动触发notify方法，执行所有收集的响应式函数
console.log("age发生变化-----------------------")
obj.age = 20

console.log("name发生变化-----------------------")
obj.name = "james"

