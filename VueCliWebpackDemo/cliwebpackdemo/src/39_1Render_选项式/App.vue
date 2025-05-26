
<!-- 
 render函数：
 其实最终template标签里的内容会被编译成render函数，因此我们可以直接使用render函数来编写组件的渲染逻辑。
 在render函数中，我们可以使用h函数来创建虚拟DOM节点。h函数其实就是createVNode函数的别名。
 h('标签名', {属性对象}, [子节点数组])
 属性对象：{class:'content-box'} //其中class一般写成className
 子节点数组：可以是字符串、虚拟DOM节点或组件实例等。如果是字符串，则会被当作文本节点处理，例如<div>aaaa</div><h1>aaa</h1>中的aaa,如果是dom节点或组件则就是当前标签的子标签。

 可以看到，使用h函数创建布局，比较复杂，不好理解，以后会有jsx代替的。
  -->

<script>
import { h } from 'vue'
import Home from './Home.vue'

export default {
  data() {
    return {
      counter: 0
    }
  },

  render() {
    return h('div', { className: 'app' }, [
      h('h2', null, `当前计数: ${this.counter}`),
      h('button', { onClick: this.increment }, '+1'),
      h('button', { onClick: this.decrement }, '-1'),
      h(Home)
    ])
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}
</script>

<style scoped></style>
