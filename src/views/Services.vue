<template>
  <page-margin class="background-blob">

    <div class="title is-size-1 has-text-weight-bold mt-5">Our pricing</div>

    <div class="columns is-centered">
      <div class="column">
        <service-card>
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
        <service-card>
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
        <service-card>
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
.background-blob {
  background-image: url('../assets/img/blob.svg');
  background-repeat: no-repeat;
  background-position: right;
}
</style>
