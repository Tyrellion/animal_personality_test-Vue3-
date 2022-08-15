import { createStore } from "vuex";

const store = createStore({
  // 传入一个类似data的函数
  state() {
    return {
      counter: 3,
      answer: "0",
      which:''
    };
  },

  mutations: {
    increment(state) {
      state.counter++;
    },
    changeA(state) {
      state.answer = state.answer + "A";
    },
    changeB(state) {
      state.answer = state.answer + "B";
    },
    whichA(state) {
      state.which =  "A";
    },
    whichB(state) {
      state.which =  "B";
    },
    //再次测试时将answer还原
    restart(state) {
      state.answer = "0";
    },
  },
});

export default store;
