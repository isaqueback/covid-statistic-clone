<template>
  <v-card
    elevation="2"
    class="rounded-lg white--text"
    :class="{
      'card-lg': breakpoint == 'lg',
      'card-xl': breakpoint == 'xl',
      'green accent-2': number == 0,
      'deep-purple accent-1': number == 1,
      'red lighten-2': number == 2,
      'cyan lighten-1': number == 3,
      'cyan darken-1': number == 4,
      'cyan darken-2': number == 5,
    }"
  >
    <v-container>
      <v-row>
        <v-col
          cols="8"
          class="
            font-weight-light
            pb-0
            text-sm-h5 text-lg-subtitle-2 text-xl-subtitle-2
          "
        >
          {{ this.$store.state.titleKey[number] }}</v-col
        >
        <v-col cols="4" class="d-flex justify-end align-center pb-0">
          <v-img
            class="white--text"
            v-if="number == 0"
            style="filter: invert(100%)"
            src="../assets/img/country.png"
            :max-width="icon"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 1"
            style="filter: invert(100%)"
            src="../assets/img/pacient.png"
            :max-width="icon"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 2"
            style="filter: invert(100%)"
            src="../assets/img/virus.png"
            :max-width="icon"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 3"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            :max-width="icon"
          ></v-img>

          <v-img
            class="white--text"
            v-else-if="number == 4"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            :max-width="icon"
          ></v-img>

          <v-img
            class="white--text"
            v-else
            style="filter: invert(100%)"
            src="../assets/img/shield.png"
            :max-width="icon"
          ></v-img>

          <v-img
            class="white--text"
            v-if="number == 4"
            style="filter: invert(100%)"
            src="../assets/img/injection.png"
            :max-width="icon"
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-column">
        <v-col
          :class="{
            'd-flex': true,
            'justify-center': true,
            'align-center': true,
            'font-weight-medium': true,
            'py-0': true,
            'pt-1': true,
            'text-h5': breakpoint == 'xs',
            'text-h3': breakpoint == 'sm' || breakpoint == 'md',
            'text-h4': breakpoint == 'lg' || breakpoint == 'xl',
          }"
        >
          <span v-if="number == 0">{{
            this.$store.state.country.toUpperCase()
          }}</span>
          <span v-else-if="number == 1">{{
            this.$store.state.totalCases | thousandSeparator
          }}</span>
          <span v-else-if="number == 2">{{
            this.$store.state.totalDeaths | thousandSeparator
          }}</span>
          <span v-else-if="number == 3">
            {{ this.$store.state.firstDose | thousandSeparator }}</span
          >
          <span v-else-if="number == 4">
            {{ this.$store.state.secondDose | thousandSeparator }}</span
          >
          <span v-else>{{ this.$store.state.totalDoses | thousandSeparator }}</span>
        </v-col>
        <v-col
          class="
            d-flex
            justify-center
            align-center
            font-weight-light
            text-h7 text-center text-sm-h5 text-lg-subtitle-2
            pt-0
          "
        >
          <span v-if="number == 0">
            POPULATION: {{ this.$store.state.population | thousandSeparator }}
          </span>
          <span v-else-if="number == 1">
            <v-img
              class="d-inline-block"
              src="../assets/img/up.png"
              style="filter: invert(100%)"
              max-width="12"
              max-height="auto"
            ></v-img>
            {{ this.$store.state.todayCases | thousandSeparator }} today
          </span>
          <span v-else-if="number == 2">
            <v-img
              class="d-inline-block"
              src="../assets/img/up.png"
              style="filter: invert(100%)"
              max-width="12"
              max-height="auto"
            ></v-img>
            {{ this.$store.state.todayDeaths | thousandSeparator }} today
          </span>
          <span v-else-if="number == 3">
            {{ this.$store.state.firstDosePercentage | thousandSeparator }}% of total population
          </span>
          <span v-else-if="number == 4">
            {{ this.$store.state.secondDosePercentage | thousandSeparator }}% of total population
          </span>
          <span v-else>
            <v-img
              class="d-inline-block"
              src="../assets/img/up.png"
              style="filter: invert(100%)"
              max-width="12"
              max-height="auto"
            ></v-img>
            {{ this.$store.state.todayDoses | thousandSeparator }} today</span
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["number"],
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    icon() {
      if (this.breakpoint == "xs") return "20";
      else if (this.breakpoint == "sm") return "35";
      else if (this.breakpoint == "md") return "30";
      else return "25";
    },
  },
  filters: {
    thousandSeparator(value) {
       return Number(value).toLocaleString()
    },
  }
};
</script>

<style scoped>
.card-lg {
  width: 240px;
  height: 100%;
}

.card-xl {
  width: 270px;
}
</style>