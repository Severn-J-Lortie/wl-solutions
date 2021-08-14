<template>
  <hero></hero>
  <page-margin>
      <pitch-card></pitch-card>
      <team-card class="mt-6"></team-card>
      <portfolio-card class="mt-6"></portfolio-card>
  </page-margin>
</template>

<script>
import PageMargin from '../components/PageMargin.vue'
import Hero from "../components/Home/Hero.vue";
import PitchCard from "../components/Home/PitchCard.vue";
import TeamCard from "../components/Home/TeamCard.vue";
import PortfolioCard from "../components/Home/PortfolioCard.vue"

export default {
  components: {
    PageMargin,
    Hero,
    PitchCard,
    TeamCard,
    PortfolioCard
  },
};
</script>

<style scoped>
.has-max-width {
  max-width: 1000px;
}
</style>