<template>
  <v-card elevation="2" class="teal accent-3 rounded-lg white--text">
    <v-container>
      <v-row>
        <v-col class="text-h7 font-weight-light pb-0">COUNTRY</v-col>
        <v-col class="d-flex justify-end align-center pb-0">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/country.png"
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
          >BRAZIL</v-col
        >
        <v-col
          class="
            d-flex
            justify-center
            align-center
            font-weight-light
            text-h7
            pt-0
          "
          >POPULATION:<span class="ml-2">200.000.000</span></v-col
        >
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
</style>