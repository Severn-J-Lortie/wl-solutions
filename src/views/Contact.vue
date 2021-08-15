<template>
  <page-margin>
    <div class="columns mt-5">
      <div class="column is-3 background-blob">
        <div
          class="title is-size-1-desktop is-size-2-tablet has-text-weight-bold"
        >
          Request details
        </div>
        <div class="has-text-weight-bold">
          Give us some information about your project
        </div>
      </div>
      <div class="column is-8 is-offset-1">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="nameField"
            />
          </div>
          <p class="help is-danger" v-if="!formInputValidations.nameField">
            Name must be between 1 and 20 characters
          </p>
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
                :icon="
                  formInputValidations.emailField
                    ? ['far', 'check-circle']
                    : ['far', 'window-close']
                "
                class="half-width"
              ></font-awesome-icon>
            </span>
          </div>
          <p class="help is-danger" v-if="!formInputValidations.emailField">
            This email is invalid
          </p>
        </div>

        <div class="field">
          <label class="label">Service</label>
          <div class="control">
            <div class="select">
              <select v-model.lazy="serviceDropdown">
                <option value="" disabled selected>Select a service</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Systems</option>
              </select>
            </div>
          </div>
          <p
            class="help is-danger"
            v-if="!formInputValidations.serviceDropdown"
          >
            Please select an option
          </p>
        </div>

        <div class="field">
          <label class="label">Project description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Enter details about your project"
              v-model="descriptionTextarea"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" @click="submit">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light" @click="clearFormData">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  </page-margin>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { computed, reactive } from "vue";

import PageMargin from "../components/PageMargin.vue";
export default {
  components: {
    PageMargin
  },

  setup() {
    const store = useStore();
    const router = useRouter();

    // State to keep track of which inputs are valid
    const formInputValidations = reactive({
      nameField: true,
      emailField: true,
      serviceDropdown: true,
      descriptionTextarea: true,
      formIsValid: true,
    });

    // Validate function which will update this state
    const validate = () => {
      // Reset state
      for (let key in formInputValidations) {
        formInputValidations[key] = true;
      }

      // Validate the service dropdown (cannot be empty string)
      if (store.state.form.serviceDropdown == "") {
        formInputValidations.serviceDropdown = false;
      }

      // Validate the name field (cannot be more than 20 characters)
      if (
        store.state.form.nameField.length > 20 ||
        store.state.form.nameField.length === 0
      ) {
        formInputValidations.nameField = false;
      }

      // Validate the email field (has to be non-empty, valid email)
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (store.state.form.emailField.match(regex) == null) {
        formInputValidations.emailField = false;
      }

      // Check to see if all fields still valid
      for (let key in formInputValidations) {
        if (!formInputValidations[key]) {
          formInputValidations.formIsValid = false;
          break;
        }
      }
    };

    // Handle form submission
    const submit = () => {
      // Validate the form
      validate();

      if (formInputValidations.formIsValid) {
        // Commit to state
        store.commit("addProject", store.state.form);

        // Clear the form
        store.commit("clearFormData");

        // Mark the form as submitted
        store.commit('setHasSubmittedForm', true);

        // Redirect to success message
        router.push('/success');
      }
    };

    return {
      serviceDropdown: computed({
        get: () => store.state.form.serviceDropdown,
        set: (value) => store.commit("setServiceDropdown", value),
      }),
      emailField: computed({
        get: () => store.state.form.emailField,
        set: (value) => store.commit("setEmailField", value),
      }),
      nameField: computed({
        get: () => store.state.form.nameField,
        set: (value) => store.commit("setNameField", value),
      }),
      descriptionTextarea: computed({
        get: () => store.state.form.descriptionTextarea,
        set: (value) => store.commit("setDescriptionTextarea", value),
      }),
      submit,
      clearFormData: () => store.commit("clearFormData"),
      formInputValidations,
    };
  },
};
</script>

<style scoped>
/* Hide the background blob on mobile */
@media (min-width: 768px) {
  /* Background blob styles */
  .background-blob {
    background-image: url("../assets/img/blob 2.svg");
    background-repeat: no-repeat;
    background-position-y: 0%;
    background-position-x: 50%;
    background-size: 110%;
  }
}
</style>