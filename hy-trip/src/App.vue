
<template>
  <div class="item">1：当使用npm时发现很慢，卡着不动时，参考：npm加速.md
    主要是可以考虑使用淘宝的npm镜像：npm config set registry https://registry.npmmirror.com/</div>

    <div class="item">2：项目的创建过程参考：D:\vue3\vue3study\vue3study\vite_demo\public\注释.txt
      创建项目时的选项有一个'Vue DevTools 7 extension',研究下怎么用的。 参考：创建项目的选项.png</div>

    <div class="item">3：修改浏览图标签图标favicon.ico，在vue3study\hy-trip\public\favicon.ico下面，可以用一个图片，在百度搜索生成ico就可以自己弄个ico了。</div>

    <div class="item">4：修改网页标题：vue3study\hy-trip\index.html 里的title标签</div>

    <div class="item">5：如果创建的项目没有生成jsconfig.json，可以从vue3study\VueCliWebpackDemo\cliwebpackdemo\jsconfig.json复制过来，这样vscode有很好的支持？</div>

    <div class="item">
      6:安装normalize.css <br>
      <span>
        normalize.css可以让所有浏览器的样式保持一致性；github地址：https://github.com/necolas/normalize.css <br>
        1-1:可以npm install --save normalize.css;<br>
        1-2：也可以直接把normalize.css下载下来放到项目里；<br>
        2：在main.js里引入：import 'normalize.css'
      </span><br>
        配置reset.css 和 common.css <br>
        reset.css也是用来去掉一些标签自带的不太合适的样式;<br>
        common.css用于定义写项目必须用到的功能的样式<br>
        然后咱们可以定义一个index.css，在index.css里把reset.css和common.css都引进来，这样在main.js里只需要import "./assets/css/index.css"即可把reset.css和common.css引进来了
      </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.item{
  margin-top: 10px;
}
</style>
