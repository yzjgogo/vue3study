<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{ active: currentTab === item }" 
                @click="itemClick(item)">
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <!-- 

        1：keep-alive：在组件动态切换时，保持组件的存活，避免频繁的销毁重建；
        例如这里当没有使用keep-alive时，随着home、about、catalog组件的来回切换，被切换掉的组件会执行unmounted()，切换回来后会执行created()
        当使用keep-alive后，组件就不再销毁重建，而是保持存回，但是会执行生命周期的activated和deactivated方法，表示进入活跃和不活跃状态；

        keep-alive可以指定属性include、exclude、max属性，参考图片:
        关于keep-alive.jpg

       -->
      <!-- include: 组件的名称来自于组件定义时name选项  -->
      <keep-alive include="home,about">
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import Category from './views/Category.vue'

  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        // currentIndex: 0
        currentTab: "home"
      }
    },
    methods: {
      itemClick(tab) {
        this.currentTab = tab
      },
      homeClick(payload) {
        console.log("homeClick:", payload)
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>

