import { createStore } from 'vuex'

export default createStore({
  state: {
    hasSubmittedForm: false,
    form: {
      serviceDropdown: '',
      nameField: '',
      emailField: '',
      descriptionTextarea: ''
    },
    projects: []
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
    },
    clearFormData(state) {
      state.form.serviceDropdown = '';
      state.form.nameField = '';
      state.form.emailField = '';
      state.form.descriptionTextarea = '';
    },
    addProject(state, project) {
      state.projects.push(project);
    },
    setDescriptionTextarea(state, value) {
      state.form.descriptionTextarea = value;
    },
    setHasSubmittedForm(state, value) {
      state.hasSubmittedForm = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
