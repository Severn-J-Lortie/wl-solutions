<template>
  
  <div class="hero is-halfheight">
    <div class="hero-body" id="home-hero" ref="hero">
      <div class="container has-text-centered">
          <p class="title has-text-white" id="hero-text">We make coding things happen</p>
      </div>
    </div>
  </div>

</template>

<script>
const banner1 = require('../../assets/img/banner1.jpg');
//const banner2 = require('../../assets/img/banner2.jpg');

import { onMounted, ref } from 'vue';

export default {

  setup() {

    const hero = ref(null);

    onMounted(() => {


      hero.value.style.backgroundImage = `url("${banner1}")`;

      
      
    });
   
    return {
      hero
    }

  }

}
</script>

<style scoped>

#home-hero {
  background-image: url("../../assets/img/banner1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#hero-text {
  position: relative;
  bottom: 26px;
}

</style>