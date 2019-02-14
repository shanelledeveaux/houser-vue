<template>
    <div> <template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="mortgageAmt"
            v-model="mortgage"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Monthly Mortgage"
            placeholder="How much do you pay?"
            required
          ></v-text-field>
          <v-text-field
            ref="desRent"
            v-model="rent"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Desired Rent"
            placeholder="How much would you rent it for?"
            required
          ></v-text-field>
          
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <v-btn
                slot="activator"
                icon
                class="my-0"
                @click="resetForm"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <router-link to="/">
          <v-btn color="primary" @click="submit" flat>Add</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template></div>
</template>

<script>
export default {
  data: () => ({
    errorMessages: "",
    mortgageAmt: null,
    desRent: null,
    formHasErrors: false
  }),

  computed: {
    // form() {
    //   return {
    //     mortgageAmt: this.mortgageAmt,
    //     desRent: this.desRent
    //   };
    // }
    mortgage: {
      set(mortgage) {
        this.$store.commit("SET_MORTGAGE", mortgage);
      },
      get() {
        return this.$store.state.mortgage;
      }
    },
    rent: {
      set(rent) {
        this.$store.commit("SET_RENT", rent);
      },
      get() {
        return this.$store.state.rent;
      }
    }
  },

  watch: {
    name() {
      this.errorMessages = "";
    }
  },

  methods: {
    addressCheck() {
      this.errorMessages = !this.mortgageAmt ? "Hey! I'm required" : "";

      return true;
    },
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset();
      });
    },
    // submit() {
    //   this.formHasErrors = false;

    //   Object.keys(this.form).forEach(f => {
    //     if (!this.form[f]) this.formHasErrors = true;

    //     this.$refs[f].validate(true);
    //   });

    submit() {
      //console.log("Hello");
      this.$store.dispatch("addHouse");
    }
  }
};
</script>

<style scoped></style>