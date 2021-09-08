<template>
  <v-container>
    <v-row>
      <v-col class="pb-0 px-0" :cols="breakpoint == 'xs' || breakpoint == 'sm' ? '12' : '4'">
        <Countries />
      </v-col>

      <v-col
        class="d-flex align-center"
        :cols="breakpoint == 'lg' || breakpoint == 'xl' ? '4' : '5'"
        v-if="breakpoint == 'md' || breakpoint == 'lg' || breakpoint == 'xl'"
      >
        <v-divider></v-divider>
      </v-col>

      <v-col
        class="pb-0 px-0 d-flex align-center justify-end"
        v-if="breakpoint == 'md' || breakpoint == 'lg' || breakpoint == 'xl'"
      >
        <Update />
      </v-col>
    </v-row>

    <v-row class="mt-0" v-if="breakpoint == 'xs' || breakpoint == 'sm'">
      <v-col class="py-0 px-0">
        <Update />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="px-0 py-0">
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
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  components: { Countries, Update, Cards },
};
</script>

<style scoped>
</style>