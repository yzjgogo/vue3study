<template>
  <div class="son-box" style="margin-top: 50px;">
    <div class="son-content">{{ msg }}</div>
  </div>
</template>
<script setup>
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>
  
<style scoped>
  
</style>

