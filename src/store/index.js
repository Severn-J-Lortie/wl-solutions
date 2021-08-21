import { createStore } from 'vuex'

import { collection, addDoc, getDocs, doc, query, orderBy, setDoc, deleteDoc, Timestamp } from '@firebase/firestore';
import { db } from '../Firebase'

export default createStore({
  state: {
    hasSubmittedForm: false,
    form: {
      serviceDropdown: '',
      nameField: '',
      emailField: '',
      descriptionTextarea: ''
    },
    projects: [
    ]
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
    removeProject(state, index) {
      state.projects.splice(index,1);
    },
    setDescriptionTextarea(state, value) {
      state.form.descriptionTextarea = value;
    },
    setHasSubmittedForm(state, value) {
      state.hasSubmittedForm = value;
    },
    setProjectAcceptedStatus(state,{index, value}) {
      state.projects[index].accepted = value;
    }
  },
  getters: {
    getProjectById(state) {
      return (id) => state.projects.findIndex((project) => project.id === id);
    }
  },
  actions: {

    async createProject({ state, commit }) {

      // Grab the values currently saved in the form and create a new
      // project object with them
      const project = {
        service: state.form.serviceDropdown,
        name: state.form.nameField,
        email: state.form.emailField,
        description: state.form.descriptionTextarea,
        accepted: false
      }

      // Attach a timestamp for date created
      project.submissionTime = Timestamp.now();

      // Push the project to firestore
      const projectsRef = await addDoc(collection(db, 'projects'), project);

      // Append the id to the object as an immutable property
      Object.defineProperty(project, 'id', {
        value: projectsRef.id,
        writable: false
      });

      // Push the object to state so the change is reflected locally
      commit('addProject', project);

    },
    async readProjects({commit}) {

      // Create a query that orders newer projects first
      const orderQuery = query(collection(db, 'projects'), orderBy('submissionTime', 'desc'));

      // Get the docuemnts returned by the query
      const snapshot = await getDocs(orderQuery);

      // Add each project to the store and attach its id as an immutable property
      snapshot.forEach((doc) => {

        // Attach the id
        const project = doc.data();
        Object.defineProperty(project, 'id', {
          value: doc.id,
          writable: false
        });

        // Commit to the store
        commit('addProject', project);

      })
    },
    async updateProjectAcceptedStatus({ commit, getters }, {id, status}) {

      // Update the projects accepted field using the id
      const projectRef = doc(db, 'projects', id);
      await setDoc(projectRef, {accepted: status}, {merge: true});

      // Update the store to reflect this change. 
      // Find the index of the project
      const projectIndex = getters.getProjectById(id);
      commit('setProjectAcceptedStatus', {index: projectIndex, value: status});
     
    },
    async deleteProject({commit, getters}, id) {

      // Get the doc
      const projectRef = doc(db, 'projects', id);

      // Delete the doc
      await deleteDoc(projectRef);

      // Reflect this change in the store
      const projectIndex = getters.getProjectById(id);
      commit('removeProject', projectIndex);

    }

  },
  modules: {
  }
})
