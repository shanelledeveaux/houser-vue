<template>
  <div id="app">
    <Header/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Dashboard from "./components/Dashboard.vue";
import Wizard from "./components/Wizard.vue";

export default {
  name: "app",
  components: {
    Header,
    Dashboard,
    Wizard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3b5249;
}
</style>
