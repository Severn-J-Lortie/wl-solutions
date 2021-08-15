<template>
  <page-margin class="background-blob">
    <div class="columns mt-5">
      <div class="column is-3">
        <div class="title is-1 has-text-weight-bold">Request details</div>
        <div class="has-text-weight-bold">Give us some information about your project</div>
      </div>
      <div class="column is-8 is-offset-1">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="nameField"/>
          </div>
          <p class="help is-danger" v-if="!formInputValidations.nameField">Name must be between 1 and 20 characters</p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-danger"
              type="email"
              placeholder="Email input"
              v-model="emailField"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon
                :icon="['far', 'envelope']"
                class="half-width"
              ></font-awesome-icon>
            </span>
            <span class="icon is-small is-right">
              <font-awesome-icon
                :icon="formInputValidations.emailField ? ['far', 'check-circle'] : ['far', 'window-close']"
                class="half-width"
              ></font-awesome-icon>
            </span>
          </div>
          <p class="help is-danger" v-if="!formInputValidations.emailField">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Service</label>
          <div class="control">
            <div class="select">
              <select v-model.lazy="serviceDropdown" >
                <option value="" disabled selected>Select a service</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Systems</option>
              </select>
            </div>
          </div>
          <p class="help is-danger" v-if="!formInputValidations.serviceDropdown">Please select an option</p>
        </div>

        <div class="field">
          <label class="label">Project description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Enter details about your project"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="validate">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </page-margin>
</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'

import PageMargin from "../components/PageMargin.vue";
export default {
  components: {
    PageMargin,
  },

  setup() {

    const store = useStore();

    // State to keep track of which inputs are valid
    const formInputValidations = reactive({ 
      nameField: true,
      emailField: true,
      serviceDropdown: true,
      descriptionTextarea: true
    });

    // Validate function which will update this state
    const validate = () => {

      // Reset state
      formInputValidations.nameField = true;
      formInputValidations.emailField = true;
      formInputValidations.serviceDropdown = true;
      formInputValidations.descriptionTextarea = true;

      // Validate the service dropdown (cannot be empty string)
      if (store.state.form.serviceDropdown == '') {
        formInputValidations.serviceDropdown = false;
      }

      // Validate the name field (cannot be more than 20 characters)
      if (store.state.form.nameField.length > 20 || store.state.form.nameField.length === 0) {
        formInputValidations.nameField = false;
      }

      // Validate the email field (has to be non-empty, valid email)
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      console.log(store.state.form.emailField.match(regex));
      if (store.state.form.emailField.match(regex) == null) {
        formInputValidations.emailField = false;
      }

    }


    return {
      serviceDropdown: computed({
        get: () => store.state.form.serviceDropdown,
        set: (value) => store.commit('setServiceDropdown', value)
      }),
      emailField: computed({
        get: () => store.state.form.emailField,
        set: (value) => store.commit('setEmailField', value)
      }),
      nameField: computed({
        get: () => store.state.form.nameField,
        set: (value) => store.commit('setNameField', value)
      }),
      validate,
      formInputValidations
    }
  }

};
</script>

<style scoped>
.background-blob {
  background-image: url('../assets/img/blob 2.svg');
  background-repeat: no-repeat;
  background-position: 10% 10%;
  background-size: 30%
}
</style>
