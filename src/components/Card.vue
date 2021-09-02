<template>
  <v-card elevation="2" class="cyan darken-2 rounded-lg white--text">
    <v-container>
      <v-row>
        <v-col cols="9" class="text-h7 font-weight-light pb-0">
          {{ this.$store.state.titleKey[number] }}</v-col
        >
        <v-col class="d-flex justify-end align-center pb-0">
          <v-img
            class="white--text"
            v-if="number == 0"
            style="filter: invert(100%)"
            src="../assets/img/country.png"
            max-width="20"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 1"
            style="filter: invert(100%)"
            src="../assets/img/pacient.png"
            max-width="20"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 2"
            style="filter: invert(100%)"
            src="../assets/img/virus.png"
            max-width="20"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 3"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            max-width="20"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 4"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            max-width="20"
          ></v-img>

          <v-img
            class="white--text"
            v-else
            style="filter: invert(100%)"
            src="../assets/img/shield.png"
            max-width="20"
          ></v-img>

          <v-img
            class="white--text"
            v-if="number == 4"
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
        >
          <span v-if="number == 0">{{ this.$store.state.country }}</span>
          <span v-else-if="number == 1">{{
            this.$store.state.totalCases
          }}</span>
          <span v-else-if="number == 2">{{
            this.$store.state.totalDeaths
          }}</span>
          <span v-else-if="number == 3">
            {{ this.$store.state.firstDose }}</span
          >
          <span v-else-if="number == 4">
            {{ this.$store.state.secondDose }}</span
          >
          <span v-else>{{this.$store.state.totalDoses}}</span>
        </v-col>
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
          <span v-if="number == 0">
            POPULATION: {{ this.$store.state.population }}
          </span>
          <span v-else-if="number == 1">
            <v-img
              class="d-inline-block"
              src="../assets/img/up.png"
              style="filter: invert(100%)"
              max-width="12"
              max-height="auto"
            ></v-img>
            {{ this.$store.state.todayCases }} today
          </span>
          <span v-else-if="number == 2">
              <v-img
              class="d-inline-block"
              src="../assets/img/up.png"
              style="filter: invert(100%)"
              max-width="12"
              max-height="auto"
            ></v-img>
            {{ this.$store.state.todayDeaths }} today
          </span>
          <span v-else-if="number == 3">
              {{this.$store.state.firstDosePercentage}}% of total population
          </span>
          <span v-else-if="number == 4">
              {{ this.$store.state.secondDosePercentage }}% of total population
          </span>
          <span v-else>
              <v-img
              class="d-inline-block"
              src="../assets/img/up.png"
              style="filter: invert(100%)"
              max-width="12"
              max-height="auto"
            ></v-img>
              {{ this.$store.state.todayDoses }} today</span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["number"],
};
</script>

<style scoped>
</style>