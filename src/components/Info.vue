<template>
  <v-container>
    <v-row style="height: 100px">
      <v-col class="pb-0 px-0" :cols="breakpointMd ? '4' : '12'">
        <Countries />
      </v-col>

      <v-col v-if="breakpointMd" :cols="breakpointMd ? '5' : '12'">
        <v-divider></v-divider>
      </v-col>

      <v-col class="pb-0 px-0" v-if="breakpointMd">
        <Update/>
      </v-col>
    </v-row>

    <v-row class="mt-0" v-if="!breakpointMd">
      <v-col class="py-0 px-0">
        <Update />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-0">
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
  data() {
    return {};
  },
  computed: {
    breakpointMd() {
      return this.$vuetify.breakpoint.md;
    },
  },
  components: { Countries, Update, Cards },
};
</script>

<style>
</style>