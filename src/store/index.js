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
    addProject(state) {
      // Copy the current form data in to a new object and push to projects array
      const project = {};
      project.service = state.form.serviceDropdown;
      project.name = state.form.nameField;
      project.email = state.form.emailField;
      project.description = state.form.descriptionTextarea;
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
