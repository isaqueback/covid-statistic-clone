<template>
  <v-autocomplete :items="items" class="countries rounded-lg text-h3" outlined>
  </v-autocomplete>
</template>

<script>
export default {
    data() {
        return {
            items: ['Brazil', 'United States', 'Spanish', 'Portugal']
        }
    }
};
</script>

<style>
.v-text-field input {
  padding: 50px 10px !important;
}
</style>