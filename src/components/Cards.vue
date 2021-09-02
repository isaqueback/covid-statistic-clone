<template>
  <v-container class="px-0">
    <v-row v-for="n in 6" :key="n">
      <v-col>
        <Card :number="n-1"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card";
// import Country from "./Country";
// import Cases from "./Cases";
// import Deaths from "./Deaths";
// import FirstDose from "./FirstDose";
// import SecondDose from "./SecondDose";
// import TotalDoses from "./TotalDoses";

export default {
  data() {
    return {
      titleValue: [],
    };
  },
  components: {
    Card,
//     Country,
//     Cases,
//     Deaths,
//     FirstDose,
//     SecondDose,
//     TotalDoses,
  },
};
</script>

<style scoped>
</style>