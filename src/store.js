import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    houses: [],
    name: "",
    address: "",
    city: "",
    userState: "",
    zipcode: "",
    imageurl: "",
    mortgage: "",
    rent: ""
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = Object.assign({}, state.name, name);
    },
    ADD_HOUSE(state, houses) {
      state.houses = houses;
    }
  },
  actions: {
    addHouse(context, house) {
      axios.post("/api/houses", house).then(res => {
        //console.log(res.data)
        this.commit("ADD_HOUSE", res.data);
      });
    }
  }
});
