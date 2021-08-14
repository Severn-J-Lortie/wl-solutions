<template>
  <div class="level can-shrink is-mobile">
    <div class="level-left">
      <div class="level-item">
        <span class="icon is-small">
          <font-awesome-icon :icon="['far', 'check-circle']" class="has-text-primary"></font-awesome-icon>
        </span>
      </div>
      <div class="level-item">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .can-shrink .level-left, 
  .level-item {
    flex-shrink: 1;
  }
</style>

