import { createStore } from "vuex";
import programs from "@/store/modules/programs";
import studentUnionEvents from "@/store/modules/studentUnionEvents";

export default createStore({
  state: {
    isModalShow: false,
  },
  getters: {
    showModal(state) {
      return state.isModalShow;
    },
  },
  mutations: {
    changeModalShow(state) {
      state.isModalShow = !state.isModalShow;
    },
  },
  actions: {},
  modules: { programs, studentUnionEvents },
});
