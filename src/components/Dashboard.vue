<template>
    <div>
      <router-link to ="/wizard">
      <v-btn outline large fab color="#8AEA92">
      <v-icon>add</v-icon>
    </v-btn>
    </router-link>
        <House/>
    </div>
</template>

<script>
import House from "./House.vue";

export default {
  components: {
    House
  }
};
</script>

<style scoped></style>