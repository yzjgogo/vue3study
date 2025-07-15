import { createSlice } from "@reduxjs/toolkit"
/**
   @reduxjs/toolkit使用步骤2:
   根据业务模块需要在store文件夹下创建counter.js模块和home.js模块
   这里对counter.js模块进行说明,home.js模块同理。
 */

   /*
   @reduxjs/toolkit使用步骤3:通过createSlice创建counter模块的store切片
   name是模块名；
   initialState是当前counter模块的初始状态；
   reducers是当前counter模块的reducer函数集合，里面的每个函数都是一个action的处理函数。每一个action处理函数名拼上前面的name就是action的type。
   例如：addNumber函数的type是"counter/addNumber"，subNumber函数的type是"counter/subNumber"。
   */ 
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 888
  },
  reducers: {
    addNumber(state, { payload }) {
      //@reduxjs/toolkit使用步骤4:在模块的reducer函数中，直接修改state的值，而不需要返回新的state对象。
      state.counter = state.counter + payload
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload
    }
  }
})
//@reduxjs/toolkit使用步骤5:导出当前counter模块的action函数
export const { addNumber, subNumber } = counterSlice.actions
//@reduxjs/toolkit使用步骤6:导出当前counter模块的reducer函数
export default counterSlice.reducer

