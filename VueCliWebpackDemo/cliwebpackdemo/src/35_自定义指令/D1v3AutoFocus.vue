<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script setup>
  import useInput from './hooks/useInput'
  const { inputRef } = useInput()
</script>
<style scoped></style>
