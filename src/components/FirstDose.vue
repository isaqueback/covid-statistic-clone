<template>
  <v-card elevation="2" class="cyan lighten-1 rounded-lg white--text">
    <v-container>
      <v-row>
        <v-col cols="9" class="text-h7 font-weight-light pb-0"
          >FIRST DOSE</v-col
        >
        <v-col class="d-flex justify-end align-center pb-0">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            max-width="20"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column">
        <v-col
          class="
            d-flex
            justify-center
            align-center
            font-weight-medium
            text-h5
            py-0
            pt-1
          "
          >{{ firstDose }}</v-col
        >
        <v-col
          class="
            d-flex
            justify-center
            align-center
            font-weight-light
            text-h7 text-center
            pt-0
          "
        >
          62,86% of total population
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      firstDose: "134.521.410",
    };
  },
};
</script>

<style scoped>
</style>