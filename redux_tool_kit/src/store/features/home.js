import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
  }
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer
