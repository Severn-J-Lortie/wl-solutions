<template>

  <div v-if="showSuccess">
      <slot name="successMessage"></slot>
  </div>
 
  <div v-else>
    <slot name="form"></slot>
  </div>
  
</template>

<script>
export default {
  props: {
    showSuccess: {
      type: Boolean,
      default: false
    }
  }
}
</script>
