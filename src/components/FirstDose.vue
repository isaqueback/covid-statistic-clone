<template>
  <v-card elevation="2" class="cyan lighten-1 rounded-xl white--text">
    <v-container>
      <v-row class="mt-1">
        <v-col cols="9" class="text-h4 font-weight-light">FIRST DOSE</v-col>
        <v-col class="d-flex justify-end align-center">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            max-width="50"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="mb-1 d-flex flex-column">
        <v-col
          class="d-flex justify-center align-center font-weight-medium text-h2 py-0"
          >{{firstDose}}</v-col
        >
        <v-col
          class="d-flex justify-center align-center font-weight-light text-h4 text-center"
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
            firstDose: '134.521.410'
        }
    }
};
</script>

<style scoped>
</style>