// src/store/index.ts
import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: {
      name: '',
      email: '',
      password: '',
      gender: ''
    }
  },
  mutations: {
    saveFormData(state, data) {
      state.formData = data;
    }
  },
  actions: {
    saveFormData({ commit }, data) {
      commit('saveFormData', data);
    }
  },
  getters: {
    getFormData: (state) => state.formData
  },
  modules: {}
});
