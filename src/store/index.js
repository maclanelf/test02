import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0,
      overload:''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setOverload (state,overload) {
        state.overload = overload;
    }
  }
})

export default store