<!-- 
参考签名的Render函数，也是不需要template标签
提供比h函数更易理解，更接近html标签的语法，
所谓jsx，就是javascript extension，JSX是JavaScript的一个语法扩展，它允许我们在JavaScript代码中直接编写类似HTML的标签语法。 

vue中jsx用的比较少，react中用的比较多,后面讲react时会详细介绍jsx的用法


学习的时候，教程里说jsx需要做如图‘jsx配置.jpeg’的配置，但是我没配置也执行成功了呢，以后留意下这个配置，参考：jsx配置.jpeg

-->

<script lang="jsx">
  export default {
    //可以看到render函数返回的内容和html标签非常相似，写起来比h函数方便多了
    render() {
      return (
        <div class="app">
          <h2>我是标题</h2>
          <p>我是内容, 哈哈哈</p>
        </div>
      )
    }
  }
</script>

<style lang="less" scoped>

</style>
