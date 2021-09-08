<template>
  <v-app>
    <v-main
      :class="{
        'mx-3 mt-7': breakpoint == 'xs',
        'mx-10 mt-16 pt-3': breakpoint == 'sm',
        'mt-16 pt-9': breakpoint == 'md',
        'mt-16 pt-16 ': breakpoint == 'lg',
        'mt-16 pt-16': breakpoint == 'xl'
      }"
    >
      <v-container>
        <v-row :class="{'d-flex flex-row flex-nowrap justify-center' : breakpoint == 'lg' || breakpoint == 'xl'}">
          <v-col class="" cols="4" v-if="breakpoint == 'lg' || breakpoint == 'xl'">
            <v-img class="" src="./assets/img/hero.svg" :max-width="breakpoint == 'lg' ? '352.766' : '470.28'"></v-img>
          </v-col>

          <v-col :cols="breakpoint == 'xl' ? 6 : ''">
            <v-row>
              <v-col>
                <Logo />
              </v-col>
            </v-row>

            <v-row class="mt-0">
              <v-col class="pt-0">
                <Info />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "./components/Logo";
import Info from "./components/Info";

export default {
  name: "App",
  components: { Logo, Info },
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
  },
};
</script>

<style>
* {
  font-family: "Poppins", "sans-serif";
}
</style>
