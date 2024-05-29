<template>
  <h2>Home组件</h2>
</template>

<script>
// minxin使用步骤2：哪个组件想用，就导入这个mixin对象
  import messageMixin from '../mixins/message-mixin'

  export default {
    // options api
    components: {

    },
    mixins: [messageMixin],
    data() {
      return {
        homeNames: [ "abc", "cba" ]
      }
    },
    methods: {

    },
    created() {
      console.log("home created")
    }
  }
</script>

<style scoped>
</style>

