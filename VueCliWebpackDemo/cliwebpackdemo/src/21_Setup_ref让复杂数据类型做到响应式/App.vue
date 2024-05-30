<template>
  <div>
    <div>{{ account }}</div>
    <button @click="changeName">修改名字1</button>
    <button @click="changeColor">修改car的颜色</button>
    <button @click="addBook">添加书本</button>
    <br>
    <button @click="account.username = '御前'">修改名字2</button>
    <button @click="account.car.color='绿色'">修改car的颜色2</button>
    <button @click="account.books.push('三国')">添加书本2</button>
  </div>
</template>

<script>
  import { ref } from 'vue'

  /**
    
    ref同样可以用于定义复杂的数据类型，让其做到响应式
    用法是，在setup()函数里读写account的属性时，需要account.value来手动解包
    同样，在template中仍然是自动解包的

   */
  export default {
    setup() {
      const account = ref({
        username: "刘德华",
        password: "123456",
        car:{
          color:'黄色'
        },
        books:['红楼','西游']
      })

      const changeName = () => {
        account.value.username = "郭德纲"
      }

      const changeColor = () => {
        account.value.car.color = "白色"
      }

      const addBook = () => {
        account.value.books.push('水浒')
      }

      return {
        account,
        changeName,
        changeColor,
        addBook
      }
    }
  }
</script>

<style scoped>
</style>

