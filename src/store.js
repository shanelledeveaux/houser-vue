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
    zip: "",
    imageurl: "",
    mortgage: "",
    rent: ""
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_ADDRESS(state, address) {
      state.address = address;
    },
    SET_CITY(state, city) {
      state.city = city;
    },
    SET_USERSTATE(state, userState) {
      state.userState = userState;
    },
    SET_ZIP(state, zip) {
      state.zip = zip;
    },
    SET_IMAGEURL(state, imageurl) {
      state.imageurl = imageurl;
    },
    SET_MORTGAGE(state, mortgage) {
      state.mortgage = mortgage;
    },
    SET_RENT(state, rent) {
      state.rent = rent;
    },
    ADD_HOUSE(state, houses) {
      state.houses = houses;
    }
  },
  actions: {
    setName(context, name) {
      this.commit("SET_NAME", name);
    },
    setAddress(context, address) {
      this.commit("SET_ADDRESS", address);
    },
    setCity(context, city) {
      this.commit("SET_CITY", city);
    },
    setUserState(context, userState) {
      this.commit("SET_STATE", userState);
    },
    setZipcode(context, zipcode) {
      this.commit("SET_ZIPCODE", zipcode);
    },
    setImageUrl(context, imageurl) {
      this.commit("SET_IMAGEURL", imageurl);
    },
    setMortgage(context, mortgage) {
      this.commit("SET_MORTGAGE", mortgage);
    },
    setRent(context, rent) {
      this.commit("SET_RENT", rent);
    },

    addHouse() {
      axios
        .post("/api/newhouse", {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          userState: this.state.userState,
          zipcode: this.state.zipcode,
          imageurl: this.state.imageurl,
          mortgage: this.state.mortgage,
          rent: this.state.rent
        })
        .then(res => {
          console.log(res.data);
          // this.commit("ADD_HOUSE", res.data);
        });
    }
  }
});
