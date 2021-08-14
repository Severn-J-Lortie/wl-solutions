<template>
  <card>
    <div class="is-size-5 has-text-medium has-text-weight-light">
      <slot name="service-title"></slot>
    </div>
    
    <div class="is-size-3 has-text-weight-bold title">
      <slot name="service-price"></slot>
    </div>
    <div>
      <slot name="service-list"></slot>
    </div>
    <sol-button class="mt-5 is-info is-outlined">Choose</sol-button>
  </card>
</template>

<script>
import Card from "../Card.vue";
import SolButton from "../SolButton.vue"


export default {
  components: {
    Card,
    SolButton
  },
};
</script>
