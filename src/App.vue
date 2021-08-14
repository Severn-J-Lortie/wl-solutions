<template>
  <navbar></navbar>
  <router-view />
</template>

<script>
import Navbar from '../src/components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
/* Force icons to fill parent container */
svg {
  width: 100% !important;
  height: 100% !important;
}

svg.half-width {
  width: 50% !important;
  height: 50% !important;
}

/* Removes negative margin left and right on columns element on mobile*/
@media (max-width: 768px) {
  .columns {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}
</style>