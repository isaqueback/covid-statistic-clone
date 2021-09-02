<template>
  <v-autocomplete
    :items="items"
    class="rounded-lg text-h6 font-weight-medium"
    outlined
  >
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      items: ["Brazil", "United States", "Spanish", "Portugal"],
    };
  },
};
</script>

<style scoped>
</style>