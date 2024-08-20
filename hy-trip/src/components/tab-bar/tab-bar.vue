<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">

        <!-- 使用再带样式：自带的icon和title样式 -->
        <van-tabbar-item :to="item.path" icon="home-o" v-if="index !== 3">
          {{ item.text }}
        </van-tabbar-item>

        <!-- 演示使用自定义样式：使用插槽实现自定义icon和标题 -->
        <van-tabbar-item :to="item.path" v-else>
          <!-- 标题的插槽 -->
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <!-- 图标的插槽 -->
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>

import tabbarData from "@/assets/data/tabbar.js"
import { getAssetURL } from "@/utils/load_assets.js"
import { ref } from "vue";

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tab-bar {
  //参考图片：vant_tabbar_icon.jpg
  //可知，van-tabbar-item的icon是通过字体图标实现的，且font-size使用了css在:root下定义的全局变量--van-tabbar-item-icon-size，因此我们可以通过修改这个全局变量实现修改icon的大小。
  //1:我们可以在hy-trip\src\assets\css\common.css中修改--van-tabbar-item-icon-size的值，这种修改方式会影响全局，所有使用--van-tabbar-item-icon-size这个变量的地方都会改变

  //2： 局部定义一个变量--van-tabbar-item-icon-size:在当前组件返回内覆盖原来的--van-tabbar-item-icon-size:的值
  // --van-tabbar-item-icon-size: 30px !important;

  // 我们也可以不用修改--van-tabbar-item-icon-size的值，而是通过deep，覆盖van-tabbar-item__icon的font-size属性
  //deep使用方式1
  :deep(.van-tabbar-item__icon) {
    font-size: 30px;
  }
  //deep使用方式2
  // /deep/ .van-tabbar-item__icon{
  //   font-size: 40px;
  // }

  // 因为使用了插槽，样式是自己当前组件的，所以可以直接修改
  img {
    height: 30px;
  }
}
</style>
