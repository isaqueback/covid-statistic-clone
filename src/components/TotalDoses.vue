<template>
  <v-card elevation="2" class="cyan darken-2 rounded-xl white--text">
    <v-container>
      <v-row class="mt-1">
        <v-col cols="9" class="text-h4 font-weight-light">TOTAL DOSES</v-col>
        <v-col class="d-flex justify-end align-center">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/shield.png"
            max-width="50"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="mb-1 d-flex flex-column">
        <v-col
          class="d-flex justify-center align-center font-weight-medium text-h2 py-0"
          >61.416.222</v-col
        >
        <v-col
          class="d-flex justify-center align-center font-weight-light text-h4 text-center"
        >
          28,7% of total population
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