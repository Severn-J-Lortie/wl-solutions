<template>
  <page-margin>
    <div class="columns is-centered mt-5">
      <div class="column is-4-tablet is-5-desktop is-7-widescreen is-6-fullhd">
        <div class="is-size-1 title mb-2 has-text-weight-bold">
          New job requests
        </div>
        <div>Here are the latest submissions from clients</div>
      </div>
      <div class="column is-6-tablet is-7-desktop is-5-widescreen is-6-fullhd">
        <div class="column" v-for="(project, i) in projects" :key="i">
          <project-card v :project="project"></project-card>
        </div>
      </div>
    </div>
  </page-margin>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import ProjectCard from "../components/Admin/ProjectCard.vue";
import PageMargin from "../components/PageMargin";

export default {
  components: {
    ProjectCard,
    PageMargin,
  },
  setup() {
    const store = useStore();

    return {
      projects: computed(() => store.state.projects),
    };
  },
};
</script>

<style scoped>
</style>