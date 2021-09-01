<template>
  <v-container>
    <v-row>
      <v-col>
        <Country />
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <Cases/>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Country from "./Country";
import Cases from "./Cases";

export default {
  components: { Country, Cases },
};
</script>

<style>
</style>