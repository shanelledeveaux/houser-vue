<template>
    <div> <template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="imgUrl"
            v-model="imgUrl"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Image"
            placeholder="Paste URL Here"
            required
          ></v-text-field>
          <div class="container">
        <img class="image-upload" v-if="imgUrl.length > 10" v-bind:src="imgUrl">
        <img
          class="image-upload"
          v-else
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZ3Fo6lvvr9t9hi1hs_dG6MnQRmaNh5qO-jdPeWAj8eiGW6mO"
        >
      </div>
          
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
          <router-link to="/wizard3">
          <v-btn color="primary" flat @click="submit">Next</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template></div>
</template>

<script>
export default {
  //   data: () => ({
  //     errorMessages: "",
  //     imgUrl: "",
  //     formHasErrors: false
  //   }),

  computed: {
    imgUrl: {
      set(imageurl) {
        this.$store.commit("SET_IMAGEURL", imageurl);
      },
      get() {
        return this.$store.state.imageurl;
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
      this.errorMessages = !this.imgUrl ? "Hey! I'm required" : "";

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