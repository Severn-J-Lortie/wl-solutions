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
    <router-link to="/contact" class="button mt-5 is-info is-outlined" @click="setService">
      Choose
    </router-link>
  </card>
</template>

<script>
import Card from "../Card.vue";
import { useStore } from 'vuex'

export default {
  props: {
    serviceName: String
  },
  components: {
    Card
  },
  setup(props) {

    const state = useStore();

    const setService = () => {
      state.commit('setServiceDropdown', props.serviceName);
    }

    return {setService};

  }
};
</script>
