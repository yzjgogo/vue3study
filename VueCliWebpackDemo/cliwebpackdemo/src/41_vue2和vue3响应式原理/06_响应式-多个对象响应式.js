class Depend {
  constructor() {
    this.reactiveFns = new Set()
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.add(fn)
    }
  }

  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}


let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}


const objMap = new WeakMap()
function getDepend(obj, key) {
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}

/*
  看看这里想不想vue3的reactive函数
  这个reactive其实就是很对对象的get，set函数进行劫持处理成响应式对象，再返回出去，
  这样任意对象调用这个方法都可以成为响应式对象了
*/
function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
  
    Object.defineProperty(obj, key, {
      set: function(newValue) {
        value = newValue
        const dep = getDepend(obj, key)
        dep.notify()
      },
      get: function() {
        // 拿到obj -> key
        // console.log("get函数中:", obj, key)
        // 找到对应的obj对象的key对应的dep对象
        const dep = getDepend(obj, key)
        // dep.addDepend(reactiveFn)
        dep.depend()
  
        return value
      }
    })
  })  
  return obj
}



// ========================= 业务代码 ========================
/*
把
{
  name: "why",
  age: 18,
  address: "广州市"
}
  处理成响应式对象

*/
const obj = reactive({
  name: "why",
  age: 18,
  address: "广州市"
})

//逻辑跟上一个课程一样
watchFn(function() {
  console.log(obj.name)
  console.log(obj.age)
  console.log(obj.age)
})

// 修改name
console.log("--------------")
// obj.name = "kobe"
obj.age = 20
// obj.address = "上海市"


console.log("=============== user =================")
const user = reactive({
  nickname: "abc",
  level: 100
})

watchFn(function() {
  console.log("nickname:", user.nickname)
  console.log("level:", user.level)
})

user.nickname = "cba"

