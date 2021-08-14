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
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-danger"
              type="email"
              placeholder="Email input"
              value="hello@"
            />
            <span class="icon is-small is-left">
              <font-awesome-icon
                :icon="['far', 'envelope']"
                class="half-width"
              ></font-awesome-icon>
            </span>
            <span class="icon is-small is-right">
              <font-awesome-icon
                :icon="['far', 'window-close']"
                class="half-width has-text-danger"
              ></font-awesome-icon>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Service</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Systems</option>
              </select>
            </div>
          </div>
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
            <button class="button is-link">Submit</button>
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
import PageMargin from "../components/PageMargin.vue";
export default {
  components: {
    PageMargin,
  },
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
