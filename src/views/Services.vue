<template>
  <page-margin>
    <div class="title is-size-1 has-text-weight-bold mt-5">Our pricing</div>

    <div class="content-container">
      <img
        src="..\assets\img\blob.svg"
        alt="background-blob"
        class="background-blob is-desktop"
      />
      <div class="columns is-centered">
        <div class="column">
          <service-card serviceName="Frontend">
            <template v-slot:service-title> Frontend </template>
            <template v-slot:service-price> $30/hr </template>
            <template v-slot:service-list>
              <list-item> Complete website development </list-item>
              <list-item> Interactivity with JavaScript </list-item>
              <list-item> Graphics and design work </list-item>
            </template>
          </service-card>
        </div>
        <div class="column">
          <service-card serviceName="Backend">
            <template v-slot:service-title> Backend </template>
            <template v-slot:service-price> $40/hr </template>
            <template v-slot:service-list>
              <list-item>
                Development with NodeJs, Firebase, and Django
              </list-item>
              <list-item> Implementation with frontend </list-item>
              <list-item> Server setup </list-item>
              <list-item> Maintainence tasks </list-item>
            </template>
          </service-card>
        </div>
        <div class="column">
          <service-card serviceName="Systems">
            <template v-slot:service-title> Systems </template>
            <template v-slot:service-price> $38/hr </template>
            <template v-slot:service-list>
              <list-item> C/C++, Java, and Python </list-item>
              <list-item> Embedded systems with the Raspberry Pi </list-item>
              <list-item> Linux </list-item>
            </template>
          </service-card>
        </div>
      </div>
    </div>
  </page-margin>
</template>

<script>
import PageMargin from "../components/PageMargin.vue";
import ServiceCard from "../components/Services/ServiceCard.vue";
import ListItem from "../components/Services/ListItem.vue";

export default {
  components: {
    PageMargin,
    ServiceCard,
    ListItem,
  },
};
</script>

<style scoped>
.content ul {
  margin-left: 1.5rem;
}
.content-container {
  position: relative;
}
.background-blob {
  display: none;

  width: 550px;
  position: absolute;
  top: -25%;
  right: -30%;
  
}
@media (min-width: 768px) {
  .background-blob {
    display: block;
    width: 550px;
    position: absolute;
    top: -20%;
    right: -20%;
  }
  @media (min-width: 1024px) {
    .background-blob {
      display: block;
      width: 550px;
      position: absolute;
      top: -25%;
      right: -30%;
    }
  }
}
</style>
