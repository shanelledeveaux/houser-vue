import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import store from "./store";

Vue.use(Vuetify, {
  iconfont: "md",
  //theme for material design
  theme: {
    primary: "#519872",
    secondary: "e5f4ec",
    tertiary: "afd4c0",
    background: "afd4c0",
    success: "#dedede",
    info: "#3b5249",
    error: "#D32F2F"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
