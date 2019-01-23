<template>
    <div> <template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="mortgageAmt"
            v-model="mortgageAmt"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Monthly Mortgage"
            placeholder="How much do you pay?"
            required
          ></v-text-field>
          <v-text-field
            ref="desRent"
            v-model="desRent"
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
          <v-btn color="primary" flat @click="submit">Next</v-btn>
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
    form() {
      return {
        mortgageAmt: this.mortgageAmt,
        desRent: this.desRent
      };
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
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    }
  }
};
</script>

<style scoped></style>