<template>
  <card>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <h2
          class="
            is-size-4
            has-text-weight-light has-text-medium
            has-text-centered
            mb-5
            mt-4
          "
        >
          Meet the team
        </h2>
        <div class="columns">
          <div class="column is-7">
            <div class="media">
              <figure class="media-left">
                <figure class="image is-128x128">
                  <img src="../../assets/img/andrew.png" />
                </figure>
              </figure>
              <div class="media-content ml-2">
                <p class="is-size-5 has-text-weight-bold">Andrew Wierzbowski</p>
                <p>I manage the company!</p>

                <div class="level mt-5 is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <span class="icon is-medium">
                        <font-awesome-icon
                          :icon="['fab', 'twitter']"
                          class="has-text-primary"
                        ></font-awesome-icon>
                      </span>
                    </div>

                    <div class="level-item">
                      <span class="icon is-medium">
                        <font-awesome-icon
                          :icon="['fab', 'instagram']"
                          class="has-text-primary"
                        ></font-awesome-icon>
                      </span>
                    </div>

                    <div class="level-item">
                      <span class="icon is-medium">
                        <font-awesome-icon
                          :icon="['fab', 'linkedin']"
                          class="has-text-primary"
                        ></font-awesome-icon>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="media">
              <figure class="media-left">
                <figure class="image is-128x128">
                  <img src="../../assets/img/severn.png" />
                </figure>
              </figure>

              <div class="media-content ml-2 mb-6">
                <p class="is-size-5 has-text-weight-bold">Severn Lortie</p>
                <p>I do the coding!</p>
                <div class="level mt-5 is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <span class="icon is-medium">
                        <font-awesome-icon
                          :icon="['fab', 'twitter']"
                          class="has-text-primary"
                        ></font-awesome-icon>
                      </span>
                    </div>

                    <div class="level-item">
                      <span class="icon is-medium">
                        <font-awesome-icon
                          :icon="['fab', 'instagram']"
                          class="has-text-primary"
                        ></font-awesome-icon>
                      </span>
                    </div>

                    <div class="level-item">
                      <span class="icon is-medium">
                        <font-awesome-icon
                          :icon="['fab', 'github']"
                          class="has-text-primary"
                        ></font-awesome-icon>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </card>
</template>

<script>
import Card from "../Card.vue";

export default {
  components: {
    Card,
  },
};
</script>
