<template>
  <div class="columns is-centered">
    <div
      class="
        column
        is-8-widescreen is-10-desktop is-8-fullhd is-11-tablet
        has-max-width
      "
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.has-max-width {
  max-width: 1000px; 
}
</style>
