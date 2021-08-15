<template>
  <page-margin>
    <div class="columns mt-5">
      <div class="column">
        <figure class="image is-5by4">
          <img src="../assets/img/order-confirmed.svg"/>
        </figure>
      </div>
      <div class="column ml-2 seperate-content">
        <div class="is-size-1 has-text-weight-bold has-text-dark">
          It worked!
        </div>
        <div>We'll email you soon to talk about price, timeline, and expectations.</div>
        <router-link to="/services" class="button is-primary is-outlined mt-6">Back to services</router-link>
      </div>
    </div>
  </page-margin>
</template>

<script>
import PageMargin from '../components/PageMargin.vue'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  components: {
    PageMargin
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    // If the form hasn't been submitted, redirect to services
    if (!store.state.hasSubmittedForm) {
      router.push('/services');
    } else {
      // Reset submission state
      store.commit('setHasSubmittedForm', false);
    }
  }
}
</script>
