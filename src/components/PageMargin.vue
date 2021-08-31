<template>
  <div class="columns is-centered nav-margin">
    <div
      class="
        column
        is-8-widescreen is-10-desktop is-11-tablet
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
.nav-margin{
  padding-top:32px;
}
.has-max-width {
  max-width: 1000px; 
}
</style>
