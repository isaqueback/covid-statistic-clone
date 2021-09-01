<template>
  <v-container>
    <v-row>
      <v-col>
        <Countries />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Update />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <Cards />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Countries from "./Countries";
import Update from "./Update";
import Cards from "./Cards";

export default {
  components: { Countries, Update, Cards },
};
</script>

<style>
</style>