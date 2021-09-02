<template>
  <v-card elevation="2" class="red lighten-2 rounded-lg white--text">
    <v-container>
      <v-row>
        <v-col cols="9" class="text-h7 font-weight-light pb-0"
          >TOTAL DEATHS</v-col
        >
        <v-col class="d-flex justify-end align-center pb-0">
          <v-img
            class="white--text"
            style="filter: invert(100%)"
            src="../assets/img/virus.png"
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
          >580.413</v-col
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