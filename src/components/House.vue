<template>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          v-bind:src="house.img"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">{{house.address}}</span><br>
            <span>{{house.city}}</span><br>
            <span>{{house.state}}</span><br>
            <span>{{house.zip}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
             <router-link :to= "{name:'fullhouse', params:{id}}">
            <v-btn flat color="orange">See Details</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["house"]
};
</script>

<style scoped></style>