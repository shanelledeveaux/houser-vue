import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/wizard",
      name: "wizard",

      component: () => import("./components/Wizard.vue")
    },
    {
      path: "/wizard2",
      name: "wizard2",

      component: () => import("./components/Wizard2.vue")
    },
    {
      path: "/wizard3",
      name: "wizard3",

      component: () => import("./components/Wizard3.vue")
    },
    {
      path: "/",
      name: "dashboard",

      component: () => import("./components/Dashboard.vue")
    }
  ]
});
