// 此时还没有做到响应式，这段代码表示我们希望在num或obj发生变化时，能够自动执行相关的函数

let num = 100

console.log(num * 2)
console.log(num * num)

//num变化，希望上面引用了num的两个log能响应式执行，此处不会执行
num = 200


// 对象的响应式
const obj = {
  name: "why",
  age: 18
}

function foo() {
  console.log(obj.name)
  console.log(obj.age)
}


function bar() {
  console.log(obj.age + 100)
}

// 修改obj对象，对象变化希望上面使用了obj.name和obj.age的函数能够响应式执行，此处不会执行
obj.name = "kobe"
obj.age = 20


// 看下一个，怎么实现响应式的
