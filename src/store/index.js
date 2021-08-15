import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      serviceDropdown: ''
    }
  },
  mutations: {
    setServiceDropdown(state, value) {
      state.form.serviceDropdown = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
