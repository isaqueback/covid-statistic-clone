<template>
  <v-autocomplete
    :items="this.$store.state.countriesName"
    class="font-weight-light text-h6 text-sm-h4 text-md-h5 mt-sm-5"
    outlined
    :dense="breakpoint == 'xs'"
    v-model="value"
  >
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      value: this.$store.state.countriesName[0],
    };
  },
  methods: {},
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    acronym() {
      const index = this.$store.state.countriesName.findIndex(
        (el) => el == this.$store.state.country
      );

      return this.$store.state.countriesAcronym[index];
    },
  },
  watch: {
    value() {
      // Country
      this.$store.state.country = this.value;

      this.axios
        .get(
          "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json"
        )
        .then((response) => {
          // Update
          this.$store.state.update =
            response.data[this.acronym].data[
              response.data[this.acronym].data.length - 1
            ]["date"]

          // Total Cases
          this.$store.state.totalCases =
            response.data[this.acronym].data[
              response.data[this.acronym].data.length - 1
            ]["total_cases"];

          // Total Deaths
          this.$store.state.totalDeaths =
            response.data[this.acronym].data[
              response.data[this.acronym].data.length - 1
            ]["total_deaths"];

          // First Dose
          this.$store.state.firstDose =
            response.data[this.acronym].data[
              response.data[this.acronym].data.length - 1
            ]["people_vaccinated"];

          // Second Doses
          this.$store.state.secondDose =
            response.data[this.acronym].data[
              response.data[this.acronym].data.length - 1
            ]["people_fully_vaccinated"];

          // Total Doses
          this.$store.state.totalDoses =
            response.data[this.acronym].data[
              response.data[this.acronym].data.length - 1
            ]["total_vaccinations"];

          // Population
          this.$store.state.population = response.data[this.acronym].population;

          // Today Case
          this.$store.state.todayCases = response.data[this.acronym].data[response.data[this.acronym].data.length-1]['new_cases']

          // Today Deaths
          this.$store.state.todayDeaths = response.data[this.acronym].data[response.data[this.acronym].data.length-1]['new_deaths']

          // First Dose Percentage
          this.$store.state.firstDosePercentage = response.data[this.acronym].data[response.data[this.acronym].data.length-1]['people_vaccinated_per_hundred']

          // Second Dose Percentage
          this.$store.state.secondDosePercentage = response.data[this.acronym].data[response.data[this.acronym].data.length-1]['people_fully_vaccinated_per_hundred']

          // Today Doses
          this.$store.state.todayDoses = response.data[this.acronym].data[response.data[this.acronym].data.length-1]['new_vaccinations']
        });
    },
  },
};
</script>

<style>
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
</style>