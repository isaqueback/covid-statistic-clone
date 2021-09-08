<template>
  <v-autocomplete
    :items="this.$store.state.countries"
    class="font-weight-light text-h6 text-sm-h4 text-md-h5 mt-sm-5"
    outlined
    :dense="breakpoint == 'xs'"
    v-model="value"
  >
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      value: this.$store.state.countries[0],
    };
  },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
  watch: {
    value() {
      this.$store.state.country = this.value;
    },
  },
};
</script>

<style>
.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0px !important;
}
</style>