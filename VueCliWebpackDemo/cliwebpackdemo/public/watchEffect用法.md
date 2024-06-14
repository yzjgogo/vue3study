Vue 3 引入了 Composition API，其中包括一个非常强大的功能——`watchEffect`。`watchEffect`函数用于立即执行一个函数，并响应式地追踪其依赖，并在其依赖变化时重新执行。

### 基本用法

在`watchEffect`的回调函数中访问的响应式状态（reactive state）会被追踪，当这些状态变化时，`watchEffect`会再次执行。

```javascript
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)

    watchEffect(() => {
      console.log(count.value)
    })

    return { count }
  }
}
```

在上面的例子中，每当`count`的值变化时，`watchEffect`里面的回调函数就会执行。

### 清理副作用

`watchEffect`接受的回调函数可以返回一个清理函数，该函数会在回调函数重新执行之前以及组件卸载之前执行。这对于取消异步操作或清理资源非常有用。

```javascript
watchEffect((onInvalidate) => {
  const timer = setTimeout(() => {
    // 做些异步操作
  }, 1000)
  
  onInvalidate(() => {
    clearTimeout(timer)
  })
})
```

### 停止监听

`watchEffect`函数执行后会返回一个停止监听的函数，调用这个函数可以停止对响应式状态的追踪。

```javascript
const stop = watchEffect(() => {
  console.log(count.value)
})

// 停止追踪
stop()
```

### 延迟执行

`watchEffect`的第二个参数是一个对象，可以通过设置`flush`属性来控制回调函数的执行时机。`flush`的可选值有`'pre'`、`'post'`和`'sync'`。

- `'pre'`（默认）：回调会在浏览器执行绘制之前执行。
- `'post'`：回调会在浏览器执行绘制之后执行。
- `'sync'`：回调会同步执行，不等待浏览器绘制。

```javascript
watchEffect(() => {
  // 响应式状态变化时的操作
}, { flush: 'post' })
```

### 使用场景

`watchEffect`适用于需要自动追踪响应式状态变化并执行副作用的场景。相比于`watch`，它不需要明确指定依赖项，Vue会自动追踪回调函数中使用的响应式状态。这使得`watchEffect`在很多情况下更方便和强大，尤其是当你需要根据多个状态变化执行操作时。