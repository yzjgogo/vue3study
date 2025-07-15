import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/*
@reduxjs/toolkit使用步骤9-1:使用createAsyncThunk创建异步的action函数
extraInfo是额外的参数，可以在组件里调用dispatch时传入，参考Home.jsx中的dispatch(fetchHomeMultidataAction({name: "why", age: 18}))，此时extraInfo就是{name: "why", age: 18}。
第2个参数就是store，结构成了{ dispatch, getState }
*/
export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata", 
  async (extraInfo, { dispatch, getState }) => {
    // console.log(extraInfo, dispatch, getState)
    // 1.发送网络请求, 获取数据
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")

    // // @reduxjs/toolkit使用步骤9-3-3.也可以在此处直接dispatch操作(可以不做)
    // const banners = res.data.data.banner.list
    // const recommends = res.data.data.recommend.list
    // dispatch(changeBanners(banners))
    // dispatch(changeRecommends(recommends))

    // 3.返回结果, 那么action状态会变成fulfilled状态，如果使用了步骤9-3-3的方式，这里不返回也是可以的
    return res.data
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
  // @reduxjs/toolkit使用步骤9-3-1：老版本可以这样通过“计算属性名”监听异步action的三个状态，现在已经不让用了报错了
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) { 
  //     console.log("fetchHomeMultidataAction pending")
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     state.banners = payload.data.banner.list
  //     state.recommends = payload.data.recommend.list
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log("fetchHomeMultidataAction rejected")
  //   }
  // }
  // @reduxjs/toolkit使用步骤9-3-2：可以使用builder来监听异步action的三个状态
  //pending:正在请求中，还没响应回来
  //fulfilled:请求成功，响应回来
  //rejected:请求失败，响应错误
  extraReducers: (builder) => {
    builder.addCase(fetchHomeMultidataAction.pending, (state, action) => {
      console.log("fetchHomeMultidataAction pending")
    }).addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
      state.banners = payload.data.banner.list
      state.recommends = payload.data.recommend.list
    })
  }
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer
