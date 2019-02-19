<template>
    <div>
      <router-link to ="/wizard">
      <v-btn outline large fab color="#8AEA92">
      <v-icon>add</v-icon>
    </v-btn>
    </router-link>
        <House
        v-for="house in houseList"
        v-bind:house="house"
        v-bind:key="house.id"
      ></House>
    </div>
</template>

<script>
import House from "./House.vue";

export default {
  components: {
    House
  },
  data: () => ({}),
  computed: {
    houseList() {
      return this.$store.state.houses;
    }
  },
  beforeMount() {
    this.$store.dispatch("getHouses");
  }
};
</script>

<style scoped></style>