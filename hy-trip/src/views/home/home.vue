<template>
  <div class="home">

    <div class="item bg1">1：当使用npm时发现很慢，卡着不动时，参考：npm加速.md
      主要是可以考虑使用淘宝的npm镜像：npm config set registry https://registry.npmmirror.com/</div>


    <div class="item bg2">2：项目的创建过程参考：D:\vue3\vue3study\vue3study\vite_demo\public\注释.txt
      创建项目时的选项有一个'Vue DevTools 7 extension',研究下怎么用的。 参考：创建项目的选项.png</div>


    <div class="item bg1">3：修改浏览图标签图标favicon.ico，在vue3study\hy-trip\public\favicon.ico下面，可以用一个图片，在百度搜索生成ico就可以自己弄个ico了。
    </div>


    <div class="item bg2">4：修改网页标题：vue3study\hy-trip\index.html 里的title标签</div>


    <div class="item bg1">
      5：如果创建的项目没有生成jsconfig.json，可以从vue3study\VueCliWebpackDemo\cliwebpackdemo\jsconfig.json复制过来，这样vscode有很好的支持？</div>


    <div class="item bg2">
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
      然后咱们可以定义一个index.css，在index.css里把reset.css和common.css都引进来，这样在main.js里只需要import
      "./assets/css/index.css"即可把reset.css和common.css引进来了
    </div>



    <div class="item bg1">
      <div>7:vite构建的项目怎么加载本地静态资源，例如：图片，音频、字体等</div>
      <div>a:直接访问本地图片资源</div>
      <img src="@/assets/img/bg_modern.png" style="width:100px;height:100px" />
      <div>b:导入本地图片资源再使用</div>
      <img :src="localData1" style="width:100px;height:100px" />
      <div>c:导入本地图片资源再使用(可以使用@等别名)</div>
      <img :src="localData2" style="width:100px;height:100px" />
      <div>d：通过URL获取本地图片资源</div>
      <img :src="getImagUrl('../../assets/img/bg_modern.png')" style="width:100px;height:100px" />
      <div>e：当通过URL获取本地图片资源时，不能使用别名</div>
      <img :src="getImagUrl('@/assets/img/bg_modern.png')" style="width:100px;height:100px" />
      <div>f：不能使用require，因为require是属于webpack的，当前是vite项目</div>
    </div>



    <div class="item bg2">
      8：Vant3的引入和使用：<br>
      https://vant-ui.github.io/vant/v3/#/zh-CN <br>
      https://vant-ui.github.io/vant/v3/#/zh-CN/quickstart <br>
      快速上手参考：https://vant-ui.github.io/vant/v3/#/zh-CN/quickstart <br>
      a:安装vant:npm i vant 如果想执行版本则可以npm i vant@3.6.12 <br>
      b：实现自动引入 <br>
      安装插件：npm i unplugin-vue-components -D <br>
      配置插件：Components({
      resolvers: [VantResolver()],
      }), <br>
      c:此时就可以直接使用vant的各种组件了，例如这里使用一个van-button <br>

      <van-button type="primary">主要按钮</van-button>
    </div>



    <div class="item bg1">
      9：穿透组件修改子组件或引用的其他的组件的样式<br>
      看hy-trip\src\components\tab-bar\tab-bar.vue<br>
    </div>


  </div>
</template>

<script setup>
import localData1 from '../../assets/img/bg_modern.png'
import localData2 from '@/assets/img/bg_modern.png'
function getImagUrl(localUrl) {
  console.log("执行了：" + localUrl, import.meta)
  return new URL(localUrl, import.meta.url).href
}

</script>

<style lang="less" scoped>
.home{
  padding-bottom: 50px;
}
.item {
  margin-top: 10px;
}

.bg1 {
  background-color: yellow
}

.bg2 {
  background-color: pink
}</style>
