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
              <span class="tag is-primary">{{ project.service }}</span>
            </div>
          </div>
        </div>
      </div>
      {{ shortText }}
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Delete</a>
      <a class="card-footer-item">Replied</a>
    </footer>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    project: Object,
  },
  setup(props) {
    // Returns a shortened version of the text
    const shortText = computed(() => {
      const maxTextCharacters = 200;
      if (props.project.description.length > maxTextCharacters) {
        let text = props.project.description.substring(0, maxTextCharacters);
        return (text += "...");
      }
      return props.project.description;
    });

    return {
      shortText,
    };
  },
};
</script>

<style scoped>
</style>