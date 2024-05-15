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
        目的：想实现动态切换组件
       -->

      <!-- 1.第一种做法: v-if进行判断逻辑, 决定要显示哪一个组件 这是很传统的繁琐方法-->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 
        2.第二种做法: vue3提供了动态组件 component，具体加载的是哪个组件是由is属性指定的，而is属性我们可以通过':is'动态改变，也就实现了动态加载组件' 
        通过component组件，解决了上面第一种方法中繁琐的v-if判断；

        你仍然可以给原本打算在is指定的组件上使用的属性或事件，使用到component上，这样当is指定的组件有对应的属性或事件时，仍然是有效的。
        例如这里，我们给component组件使用了属性name、age和事件homeClick，当is指定的组件是<home/>时，这些属性和事件就对应于<home/>的。
      -->
      <!-- is中指定的组件需要来自两个地方: 1.全局注册的组件 2.局部注册的组件 -->
      <!-- <component :is="tabs[currentIndex]"></component> -->
      <component name="why" 
                 :age="18"
                 @homeClick="homeClick"
                 :is="currentTab">
      </component>
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

