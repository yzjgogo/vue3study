/**
  * 1.dep对象数据结构的管理(最难理解)
    * 每一个对象的每一个属性都会对应一个dep对象
    * 同一个对象的多个属性的dep对象是存放一个map对象A中，mapA =objA.name:dep1）(objA.age:dep2),mapB = (objB.name:dep3)(objB.address:dep4)
    * 多个对象的map对象A, 会被存放到一个objMap的对象中,objMap = (objA:mapA)(objB:mapB)
  * 2.依赖收集: 当执行get函数, 自动的添加fn函数
 */

// 1:定义Depend类，供每一个对象的每一个属性使用，每一个对象的每一个属性都会对应一个Depend对象，Depend对象中的reactiveFns存放所有针对这个属性的待响应式函数
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

//2: 假设有一个obj对象，还有更多的cat,dog,person等对象
const obj = {
  name: "why",
  age: 18
}



/*
  3:watchFn用于收集所有的函数，这个函数可以关联任意对象的任意属性，这个函数的责任并不是把函数和对象属性关联，而是当执行watchFn时，先给reactiveFn赋值，此时reactiveFn有值了，紧接着立刻执行一次(一般响应式函数都会立刻执行一次的)，一旦fn()执行了一次，如果fn中引用了obj.name属性，则就会触发obj.name的get函数，get函数中就会根据obj和obj.name找对应的Depend对象dep,然后就可以dep.addDepend(reactiveFn)了，这就是给reactiveFn赋值的作用，待fn()执行完毕后，reactiveFn又被置为null，等待下次被赋值使用
*/
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}


/*

objMap：(obj,obj.所有属性map)(cat,cat.所有属性map)(dog,dog.所有属性map)(person,person.所有属性map)
obj.所有属性map: (obj.name:dep1)(obj.age:dep2)
cat.所有属性map: (cat.name:dep3)(cat.age:dep4)
dog.所有属性map: (dog.name:dep5)(dog.age:dep6)

objMap以对象作为key，value是这个对象的所有属性映射dep的map对象
对象的所有属性映射dep的map对象：对应的一个属性对应一个dep对象，这个dep对象中存放着所有针对这个属性的待响应式函数
*/
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 1.根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {//找不对就新建，找到就直接用
    map = new Map()
    objMap.set(obj, map)
  }

  // 2.根据key, 找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}


// 方案一: Object.defineProperty() -> Vue2
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    set: function(newValue) {
      value = newValue
      //get时这个属性的dep已经收集了待相应式函数，此时执行set函数，触发依赖收集
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get: function() {
      // 拿到obj -> key
      // console.log("get函数中:", obj, key)
      // 找到对应的obj对象的key对应的dep对象
      const dep = getDepend(obj, key)
      dep.addDepend(reactiveFn)

      return value
    }
  })
})


// 4，执行watchFn,看3的逻辑，可以因为调用了obj.name和obj.age，所以obj.name和obj.age的get函数会被调用，obj.name和obj.age对应的dep对象，会把这个foo收集起来。待响应时(执行set)执行

watchFn(function foo() {
  console.log("foo function")
  console.log("foo:", obj.name)
  console.log("foo", obj.age)
}),
watchFn(function bar() {
  console.log("bar function")
  console.log("bar:", obj.age + 10)
})


//模拟重复收集函数，解决办法：把Depend中的reactiveFns改为set类型即可
// watchFn(function bar() {
//   console.log("bar function")
//   console.log("bar:", obj.age + 11)
// })

// 修改obj的属性
// console.log("name发生变化-----------------------")
// obj.name = "kobe"
console.log("age发生变化-----------------------")
obj.age = 20


