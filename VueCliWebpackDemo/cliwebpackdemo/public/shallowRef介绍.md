在Vue 3中，`shallowRef`是Composition API的一部分，用于创建一个浅层响应式的引用。与`ref`相比，`shallowRef`不会使其值变成深层响应式对象。这意味着，如果`shallowRef`的值是一个对象，那么这个对象的属性不会被转换为响应式的；只有这个对象本身的引用更改时，才会触发更新。这可以在处理大型对象或者不需要其属性为响应式的情况下提高性能。

### 基本用法

```javascript
import { shallowRef, watchEffect } from 'vue';

const obj = shallowRef({ count: 0 });

watchEffect(() => {
  console.log(obj.value.count); // 当obj.value被更改时触发，但obj.value.count的更改不会触发
});

obj.value.count++; // 不会触发watchEffect，因为shallowRef不会使其值的属性成为响应式
obj.value = { count: 1 }; // 会触发watchEffect，因为obj.value被更改了
```

### 何时使用`shallowRef`

- **性能考虑**：当你有一个大型对象，并且不需要这个对象内部的属性变成响应式时，使用`shallowRef`可以避免深层响应式转换的开销。
- **特定场景下的状态管理**：在某些情况下，你可能只关心对象引用的变化，而不关心对象内部属性的变化，这时`shallowRef`是一个合适的选择。

### 与`ref`的比较

`ref`会将其值转换为深层响应式对象，这意味着无论是值本身还是值的任何嵌套属性的更改，都会触发视图更新。相比之下，`shallowRef`仅在值本身的引用更改时触发更新，其值的属性更改不会触发更新。

### 示例：使用`shallowRef`更新组件

假设你有一个组件，这个组件接收一个对象作为prop，并且你希望只在整个对象被更换时更新视图：

```javascript
import { shallowRef } from 'vue';

export default {
  setup() {
    const userProfile = shallowRef({ name: 'John', age: 30 });

    // 假设后续有一个操作更换了userProfile的值
    setTimeout(() => {
      userProfile.value = { name: 'Jane', age: 25 }; // 这会触发与userProfile相关的视图更新
    }, 2000);

    return { userProfile };
  }
}
```

在这个示例中，即使`userProfile`的属性（如`name`或`age`）变化，也不会触发更新，只有当`userProfile`的整个值被更换时，才会触发视图更新。

`shallowRef`是Vue 3提供的一个非常实用的API，特别适用于处理大型对象或者当你只关心引用变化时的场景。通过合理使用`shallowRef`，你可以优化你的应用性能，避免不必要的响应式转换开销。