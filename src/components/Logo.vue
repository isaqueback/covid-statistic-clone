<template>
  <v-img
    src="../assets/img/logo.png"
    :max-width="breakpoint == 'lg' ? 703.234 : ''"
  >
  </v-img>
</template>

<script>
export default {
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>

<style>
</style>