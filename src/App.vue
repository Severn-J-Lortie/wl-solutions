<template>
  <navbar></navbar>
  <router-view />
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    // Load the project requests on app load. Prevents any duping
    const store = useStore();
    store.dispatch("readProjects");
  },
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

/* Custom Flexbox Classes */
.row-l-col-c {
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.row-c-col-c {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-s-col-c {
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.row-e-col-c {
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.row-sb-col-c {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.row-sa-col-c {
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.row-se-col-c {
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.col-sb-row-c {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: space-between;
}
.col-c-row-c {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Removes negative margin left and right on columns element on mobile*/
@media (max-width: 768px) {
  .columns {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
}

/* Animation Classes */
.slide-in-left {
  transform: translateX(0%);
}
.slide-out-left {
  transform: translateX(-100%);
}
</style>