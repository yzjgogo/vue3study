<template>
  <div class="favor" ref="favorRef">
    <h2>favor</h2>
    <template v-for="(item) in 100">
      <div>列表数据:{{ item }}</div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import useScroll from '@/hooks/useScroll';

const favorRef = ref()

useScroll(favorRef)




//监听组件创建的生命周期函数
onMounted(() => {
  console.log("收藏执行onMounted");
})
</script>

<style lang="less" scoped>

.favor {
  height: 300px;
  background: orange;
  overflow-y: auto;
}

</style>
