<template>
  <div class="home" ref="homeRef">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content />

    <!-- <button @click="moreBtnClick">加载更多</button> -->
  </div>
</template>

<!-- 注释掉的内容 -->
<!-- <script>
  export default { name: "home" }
</script> -->
<script setup>
import { onActivated, ref, watch, onMounted } from 'vue'
import useHomeStore from '@/stores/modules/home';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

import useScroll from '@/hooks/useScroll'
//学习记录3：import { computed } from 'vue'; 也可以，参考：导包方式的区别.png
import { computed } from '@vue/reactivity';

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })
// 定义的可响应式数据, 依赖另外一个可响应式的数据, 那么可以使用计算函数(computed)
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})


// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})


// 学习记录2：vue3中，setup函数的生命周期函数没有onBeforeCreate和onCreated等，所有的钩子参考：
//https://cn.vuejs.org/api/composition-api-lifecycle.html
//https://cn.vuejs.org/guide/essentials/lifecycle.html

//监听组件创建的生命周期函数
onMounted(() => {
  console.log("Home执行onMounted");
})

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>
