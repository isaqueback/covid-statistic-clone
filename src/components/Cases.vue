<template>
  <v-card elevation="2" class="deep-purple accent-1 rounded-lg white--text">
    <v-container>
      <v-row>
        <v-col cols="9" class="text-h7 font-weight-light pb-0"
          >TOTAL CASES</v-col
        >
        <v-col class="d-flex justify-end align-center pb-0">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/pacient.png"
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
          >20.776.870</v-col
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
        >
          <v-img
            src="../assets/img/up.png"
            style="filter: invert(100%)"
            max-width="15"
            max-height="auto"
          ></v-img>
          <span>24.589 today</span>
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