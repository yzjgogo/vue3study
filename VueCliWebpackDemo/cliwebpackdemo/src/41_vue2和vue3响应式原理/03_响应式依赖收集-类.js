/*
  解决上一个课程中的弊端：所有对象的属性变化都存放到唯一的一个容器reactiveFns

  解决思路：我们可以定义一个类Depend，这个类中有一个容器reactiveFns，当我们需要监听obj对象的属性变化时，我们就创建一个Depend的实例，然后把obj对象需要响应式执行的函数存放到这个实例的reactiveFns中，当我们需要监听cat对象的属性变化时，我们就创建一个新的Depend实例，把cat对象需要响应式执行的函数存放到这个实例的reactiveFns中，这样就可以避免不必要的函数执行；
*/

// 1：创建一个类，类中定义一个容器reactiveFns用于存放所有有关联的响应式函数
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  //响应式函数收集器
  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  //属性变化后，执行所有该类的实例收集的响应式函数
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


//2：创建dep实例，专门供obj对象的响应式函数使用
const dep = new Depend()

//3:设置一个专门执行响应式函数的一个函数,这个函数会向dep实例的reactiveFns中添加响应式函数，同样立即执行一次
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}

//4：收集foo函数
watchFn(function foo() {
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
  console.log("foo function")
})


//5：收集bar函数
watchFn(function bar() {
  console.log("bar:", obj.name + " hello")
  console.log("bar:", obj.age + 10)
  console.log("bar function")
})

// 修改obj的属性,手动调用notify方法，执行所有收集的响应式函数,这里还是手动执行，下一课程介绍自动触发执行
console.log("name发生变化-----------------------")
obj.name = "kobe"
dep.notify()

console.log("age发生变化-----------------------")
dep.notify()

console.log("name发生变化-----------------------")
obj.name = "james"
