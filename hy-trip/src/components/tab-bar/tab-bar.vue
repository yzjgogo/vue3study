<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">

        <!-- 使用再带样式：自带的icon和title样式 -->
        <van-tabbar-item :to="item.path" icon="home-o" v-if="index !== 3">
          {{ item.text }}
        </van-tabbar-item>

        <!-- 演示使用自定义样式：使用插槽实现自定义icon和图标 -->
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
  // 局部定义一个变量: 只针对.tab-bar子元素才生效
  // --van-tabbar-item-icon-size: 30px !important;

  // 找到类, 对类中的CSS属性重写
  // :deep(.class)找到子组件的类, 让子组件的类也可以生效
  :deep(.van-tabbar-item__icon) {
    // font-size: 25px;
  }

  // 因为使用了插槽，样式是自己当前组件的，所以可以直接修改
  img {
    height: 25px;
  }
}
</style>
