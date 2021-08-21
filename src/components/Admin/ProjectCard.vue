<template>
  <div class="card">
    <div class="card-content">
      <div class="level mb-4">
        <div class="level-left">
          <div class="level-item">
            <div>
              <p class="is-size-4 has-text-weight-bold">{{ project.name }}</p>
              <p class="subtitle is-6">{{ project.email }}</p>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="tags has-addons">
              <span class="tag">Service</span>
              <span class="tag is-info">{{ project.service }}</span>
            </div>
          </div>
        </div>
      </div>
      {{ description }}
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="deleteProject">Delete</a>
      <a class="card-footer-item" :class="{ 'has-text-white has-background-primary': project.accepted }" @click="accept">{{
        project.accepted ? "Accepted" : "Accept"
      }}</a>
      <a class="card-footer-item" v-if="descriptionIsShortended" @click="isExpanded = !isExpanded">{{
        isExpanded ? "Collapse" : "Expand"
      }}</a>
    </footer>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from 'vuex'

export default {
  props: {
    project: Object,
  },
  setup(props) {

    const store = useStore();

    // Keeps track of whether the card has been expanded
    let isExpanded = ref(false);

    // Indicated whether the description is being clamped
    const maxTextCharacters = 200;
    let descriptionIsShortended = ref(props.project.description.length > maxTextCharacters);

    // Returns either a shortended version of the text or the full text
    // depending on isExpanded
    const description = computed(() => {
      // Return the full text if the card is expanded. Otherwise return shortended text
      if (!isExpanded.value) {
        if (descriptionIsShortended.value) {
          let text = props.project.description
            .substring(0, maxTextCharacters)
            .trim();
          return (text += "...");
        }
      }
      return props.project.description;
    });

    const accept = () => {

      // Toggle project's the accepted status in firestore and the store
      store.dispatch('updateProjectAcceptedStatus', {id: props.project.id, status: !props.project.accepted});
    }

    const deleteProject = () => {
      store.dispatch('deleteProject', props.project.id);
    }

    return {
      description,
      descriptionIsShortended,
      isExpanded,
      accept,
      deleteProject
    };
  },
};
</script>

<style scoped>
</style>