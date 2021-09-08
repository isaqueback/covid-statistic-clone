<template>
  <v-container class="px-0" :class="{'d-flex flex-row flex-wrap justify-space-between align-baseline' : breakpoint == 'lg' || breakpoint == 'xl'
    }">
    <v-row v-for="n in 6" :key="n">
      <v-col>
        <Card :number="n-1"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card";

export default {
  data() {
    return {
    };
  },
  components: { Card },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name
    }
  }
};
</script>

<style scoped>
</style>