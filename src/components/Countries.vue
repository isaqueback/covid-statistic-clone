<template>
  <v-autocomplete
    :items="this.$store.state.countries"
    class="rounded-lg text-h6 font-weight-medium"
    outlined
    v-model="value"
  >
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
        value: this.$store.state.countries[0]
    };
  },
  watch: {
      value() {
          this.$store.state.country = this.value
      }
  }
};
</script>

<style scoped>
</style>