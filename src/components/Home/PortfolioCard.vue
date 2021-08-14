<template>
  <card>
    <div
      class="
        is-size-4
        has-text-weight-light has-text-medium has-text-centered
        title
        mt-4
      "
    >
      Our Projects
    </div>

    <!-- Ancestor tile to wrap all other tiles -->
    <div class="tile is-ancestor">
      <!-- Tile enforces rows are stacked vertically -->
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-6 is-parent">
            <div class="tile is-child">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <a class="is-size-5 has-text-weight-bold has-text-grey-dark">Project title</a>
            </div>
          </div>
          <div class="tile is-6 is-parent">
            <div class="tile is-child">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <a class="is-size-5 has-text-weight-bold has-text-grey-dark">Project title</a>
            </div>
          </div>
        </div>

        <div class="tile">
          <div class="tile is-4 is-parent">
            <div class="tile is-child">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <a class="is-size-5 has-text-weight-bold has-text-grey-dark">Project title</a>
            </div>
          </div>
          <div class="tile is-4 is-parent">
            <div class="tile is-child">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <a class="is-size-5 has-text-weight-bold has-text-grey-dark">Project title</a>
            </div>
          </div>
          <div class="tile is-4 is-parent">
            <div class="tile is-child">
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/256x256.png" />
              </figure>
              <a class="is-size-5 has-text-weight-bold has-text-grey-dark">Project title</a>
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
