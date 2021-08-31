<template>
  <div class="has-negative-margin">
    <card>
      <div class="columns has-text-centered">
        <div
          class="
            column
            is-8-desktop is-10-tablet is-offset-2-desktop is-offset-1-tablet
          "
        >
          <h2 class="is-size-4 has-text-weight-light has-text-medium mt-4">
            Whatever the task, we have the solution
          </h2>
          <p class="mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis veniam odio eius porro eaque quidem aut unde eligendi
            eveniet qui!
          </p>

          <div class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Professional</p>
                <p>
                  <span class="icon is-large">
                    <font-awesome-icon
                      :icon="['far', 'handshake']"
                    ></font-awesome-icon>
                  </span>
                </p>
              </div>
            </div>

            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Quick</p>
                <span class="icon is-large">
                  <font-awesome-icon
                    :icon="['far', 'calendar-check']"
                  ></font-awesome-icon>
                </span>
              </div>
            </div>

            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Cost effective</p>
                <span class="icon is-large">
                  <font-awesome-icon
                    :icon="['far', 'money-bill-alt']"
                  ></font-awesome-icon>
                </span>
              </div>
            </div>
          </div>

          <router-link to="/services" class="button is-primary mt-2"
            >Choose a service</router-link
          >
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "../Card";

export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.has-negative-margin {
  margin-top: -64px;
}
@media (max-width: 400px) {
.heading{
    font-size:.6rem;
  }
  .icon{
    width:40px;
    height:40px;
  }
  .level-item{
    padding-bottom: 1em;
  }
}
</style>
