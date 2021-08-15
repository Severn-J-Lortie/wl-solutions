import { createStore } from 'vuex'

export default createStore({
  state: {
    form: {
      serviceDropdown: '',
      nameField: '',
      emailField: ''
    }
  },
  mutations: {
    setServiceDropdown(state, value) {
      state.form.serviceDropdown = value;
    },
    setEmailField(state, value) {
      state.form.emailField = value;
    },
    setNameField(state, value) {
      state.form.nameField = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
