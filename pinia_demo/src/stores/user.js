import { defineStore } from "pinia";
const userStoreBuilder = defineStore("user", {
  state: () => ({
    name: "刘德华",
    age: 18,
    level:100
  })
})
export default userStoreBuilder