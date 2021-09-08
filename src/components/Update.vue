<template>
  <div
    class="
      text-caption
      grey--text
      text-center text-sm-h5 text-md-subtitle-2 text-lg-caption text-xl-caption
      pb-3
      pr-lg-16 pr-xl-16
      mr-xl-9
    "
  >
    LAST UPDATED AT:
    <span class="grey--text text--darken-1 font-weight-medium">{{
      this.$store.state.update
    }}</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>