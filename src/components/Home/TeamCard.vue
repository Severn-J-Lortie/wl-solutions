<template>
  <card>
    <div class="team-card-container">
      <h2
        class="
          is-size-4
          has-text-weight-light has-text-medium has-text-centered
          mb-5
          mt-4
        "
      >
        Meet the team
      </h2>
      <div class="team-container">
        <!-- Andrew's Team Card -->
        <div class="team-member row-s-col-c">
          <div class="image-container">
            <img src="../../assets/img/andrew.png" alt="" class="image" />
          </div>
          <div class="info-container col-c-row-c">
            <div class="text-info">
              <h3><strong>Andrew Wierzbowski</strong></h3>
              <p>I manage the company.</p>
            </div>
            <div class="socials-container row-sa-col-c">
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="has-text-primary"
                />
              </div>
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="has-text-primary"
                />
              </div>
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  class="has-text-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Severn's Team Card -->
        <div class="team-member row-s-col-c">
          <div class="image-container">
            <img src="../../assets/img/severn.png" alt="" class="image" />
          </div>
          <div class="info-container col-c-row-c">
            <div class="text-info">
              <h3><strong>Severn Lortie</strong></h3>
              <p>I do the coding.</p>
            </div>
            <div class="socials-container row-sa-col-c">
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="has-text-primary"
                />
              </div>
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="has-text-primary"
                />
              </div>
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="has-text-primary"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Kevin's Team Card -->
        <div class="team-member row-s-col-c">
          <div class="image-container">
            <img src="../../assets/img/kevin.png" alt="" class="image" />
          </div>
          <div class="info-container col-c-row-c">
            <div class="text-info">
              <h3><strong>Kevin Yu</strong></h3>
              <p>I also code!</p>
            </div>
            <div class="socials-container row-sa-col-c">
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  class="has-text-primary"
                />
              </div>
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="has-text-primary"
                />
              </div>
              <div class="social-icon">
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="has-text-primary"
                />
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

<style scoped>
/* Mobile View < 768px */
.name {
  font-size: 1rem !important;
}
.description {
  font-size: 0.9rem;
}
.image {
  width: 150px;
}
.team-container {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 350px;
}
.team-member {
  margin-bottom: 2em;
}
.info-container {
  margin-left: 0.5rem;
  width: 100%;
}
.text-info {
  text-align: center;
  overflow-x: auto;
}
.text-info h3 {
  font-size: 1.1rem;
}
.text-info p {
  font-size: 0.9rem;
}
.socials-container {
  width: 96px;
  margin-top: 1em;
}
.social-icon {
  width: 20px;
}

@media (min-width: 768px) {
  .team-container {
    grid-template-columns: 1fr 1fr;
    grid-gap:1em;
  }
  .team-member {
    justify-self: center;
  }
  .team-member:nth-child(3) {
    grid-column: 1/3;
    /* justify-self: center; */
    justify-self: center;
  }
  .social-icon {
    width: 30px;
  }
  .text-info h3 {
    font-size: 1.3rem;
  }
  .text-info p {
    font-size: 1rem;
  }
  .image {
    width: 200px;
  }
  .socials-container {
    width: 160px;
  }
  .social-icon {
    width: 30px;
  }
}
</style>