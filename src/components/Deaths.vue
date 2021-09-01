<template>
  <v-card elevation="2" class="red lighten-2 rounded-xl white--text">
    <v-container>
      <v-row class="mt-1">
        <v-col cols="9" class="text-h4 font-weight-light">TOTAL DEATHS</v-col>
        <v-col class="d-flex justify-end align-center">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/virus.png"
            max-width="50"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="mb-1 d-flex flex-column">
        <v-col
          class="d-flex justify-center align-center font-weight-medium text-h2 py-0"
          >580.413</v-col
        >
        <v-col
          class="d-flex justify-center align-center font-weight-light text-h4"
        >
          <v-img
            src="../assets/img/up.png"
            style="filter: invert(100%)"
            max-width="25"
            max-height="auto"
          ></v-img>
          <span>939 today </span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
</style>