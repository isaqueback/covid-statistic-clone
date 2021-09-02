<template>
  <v-container class="px-0">
    <v-row class="">
      <v-col class="">
        <Country />
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <Cases/>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <Deaths/>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <FirstDose/>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <SecondDose/>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <TotalDoses/>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Country from "./Country";
import Cases from "./Cases";
import Deaths from "./Deaths";
import FirstDose from "./FirstDose";
import SecondDose from "./SecondDose";
import TotalDoses from "./TotalDoses";

export default {
  components: { Country, Cases, Deaths, FirstDose, SecondDose, TotalDoses },
};
</script>

<style scoped>
</style>